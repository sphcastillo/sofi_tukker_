import os
import psycopg

def get_conn():
    # psycopg v3
    return psycopg.connect(os.environ["DATABASE_URL"])
