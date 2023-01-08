import time as t


def parse_input(file_path: str) -> list:
    with open(file_path, "r") as f:
        inputStr: str = f.read()
        f.close()
    return inputStr.strip().split("\n")


class Timer:
    def __init__(self, name: str) -> None:
        self.name: str = name

    def start(self) -> None:
        self.start_time: float = t.time()

    def end(self) -> None:
        self.end_time: float = t.time()

    def __str__(self) -> str:
        return f"{self.name} Timer: {self.end_time - self.start_time:.2f} seconds\n{self.name} Timer: {(self.end_time - self.start_time)*1000:.0f} milliseconds\n"
