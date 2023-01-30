#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include <map>

auto main() -> int
{
    std::ifstream input_file("input.txt");
    std::string line;
    std::string decrypted_name;
    std::string encrypted_name;
    int sector_id;

    while (std::getline(input_file, line))
    {
        encrypted_name = line.substr(0, line.find_last_of('-'));
        sector_id = std::stoi(line.substr(line.find_last_of('-') + 1, line.find_last_of('[') - line.find_last_of('-') - 1));

        // Decrypt the name
        for (auto letter : encrypted_name)
        {
            if (letter == '-')
            {
                decrypted_name += ' ';
            }
            else
            {
                decrypted_name += (letter - 'a' + sector_id) % 26 + 'a';
            }
        }

        // Check if the name contains "north"
        if (decrypted_name.find("north") != std::string::npos)
        {
            // If it does, print the sector id, encrypted name, and decrypted name
            std::cout << "Sector ID: " << sector_id << std::endl;
            std::cout << "Encrypted name: " << encrypted_name << std::endl;
            std::cout << "Decrypted name: " << decrypted_name << std::endl;
        }

        decrypted_name.clear();
    }

    input_file.close();
    return 0;
}