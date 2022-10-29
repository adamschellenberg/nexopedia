import json
from flask import Blueprint, request, jsonify, render_template
from helpers import token_required
from models import db, User

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/avatar', methods = ['GET'])
@token_required
def get_avatar(current_user_token):
    avatar = current_user_token.avatar
    return avatar