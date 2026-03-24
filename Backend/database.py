from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

Base = declarative_base()


def execute_raw_sql(query: str):
    with SessionLocal() as session:
        result = session.execute(text(query))
        rows = result.fetchall()
        columns = result.keys()

        return {
            "columns": list(columns),
            "rows": [dict(row._mapping) for row in rows]
        }