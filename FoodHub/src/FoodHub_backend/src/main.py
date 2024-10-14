import secrets

from kybra import (
    query,
    update,
    blob,
    Principal,
    StableBTreeMap,
    Opt,
    Record,
    Variant
)

class Test(Record):
    id: Principal
    item: blob

sampleST = StableBTreeMap[Principal, Test] (
    memory_id=0, max_key_size=38, max_value_size=100_000_000
)

@query
def greet(name: str) -> str:
    return f"Hello, {name}!"

@query
def sample() -> str:
    print("something something")
    return "some has been done"


@update
def upload(image: blob) -> Test:
    id = generate_id()
    
    item : Test = {
        "id": id,
        "item": image
    }
    
    sampleST.insert(item["id"], item)
    return item


def generate_id() -> Principal:
    random_byte = secrets.token_bytes(29)
    return Principal.from_hex(random_byte.hex())