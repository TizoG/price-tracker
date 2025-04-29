from fastapi import HTTPException
import jwt
from datetime import datetime, timedelta
from config import SECRET_KEY, ALGORITHM

# Cuando un usuario se loguee, le generamos un token valido durante 30min


def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=30)):
    """
    Cuando el usuario se loguee, le generamos un token valido
    durante 30 min
    """
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return token


def verify_access_token(token: str):
    """
    Cuando el usuario envie un token en sus peticiones,
    necesitamos verificar si es valido y no ha expirado.
    """

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload  # retornamos los datos del usuario si el token es valido
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expirado")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token invalido")
