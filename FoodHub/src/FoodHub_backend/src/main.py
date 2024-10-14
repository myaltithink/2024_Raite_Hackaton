from kybra import query
from experimental.try_upload import sampleprint
from http.Router import Router
from http.HttpControllers import HttpControllers;
from http.HttpModels import HttpRequest, HttpResponse

@query
def greet(name: str) -> str:
    return f"Hello, {name}!"

@query
def sample() -> str:
    print("something something")
    return "some has been done"

router = Router()

router.add_route("GET", "/counter", HttpControllers.hello_world)

@query
def http_request(req: HttpRequest) -> HttpResponse:
    return router.dispatch(req)
