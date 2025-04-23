from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey, TIMESTAMP, func
from sqlalchemy.orm import relationship


class Products(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    price = Column(Float, nullable=False)
    image = Column(Text, nullable=False)

    price_history = relationship(
        "PriceHistory", back_populates="products", cascade="all, delete")


class PriceHistory(Base):
    __tablename__ = "price_history"
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    date_scraping = Column(
        TIMESTAMP, server_default=func.now(), nullable=False)
    price = Column(Float, nullable=False)
    source = Column(String(100), nullable=True)
    variation = Column(Float, nullable=True)

    product = relationship(
        "Products", back_populates="price_history", cascade="all, delete")
