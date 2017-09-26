# settings/production.py
from base import
import dj_database_url

ENVIRONMENT = 'production'
DEBUG = False
ALLOWED_HOSTS = ['0.0.0.0']
DATABASES['default'] = dj_database_url.config(
    default='postgres://lbwyslhxfizzds:d9fddb338bb0a177a96ccb7258289f993004299b5b30d2507d332988792ed9ff@ec2-23-21-197-175.compute-1.amazonaws.com:5432/dfnbd703q2t7vn'
)
