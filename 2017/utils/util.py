import time as t


class Timer:
    def __init__(self, name: str) -> None:
        self.name: str = name

    def start(self) -> None:
        self.start_time: float = t.time()

    def end(self) -> None:
        self.end_time: float = t.time()

    def __str__(self) -> str:
        return f"{self.name} Timer: {self.end_time - self.start_time:.2f} seconds\n{self.name} Timer: {(self.end_time - self.start_time)*1000:.0f} milliseconds\n"
