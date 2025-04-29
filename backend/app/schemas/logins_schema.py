import datetime
from pydantic import BaseModel


class LoginsSchema(BaseModel):
    name: str
    email: str
    password: str
    date_user: datetime
