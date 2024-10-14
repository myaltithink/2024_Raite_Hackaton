from kybra import blob
import json

def json_decode(blob_data: blob):
    """Decode blob data to JSON object."""
    return json.loads(blob_data.decode("utf-8"))


def json_encode(data: dict) -> blob:
    """Encode dictionary to JSON blob."""
    return json.dumps(data).encode("utf-8")
