from kybra import StableBTreeMap, Principal
import User
from storage import users

def is_username_unique(username: str) -> bool:
    for user in users.values():
        if user["username"] == username:
            return False
    return True