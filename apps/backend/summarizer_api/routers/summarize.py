import logging

from fastapi import APIRouter

from summarizer_api.models.summarize import SummarizeBody, SummarizeResponse
from summarizer_api.services.summarize import summarizeService

logger = logging.getLogger(__name__)


router = APIRouter()


# api/v1/summarize/test
@router.get("/test", status_code=200)
async def test_route():
    logger.info("Test route called")

    return {"message": "Test route called"}


# api/v1/summarize
@router.post("/", status_code=200, response_model=SummarizeResponse)
async def summarize_route(summarize_body: SummarizeBody):
    logger.info("Summarize route called")

    resp = await summarizeService(summarize_body)

    return resp
