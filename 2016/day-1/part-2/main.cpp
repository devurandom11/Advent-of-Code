#include <boost/algorithm/string.hpp>
#include <fstream>
#include <iostream>
#include <set>
#include <sstream>
#include <string>
#include <vector>

auto main() -> int {
  std::ifstream file("input.txt");
  std::string instruction = "";
  std::vector<std::string> instructions = {};
  std::string pause = "";
  int x = 0;
  int y = 0;
  char heading = 'N';
  int steps = 0;
  std::string direction = "";
  std::set<std::pair<int, int>> visited = {};
  bool found = false;

  while (std::getline(file, instruction, ',')) {
    boost::trim(instruction);
    instructions.push_back(instruction);
  }

  for (auto i : instructions) {
    direction = i.substr(0, 1);
    steps = std::stoi(i.substr(1, i.length()));

    if (direction == "R") {
      if (heading == 'N') {
        heading = 'E';
        for (int j = 0; j < steps; j++) {
          x++;
          if (visited.find(std::make_pair(x, y)) != visited.end()) {
            found = true;
            break;
          }
          visited.insert(std::make_pair(x, y));
        }
      } else if (heading == 'E') {
        heading = 'S';
        for (int j = 0; j < steps; j++) {
          y--;
          if (visited.find(std::make_pair(x, y)) != visited.end()) {
            found = true;
            break;
          }
          visited.insert(std::make_pair(x, y));
        }
      } else if (heading == 'S') {
        heading = 'W';
        for (int j = 0; j < steps; j++) {
          x--;
          if (visited.find(std::make_pair(x, y)) != visited.end()) {
            found = true;
            break;
          }
          visited.insert(std::make_pair(x, y));
        }
      } else if (heading == 'W') {
        heading = 'N';
        for (int j = 0; j < steps; j++) {
          y++;
          if (visited.find(std::make_pair(x, y)) != visited.end()) {
            found = true;
            break;
          }
          visited.insert(std::make_pair(x, y));
        }
      }
    } else if (direction == "L") {
      if (heading == 'N') {
        heading = 'W';
        for (int j = 0; j < steps; j++) {
          x--;
          if (visited.find(std::make_pair(x, y)) != visited.end()) {
            found = true;
            break;
          }
          visited.insert(std::make_pair(x, y));
        }
      } else if (heading == 'W') {
        heading = 'S';
        for (int j = 0; j < steps; j++) {
          y--;
          if (visited.find(std::make_pair(x, y)) != visited.end()) {
            found = true;
          }
          visited.insert(std::make_pair(x, y));
        }
      } else if (heading == 'S') {
        heading = 'E';
        for (int j = 0; j < steps; j++) {
          x++;
          if (visited.find(std::make_pair(x, y)) != visited.end()) {
            found = true;
            break;
          }
          visited.insert(std::make_pair(x, y));
        }
      } else if (heading == 'E') {
        heading = 'N';
        for (int j = 0; j < steps; j++) {
          y++;
          if (visited.find(std::make_pair(x, y)) != visited.end()) {
            found = true;
            break;
          }
          visited.insert(std::make_pair(x, y));
        }
      }
    }
  }

  std::cout << "The first location visited twice is " << x << ", " << y
            << " which is " << abs(x) + abs(y) << " blocks away." << std::endl;
  return 0;
}