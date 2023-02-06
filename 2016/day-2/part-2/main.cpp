#include <iostream>
#include <fstream>
#include <string>
#include <vector>

<<<<<<< HEAD
int main()
{
    const std::vector<std::string> numberMap = {"1", "234", "56789", "ABC", "D"};
    std::string file;
    std::fstream input("testinput.txt");
    std::vector<std::string> inputVector;

    while (std::getline(input, file))
    {
        inputVector.push_back(file);
=======
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
>>>>>>> 280c7d3ce03362c640d41d1a0dd551d7025f75f7
    }

    int x = 0;
    int y = 2;
<<<<<<< HEAD
    char number = '5';

    for (const auto &movement : inputVector)
    {
        for (const auto &step : movement)
        {
            if (step == 'U' && y > 0 && numberMap[y - 1][x] != ' ')
            {
                y--;
                number = numberMap[y][x];
            }
            else if (step == 'D' && y < 4 && numberMap[y + 1][x] != ' ')
            {
                y++;
                number = numberMap[y][x];
            }
            else if (step == 'L' && x > 0 && numberMap[y][x - 1] != ' ')
            {
                x--;
                number = numberMap[y][x];
            }
            else if (step == 'R' && x < (numberMap[y].length() - 1) && numberMap[y][x + 1] != ' ')
            {
                x++;
                number = numberMap[y][x];
            }
        }
        std::cout << number;
    }

    std::cout << std::endl;
=======
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
>>>>>>> 280c7d3ce03362c640d41d1a0dd551d7025f75f7

    return 0;
}
