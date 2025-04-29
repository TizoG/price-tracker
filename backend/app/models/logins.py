from sqlalchemy import TIMESTAMP, Column, Integer, String, ForeignKey, Table, func
from sqlalchemy.orm import relationship
from app.bbdd.database import Base


user_products = Table(
    "user_products",
    Base.metadata,
    Column("user_id", Integer, ForeignKey("user.id")),
    Column("product_id", Integer, ForeignKey("products.id")),
)


class Users(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    date_user = Column(TIMESTAMP, server_default=func.now(), nullable=False)
    # Relacion con la tabla producto
    products = relationship(
        "Products", secondary=user_products, back_populates="users", cascade="all, delete"
    )
