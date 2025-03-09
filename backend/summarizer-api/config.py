from typing import Optional
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache


class BaseConfig(BaseSettings):
    """
    Base configuration class for the application settings.
    It uses Pydantic's BaseSettings to load environment variables
    and provides a convenient way to manage application settings.
    """

    ENV_STATE = Optional[str] = None

    model_config = SettingsConfigDict(env_file=".env", extra="allow")


class GlobalConfig(BaseConfig):
    AI_MODEL_KEY: str = None


class ProdConfig(BaseConfig):
    model_config = SettingsConfigDict(env_prefix="PROD_", extra="allow")


class TestConfig(GlobalConfig):
    DATABASE_URL: str = "sqlite:///data.db"
    DB_FORCE_ROLLBACK: bool = True

    model_config = SettingsConfigDict(env_prefix="TEST_", extra="allow")


@lru_cache
def get_config(env_state: str):
    configs = {
        "prod": ProdConfig,
        "test": TestConfig,
    }

    return configs[env_state]()

config = get_config(BaseConfig().ENV_STATE)