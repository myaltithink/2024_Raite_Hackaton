from .HttpModels import HttpRequest, HttpResponse, Token, StreamingStrategy, CallbackStrategy
from utils.encoder import json_encode, json_decode
from kybra import ic, Opt

class HttpControllers:
  
    @staticmethod
    def hello_world(req: HttpRequest) -> HttpResponse:
        response_data = {
                "payload": "hello world",  # Placeholder, replace with actual storage logic
                "url": req.url
        }
       
        return HttpResponse(
            status_code=200,
            headers=[],
            body =json_encode(response_data),
            streaming_strategy=None,
            upgrade=None,
        )

