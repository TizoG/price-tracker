from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import sessionmaker
from bbdd.database import Base, local_session, engine
from models.price_history import PriceHistory
from models.products import Products

# Instaciamos la app de FastAPI
app = FastAPI()

# Incluimos las rutas
app.include_router(local_session)

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


# instanciamos las funciones
if __name__ == "__main__":
    crear_tablas()
