from datetime import datetime
from pydantic import BaseModel, ConfigDict


class LoginsSchema(BaseModel):
    name: str
    email: str
    password: str
    date_user: datetime

    model_config = ConfigDict(arbitrary_types_allowed=True)
