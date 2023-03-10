#include <fstream>
#include <iostream>
#include <string>
#include <vector>

const auto numberMap =
    std::vector<std::vector<int>>{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

int main() {
  std::ifstream input("input.txt");
  std::vector<std::vector<char>> inputVector;

  for (std::string line; std::getline(input, line);) {
    inputVector.push_back({line.begin(), line.end()});
  }

  int x = 1;
  int y = 1;
  int number = 0;

  for (const auto &line : inputVector) {
    for (const auto &c : line) {
      switch (c) {
        case 'U':
          if (y > 0) y--;
          break;
        case 'D':
          if (y < 2) y++;
          break;
        case 'L':
          if (x > 0) x--;
          break;
        case 'R':
          if (x < 2) x++;
          break;
      }
    }
    number = numberMap[y][x];
    std::cout << number;
  }

  std::cout << std::endl;

  return 0;
}
