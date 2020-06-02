#!/usr/bin/python3
""" Blueprint for API
    larger applications it’s recommended to divide them into smaller groups
    where each group is implemented with the help of a blueprint
    more info https://flask.palletsprojects.com/en/1.1.x/blueprints/#blueprints
"""

from flask import Blueprint

app_views = Blueprint('app_views', __name__, url_prefix='/api/v1')

from api.v1.views.index import *
from api.v1.views.states import *
from api.v1.views.places import *
from api.v1.views.places_reviews import *
from api.v1.views.cities import *
from api.v1.views.amenities import *
from api.v1.views.users import *
from api.v1.views.places_amenities import *
