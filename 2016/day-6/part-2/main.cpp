#include <iostream>
#include <fstream>
#include <string>
#include <vector>

int main()
{
    // Read input.txt into a 2d array of chars
    std::ifstream input("input.txt");
    std::vector<std::vector<char>> grid;
    std::string line;
    while (std::getline(input, line))
    {
        std::vector<char> row;
        for (char c : line)
        {
            row.push_back(c);
        }
        grid.push_back(row);
    }

    // count the number of times each letter appears in each column
    std::vector<int> counts(26, 0);
    for (int i = 0; i < grid[0].size(); i++)
    {
        for (int j = 0; j < grid.size(); j++)
        {
            counts[grid[j][i] - 'a']++;
        }

        // find the letter with the most appearances
        int max = 9999999;
        int maxIndex = 0;
        for (int j = 0; j < counts.size(); j++)
        {
            if (counts[j] < max)
            {
                max = counts[j];
                maxIndex = j;
            }
        }

        // print the letter
        std::cout << (char)(maxIndex + 'a');

        // reset the counts
        for (int j = 0; j < counts.size(); j++)
        {
            counts[j] = 0;
        }
    }
    // prevent auto close
    std::cin >> line;
    return 0;
}
