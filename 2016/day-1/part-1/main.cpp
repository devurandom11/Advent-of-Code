#include "../../utils/parse-input.h"
#include <vector>
#include <utility>
#include <thread>
#include <chrono>

int main()
{
    std::string inputStr = parse_input("./input.txt");
    std::stringstream ss(inputStr);
    std::string item;
    // Prep vector of pairs for direction and distance [["R", 1], ["L", 3],[...],...]
    std::vector<std::pair<char, int>> output;
    char direction = 'N';
    int distance, solution = -1;
    int x, y = 0;

    // Convert to array
    while (std::getline(ss, item, ','))
    {
        std::stringstream direction_stream(item);
        direction_stream >> direction;
        direction_stream >> distance;
        output.emplace_back(std::make_pair(direction, distance));
    }

    // Process instructions
    std::cout << std::endl;
    std::cout << "\n\nSolution: "
              << solution;
    return 0;
}