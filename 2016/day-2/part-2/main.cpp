#include <iostream>
#include <fstream>
#include <string>
#include <vector>

const auto grid = std::vector<std::vector<char>>{

    {' ', ' ', '1', ' ', ' '},
    {' ', '2', '3', '4', ' '},
    {'5', '6', '7', '8', '9'},
    {' ', 'A', 'B', 'C', ' '},
    {' ', ' ', 'D', ' ', ' '}

};

int main()
{
    std::ifstream input("input.txt");
    std::vector<std::vector<char>> inputVector;

    for (std::string line; std::getline(input, line);)
    {
        inputVector.push_back({line.begin(), line.end()});
    }

    int x = 0;
    int y = 2;
    char code = '\0';

    for (const auto &line : inputVector)
    {
        for (const auto &c : line)
        {
            switch (c)
            {
            case 'U':
                if (y > 0 && grid[y - 1][x] != ' ')
                    y--;
                break;
            case 'D':
                if (y < 4 && grid[y + 1][x] != ' ')
                    y++;
                break;
            case 'L':
                if (x > 0 && grid[y][x - 1] != ' ')
                    x--;
                break;
            case 'R':
                if (x < 4 && grid[y][x + 1] != ' ')
                    x++;
                break;
            }
        }
        code = grid[y][x];
        std::cout << code;
    }

    std::cout << std::endl;
    std::cin >> code;

    return 0;
}
