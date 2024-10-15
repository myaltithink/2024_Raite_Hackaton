from kybra import (
    query, 
    update,
    blob,
    ic,
    nat64,
    Opt,
    Principal,
    Record,
    StableBTreeMap,
    Variant,
    Vec,
)
import json
import User
from utils import is_username_unique, generate_id
from storage import users

@query
def greet(name: str) -> str:
    return f"Hello, {name}!"

@query
def sample() -> str:
    print("something something")
    return "some has been done"

# register
@update
def registermethod(register_string: str) -> str: 

    #decode to json
    data = json.loads(register_string)

    if (is_username_unique(data["username"], users)):   
        id = generate_id()
        user: User = {
            "id": id,
            "firstName": data["firstName"],
            "lastName": data["lastName"],
            "password": data["password"],
            "hasOrganization": data["hasOrganization"],
            "organizationName": data["organizationName"],
            "organizationAddress": data["organizationAddress"],
            "username": data["username"],
        }

        users.insert(user["id"], user)
    else:
        return "Username is already registered"
    return json.dumps("user successfully inserted")