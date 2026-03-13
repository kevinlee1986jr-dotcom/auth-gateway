import logging
import os
from typing import Dict, List, Optional

def configure_logger(logger_name: str, log_level: int = logging.INFO) -> logging.Logger:
    logger = logging.getLogger(logger_name)
    logger.setLevel(log_level)
    handler = logging.StreamHandler()
    handler.setFormatter(logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s'))
    logger.addHandler(handler)
    return logger

def load_environment_variables() -> Dict[str, str]:
    return dict(os.environ)

def get_required_env_var(var_name: str) -> str:
    value = os.environ.get(var_name)
    if value is None:
        raise ValueError(f"Missing required environment variable: {var_name}")
    return value

def get_optional_env_var(var_name: str) -> Optional[str]:
    return os.environ.get(var_name)

def split_csv_string(csv_string: str) -> List[str]:
    return [item.strip() for item in csv_string.split(',')]

# logger instance
logger = configure_logger('auth-gateway.utils')