from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache


class BaseConfig(BaseSettings):
    ENV_STATE: Optional[str] = None

    model_config = SettingsConfigDict(env_file="../../.env", extra="allow")


class GlobalConfig(BaseConfig):
    AI_MODEL_KEY: str = ""
    APP_PORT: Optional[str] = "8000"


class ProdConfig(GlobalConfig):
    model_config = SettingsConfigDict(env_prefix="PROD_", extra="allow")


class DevConfig(GlobalConfig):
    model_config = SettingsConfigDict(env_prefix="DEV_", extra="allow")


class TestConfig(GlobalConfig):
    DATABASE_URL: str = "sqlite:///data.db"
    DB_FORCE_ROLLBACK: bool = True

    model_config = SettingsConfigDict(env_prefix="TEST_", extra="allow")


@lru_cache()
def get_config(env_state: str):
    configs = {"dev": DevConfig, "prod": ProdConfig, "test": TestConfig}
    if env_state not in configs:
        return configs["dev"]

    return configs[env_state]()


config = get_config(BaseConfig().ENV_STATE)()
