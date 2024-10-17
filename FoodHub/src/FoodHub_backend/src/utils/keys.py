import secrets  # For secure key generation
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad  # For handling padding

def generate_key() -> list[int]:
    # Generate a 16-byte key securely
    return bytes_to_vec_nat8(secrets.token_bytes(16))

def encrypt(plaintext: str, key: list[int]) -> list[int]:
    key_bytes = vec_nat8_to_bytes(key)
    cipher = AES.new(key_bytes, AES.MODE_CBC)  # Create an AES cipher object in CBC mode
    iv = cipher.iv  # Generate a random IV
    padded_plaintext = pad(plaintext.encode(), AES.block_size)  # Pad plaintext to match AES block size
    ciphertext = cipher.encrypt(padded_plaintext)  # Encrypt the padded plaintext

    # Combine IV and ciphertext for output
    combined = iv + ciphertext  
    return bytes_to_vec_nat8(combined)

def decrypt(ciphertext_vec: list[int], key: list[int]) -> str:
    ciphertext = vec_nat8_to_bytes(ciphertext_vec)
    key_bytes = vec_nat8_to_bytes(key)

    iv = ciphertext[:16]  # Extract the IV from the beginning (AES uses a 16-byte IV)
    cipher = AES.new(key_bytes, AES.MODE_CBC, iv=iv)  # Create a new AES cipher object using the same IV
    padded_plaintext = cipher.decrypt(ciphertext[16:])  # Decrypt the ciphertext
    return unpad(padded_plaintext, AES.block_size).decode()  # Unpad and decode the bytes to string

def bytes_to_vec_nat8(vec_bytes: bytes) -> list[int]:
    # Convert bytes to a list of integers (nat8)
    return list(vec_bytes)

def vec_nat8_to_bytes(vec_bytes: list[int]) -> bytes:
    # Convert a list of integers (nat8) back to bytes
    return bytes(vec_bytes)
