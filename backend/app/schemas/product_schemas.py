from pydantic import BaseModel, Field, HttpUrl


class ProductSchema(BaseModel):
    name: str = Field(min_length=1, max_length=255)
    price: float = Field(gt=0)  # Precio no puede ser negativo
    image: HttpUrl
