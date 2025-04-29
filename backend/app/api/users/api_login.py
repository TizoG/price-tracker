from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.bbdd.database import local_session
from app.models.logins import Users
from app.schemas.logins_schema import LoginsSchema
from bcrypt import hashpw, gensalt, checkpw
from backend.config import SECRET_KEY, ALGORITHM
from fastapi.security import OAuth2PasswordBearer, OAuth2AuthorizationCodeBearer, OAuth2PasswordRequestForm
from fastapi import Security
from backend.auth import create_access_token, verify_access_token


router = APIRouter()


def get_db():
    db = local_session()
    try:
        yield db
    finally:
        db.close()


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


@router.get("/user/{email}")
def get_user(email: str, token: str = Security(oauth2_scheme), db: Session = Depends(get_db)):
    payload = verify_access_token(token)  # verificamos el token
    if payload.get("email") != email:
        raise HTTPException(
            status_code=403, detail="No tienes permiso para acceder a este usuario.")

    db_user = db.query(Users).filter(Users.email == email).first()

    if not db_user:
        raise HTTPException(
            status_code=404, detail="El usuario no existe en la base de datos."
        )

    return {
        "user": {
            "id": db_user.id,
            "name": db_user.name,
            "email": db_user.email,
            "date": db_user.date_user,
            "products": [{"id": product.id, "name": product.name} for product in db_user.products]
        }
    }


@router.post("/user")
def post_user(user_data: LoginsSchema, db: Session = Depends(get_db)):
    db_user = db.query(Users).filter(Users.email == user_data.email).first()

    if db_user:
        raise HTTPException(
            status_code=409, detail="El usuario ya existe."
        )
    hashed_password = hashpw(user_data.password.encode(
        "utf-8"), gensalt()).decode("utf-8")
    new_user = Users(
        name=user_data.name,
        email=user_data.email,
        password=hashed_password,
        date_user=user_data.date_user
    )

    try:
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error al registrar al usuario {e}")

    return {"message": "Usuario creado correctamente", "user_id": new_user.id}


# TODO: Pensar en si hacer un endpoint para actualizar los datos del usuario

@router.delete("/user/delete/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(Users).filter(Users.id == user_id).first()

    if not db_user:
        raise HTTPException(
            status_code=404, detail="El usuario no se encuentra en la base de datos."
        )
    if len(db_user.products) > 0:  # me puede traer problemas si es asi cambiar solo a if db_users.prodcts
        raise HTTPException(
            status_code=400, detail="El usuario tiene productos sin eliminar.")
    try:
        db.delete(db_user)
        db.commit()
        print("✅ Usuario eliminado de la base de datos")
        return {"message": "Usuario eliminado correctamente."}
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error al eliminar al usuario {e}"
        )


@router.post("/login")
def login_user(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    db_user = db.query(Users).filter(Users.email == form_data.username).first()

    if not db_user or not checkpw(form_data.password.encode("utf-8"), db_user.password.encode("utf-8")):
        raise HTTPException(
            status_code=401, detail="Credenciales incorrectas.")

    token = create_access_token({"email": db_user.email})

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": db_user.id,
            "name": db_user.name,
            "email": db_user.email
        }
    }
