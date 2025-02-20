from pydantic import BaseModel, ConfigDict


class SummarizeBody(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    url: str
    model: str
    messageType: int


class SummarizeResponse(BaseModel):
    summary: str
