from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey, TIMESTAMP, func
from sqlalchemy.orm import relationship
from bbdd.database import Base


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
