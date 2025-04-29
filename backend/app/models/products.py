from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey, TIMESTAMP, func
from sqlalchemy.orm import relationship
from bbdd.database import Base
from models.logins import user_products


class Products(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    price = Column(Float, nullable=False)
    image = Column(Text, nullable=False)

    price_history = relationship(
        "PriceHistory", back_populates="products", cascade="all, delete")
    users = relationship(
        "Users", secondary=user_products, back_populates="products", cascade="all, delete"
    )
