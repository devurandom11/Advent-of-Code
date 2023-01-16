#include <iostream>
#include <fstream>
#include <string>
#include <vector>

int main()
{
    std::vector<std::vector<int>> numberMap = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    std::string file;
    std::fstream input("input.txt");
    std::vector<std::vector<char>> inputVector;
    std::vector<char> tempVector;

    while (std::getline(input, file))
    {
        for (int i = 0; i < file.length(); i++)
        {
            tempVector.push_back(file[i]);
        }
        inputVector.push_back(tempVector);
        tempVector.clear();
    }

    int x = 1;
    int y = 1;
    int number = 0;

    for (int i = 0; i < inputVector.size(); i++)
    {
        for (int j = 0; j < inputVector[i].size(); j++)
        {
            if (inputVector[i][j] == 'U')
            {
                if (y > 0)
                {
                    y--;
                }
            }
            else if (inputVector[i][j] == 'D')
            {
                if (y < 2)
                {
                    y++;
                }
            }
            else if (inputVector[i][j] == 'L')
            {
                if (x > 0)
                {
                    x--;
                }
            }
            else if (inputVector[i][j] == 'R')
            {
                if (x < 2)
                {
                    x++;
                }
            }
        }
        number = numberMap[y][x];
        std::cout << number;
    }

    std::cout << std::endl;

    std::cin >> std::ws;
    return 0;
}