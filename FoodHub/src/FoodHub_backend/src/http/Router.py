from typing import Callable, Dict, Tuple
from .HttpModels import HttpRequest, HttpResponse
from kybra import ic, Opt

class Router:
    def __init__(self):
        self.routes: Dict[Tuple[str, str], Callable[[HttpRequest], HttpResponse]] = {}

    def add_route(self, method: str, url: str, handler: Callable[[HttpRequest], HttpResponse]):
        """Add a route for a specific method and URL."""
        self.routes[(method.upper(), url)] = handler

    def dispatch(self, req: HttpRequest) -> HttpResponse:
        """Dispatch the request to the appropriate handler."""
        route_key = (req.method.upper(), req.url)
        handler = self.routes.get(route_key)

        if handler:
            return handler(req)
        return HttpResponse(
            status_code=400,
            headers=[],
            body="Invalid request".encode("utf-8"),
            streaming_strategy=None,
            upgrade=None,
        )
