"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint,json
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager


api = Blueprint('api', __name__)


@api.route('/hello', methods=['GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/signup', methods =['POST'])
def signup_endpoint():
    body = json.loads(request.data)
    new_user = User(username=body["username"], email=body["email"],password=body["password"])
    db.session.add(new_user)
    # nos pide que serialicemos, pero a flask le va bien la información así, por eso lo serializamos para mandarlo al usuario
    db.session.commit()
    print(new_user)
    return jsonify(new_user.serialize(),200)

@api.route('/login',methods =['POST'])    
def login_user():
    email=request.json.get("email",None)
    print(email)
    password = request.json.get("password",None)
    print(password)
    user = User.query.filter_by(email=email,password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401

    acces_token = create_access_token(identity=email)
    print(acces_token)
    return jsonify({"token":acces_token})
  

@api.route('/profile',methods =['GET'])    
@jwt_required()
def acces_profile():
    user_data=get_jwt_identity()
    user = User.query.filter_by(email=user_data).first()
    return jsonify(user.serialize()), 200
    


   
    