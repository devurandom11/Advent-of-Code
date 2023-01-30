#include <iostream>
#include <fstream>
#include <string>
#include <vector>

const int ALPHABET_SIZE = 26;

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
        decrypted_name.resize(encrypted_name.size());

        // Decrypt the name
        for (int i = 0; i < encrypted_name.size(); i++)
        {
            if (encrypted_name[i] == '-')
            {
                decrypted_name[i] = ' ';
            }
            else
            {
                decrypted_name[i] = (encrypted_name[i] - 'a' + sector_id) % ALPHABET_SIZE + 'a';
            }
        }

        // Check if the name contains "north" and print results
        if (decrypted_name.find("north") != std::string::npos)
        {
            std::cout << "Sector ID: " << sector_id << std::endl;
            std::cout << "Encrypted name: " << encrypted_name << std::endl;
            std::cout << "Decrypted name: " << decrypted_name << std::endl;
        }
    }

    input_file.close();
    return 0;
}