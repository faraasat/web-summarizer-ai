import logging

from fastapi import APIRouter

from summarizer_api.config import config

logger = logging.getLogger(__name__)


router = APIRouter()


# api/v1/summarize/test
@router.get("/test", status_code=200)
async def test_route():
    logger.info("Test route called")

    return {"message": "Test route called"}


# api/v1/summarize
@router.post("/", status_code=200)
async def summarize_route():
    logger.info("Summarize route called")

    return {"message": "Test route called"}
