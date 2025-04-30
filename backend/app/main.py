from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.products.api_products import router as api_products
from app.api.users.api_login import router as api_login

from app.bbdd.database import Base, engine


# Instaciamos la app de FastAPI
app = FastAPI()

# Incluimos las rutas
app.include_router(api_products)
app.include_router(api_login)

# Configuramos CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Crear Tablas


def crear_tablas():
    try:
        Base.metadata.create_all(bind=engine)
        print("Tablas creadas correctamente.")
    except Exception as e:
        print(f"Error al crear las tablas: {e}")


def delete_table():
    try:
        Base.metadata.drop_all(bind=engine)
        print("Tablas eliminadas correctamente.")
    except Exception as e:
        print(f"Error al eliminar las tablas: {e}")


# instanciamos las funciones
if __name__ == "__main__":
    delete_table()
    crear_tablas()
