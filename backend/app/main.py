from fastapi import FastAPI
from sqlalchemy.orm import sessionmaker
from bbdd.database import Base, local_session, engine
from models.price_history import PriceHistory
from models.products import Products


app = FastAPI()


# Crear Tablas
def crear_tablas():
    try:
        Base.metadata.create_all(bind=engine)
        print("Tablas creadas correctamente.")
    except Exception as e:
        print(f"Error al crear las tablas: {e}")


if __name__ == "__main__":
    crear_tablas()
