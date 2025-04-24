from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.bbdd.database import local_session
from app.models.products import Products
from app.models.price_history import PriceHistory


# Inicializamos router
router = APIRouter()


# Creamos la entrada
def get_db():
    db = local_session()
    try:
        yield db
    finally:
        db.close()


@router.get("/products/{name_product}")
def get_products(name_product: str, db: Session = Depends(get_db)):
    db_products = db.query(Products).filter(
        Products.name == name_product).first()

    if not db_products:
        raise HTTPException(
            status_code=404, detail="Este producto no se encuentra en la base de datos"
        )

    price_histroy = db.query(PriceHistory).filter(
        PriceHistory.id == db_products.id).all()

    return {
        "product": {
            "id": db_products.id,
            "name": db_products.name,
            "price": db_products.price,
            "image": db_products.image,
            "history": [{"date_scraping": p.date_scraping, "price": p.price, "source": p.source} for p in price_histroy]
        }

    }
