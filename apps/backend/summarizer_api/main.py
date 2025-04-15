import debugpy
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.exception_handlers import http_exception_handler
from asgi_correlation_id import CorrelationIdMiddleware

from summarizer_api.logging_config import configure_logging
from summarizer_api.routers import summarize as summarize_router
from summarizer_api.config import config

logger = logging.getLogger(__name__)


def build_api_path(path: str) -> str:
    return f"/api/v1/{path}"


@asynccontextmanager
async def lifespan(app: FastAPI):
    configure_logging()
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(CorrelationIdMiddleware)

app.include_router(
    summarize_router.router,
    prefix=build_api_path("summarize"),
    tags=["summarize"],
)


@app.exception_handler(HTTPException)
async def http_exception_handle_logging(request, exc):
    logger.error(f"HTTPException: {exc.status_code} {exc.detail}")
    return await http_exception_handler(request, exc)


if config.ENV_STATE == "dev":
    debugpy.listen(5678)
