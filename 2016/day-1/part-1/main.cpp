#include <boost/algorithm/string.hpp>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

auto main() -> int
{
  std::ifstream file("input.txt");
  std::string instruction = "";
  std::vector<std::string> instructions = {};
  std::string pause = "";
  int x = 0;
  int y = 0;
  char heading = 'N';
  int steps = 0;
  std::string direction = "";

  while (std::getline(file, instruction, ','))
  {
    boost::trim(instruction);
    instructions.push_back(instruction);
  }

  for (auto instruction : instructions)
  {
    direction = instruction.substr(0, 1);
    steps = std::stoi(instruction.substr(1, instruction.length()));

    if (direction == "R")
    {
      if (heading == 'N')
      {
        heading = 'E';
        x += steps;
      }
      else if (heading == 'E')
      {
        heading = 'S';
        y -= steps;
      }
      else if (heading == 'S')
      {
        heading = 'W';
        x -= steps;
      }
      else if (heading == 'W')
      {
        heading = 'N';
        y += steps;
      }
    }
    else if (direction == "L")
    {
      if (heading == 'N')
      {
        heading = 'W';
        x -= steps;
      }
      else if (heading == 'W')
      {
        heading = 'S';
        y -= steps;
      }
      else if (heading == 'S')
      {
        heading = 'E';
        x += steps;
      }
      else if (heading == 'E')
      {
        heading = 'N';
        y += steps;
      }
    }
  }

  std::cout << "Final position: " << x << ", " << y << std::endl;
  std::cout << "Distance: " << abs(x) + abs(y) << std::endl;
  std::cin >> pause;

  return 0;
}
