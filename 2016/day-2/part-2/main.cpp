#include <iostream>
#include <fstream>
#include <string>
#include <vector>

int main()
{
    const std::vector<std::string> numberMap = {"1", "234", "56789", "ABC", "D"};
    std::string file;
    std::fstream input("testinput.txt");
    std::vector<std::string> inputVector;

    while (std::getline(input, file))
    {
        inputVector.push_back(file);
    }

    int x = 0;
    int y = 2;
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

    return 0;
}
