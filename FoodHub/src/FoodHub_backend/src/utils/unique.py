from kybra import StableBTreeMap, Principal
import User
from storage import users

def is_username_unique(username: str) -> bool:
    for user_id in users.keys():
        existing_user = users.get(user_id)
        if existing_user is not None and isinstance(existing_user, User):
            if existing_user.username == username:
                return False
    return True