import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI

from logging_config import configure_logging

logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    configure_logging()