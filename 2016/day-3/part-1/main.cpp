// Read in input.txt file as a string
// Split string into vector of ints

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <sstream>

int main()
{
    std::ifstream file("input.txt");
    std::string str;
    std::vector<int> sides;
    std::string pause;
    int count = 0;

    while (std::getline(file, str))
    {
        std::stringstream ss(str);
        int i;
        while (ss >> i)
        {
            sides.push_back(i);
        }
    }

    for (int i = 0; i < sides.size(); i += 3)
    {
        if (sides[i] + sides[i + 1] > sides[i + 2] &&
            sides[i] + sides[i + 2] > sides[i + 1] &&
            sides[i + 1] + sides[i + 2] > sides[i])
        {
            count++;
        }
    }

    std::cout << "Number of possible triangles: " << count << std::endl;
    std::cin >> pause;
    return 0;
}