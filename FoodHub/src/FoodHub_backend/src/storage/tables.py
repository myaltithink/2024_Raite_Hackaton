from kybra import (
    blob,
    ic,
    nat64,
    Opt,
    Principal,
    Record,
    StableBTreeMap,
    Variant,
    Vec
)
import User

users = StableBTreeMap[Principal, User](
    memory_id=0, max_key_size=100, max_value_size=100_000
)
