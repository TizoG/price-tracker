from pydantic import BaseModel, Field


class ProductSchema(BaseModel):
    id: int
    name: str = Field(min_length=1, max_length=255)
    price: float = Field(gt=0)  # Precio no puede ser negativo
    image: str
