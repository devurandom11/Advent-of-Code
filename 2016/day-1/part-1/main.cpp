#include "../../utils/parse-input.h"
#include <vector>
#include <utility>

int main()
{
    std::string inputStr = parse_input("./input.txt");
    std::stringstream ss(inputStr);
    std::string item;
    // Prep vector of pairs for direction and distance [["R", 1], ["L", 3],[...],...]
    std::vector<std::pair<std::string, int>> output;
    char direction = 'N';
    int distance, solution = -1;

    // Convert to array
    while (std::getline(ss, item, ','))
    {
        std::stringstream direction_stream(item);
        direction_stream >> direction;
        direction_stream >> distance;
        output.emplace_back(std::make_pair(std::string(1, direction), distance));
    }

    std::cout << "Orignial Input: " << inputStr << std::endl;
    std::cout << "Array conversion: ";
    for (const auto &row : output)
    {
        std::cout << row.first << " : " << row.second << std::endl;
    }
    std::cout << std::endl;
    std::cout << "\n\nSolution: "
              << solution;
    return 0;
}