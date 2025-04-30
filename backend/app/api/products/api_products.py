from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.bbdd.database import local_session
from app.models.products import Products
from app.models.price_history import PriceHistory
from app.schemas.price_history_schema import PriceHistorySchema
from app.schemas.product_schemas import ProductSchema


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
        PriceHistory.product_id == db_products.id).all()

    return {
        "product": {
            "id": db_products.id,
            "name": db_products.name,
            "price": db_products.price,
            "image": db_products.image,
            "history": [{"date_scraping": p.date_scraping, "price": p.price, "source": p.source} for p in price_histroy]
        }

    }


@router.post("/products")
def post_product(product_data: ProductSchema, product_history: PriceHistorySchema, db: Session = Depends(get_db)):
    db_product = db.query(Products).filter(
        Products.name == product_data.name).first()

    if db_product:
        raise HTTPException(
            status_code=409, detail="El producto ya existe en la base de datos.")

    if not all([product_data.name, product_data.price, product_data.image]):
        raise HTTPException(
            status_code=422, detail="Datos del producto incompletos.")

    new_product = Products(
        name=product_data.name,
        price=product_data.price,
        image=product_data.image
    )
    try:
        db.add(new_product)
        db.commit()
        db.refresh(new_product)
        new_price_history = PriceHistory(
            product_id=new_product.id,
            date_scraping=product_history.date_scraping,
            price=product_history.price,
            source=product_history.source
        )
        db.add(new_price_history)
        db.commit()
        db.refresh(new_price_history)
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500, detail=f"Error al registrar el producto o su historial en la base de datos: {e}")


@router.put("/products/{product_id}")
def update_product(product_id: int, product_data: ProductSchema, product_history: PriceHistorySchema, db: Session = Depends(get_db)):
    db_product = db.query(Products).filter(Products.id == product_id).first()

    if not db_product:
        raise HTTPException(
            status_code=404, detail="El producto no existe en la base de datos.")

    if not all([product_data.name, product_data.price, product_data.image]):
        raise HTTPException(
            status_code=422, detail="Datos del producto incompletos.")

    db_product.name = product_data.name
    db_product.price = product_data.price
    db_product.image = product_data.image

    try:
        db.add(db_product)
        db.commit()
        db.refresh(db_product)

        new_price_history = PriceHistory(
            product_id=db_product.id,
            date_scraping=product_history.date_scraping,
            price=product_history.price,
            source=product_history.source
        )
        db.add(new_price_history)
        db.commit()
        db.refresh(new_price_history)
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500, detail=f"Error al registrar el producto o su historial en la base de datos: {e}")


@router.delete("/products/delete/{product_id}")
def delete_product(product_id: int,  db: Session = Depends(get_db)):
    db_product = db.query(Products).filter(Products.id == product_id).first()
    db_price_history = db.query(PriceHistory).filter(
        PriceHistory.product_id == product_id).all()

    if not db_product:
        raise HTTPException(
            status_code=404, detail="El producto no está en la base de datos.")
    try:
        # Eliminamos el historial de precios
        for history in db_price_history:
            db.delete(history)

        # Eliminamos el producto
        db.delete(db_product)

        print("✅ Producto eliminado de la base de datos")
        return {"message": "Producto eliminado correctamente."}
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500, detail=f"Error al eliminar el producto de la base de datos {e}")
