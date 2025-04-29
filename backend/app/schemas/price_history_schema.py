import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


class PriceHistorySchema(BaseModel):
    product_id: int
    date_scraping: datetime
    price: float
    source: Optional[str]  # Permite que sea null

    model_config = ConfigDict(arbitrary_types_allowed=True)
