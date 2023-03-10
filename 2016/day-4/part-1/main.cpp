#include <algorithm>
#include <fstream>
#include <iostream>
#include <map>
#include <string>
#include <vector>

auto main() -> int {
  std::ifstream input_file("input.txt");
  std::string line;
  int total = 0;

  while (std::getline(input_file, line)) {
    // Split the input into 3 parts: name, sector id, and checksum
    std::string name = line.substr(0, line.find_last_of('-'));
    std::string sector_id =
        line.substr(line.find_last_of('-') + 1,
                    line.find_last_of('[') - line.find_last_of('-') - 1);
    std::string checksum =
        line.substr(line.find_last_of('[') + 1,
                    line.find_last_of(']') - line.find_last_of('[') - 1);

    // Remove the dashes from the name
    name.erase(std::remove(name.begin(), name.end(), '-'), name.end());

    // Count the number of times each letter appears in the name
    std::map<char, int> letter_count;
    for (auto letter : name) {
      letter_count[letter]++;
    }

    // Sort the letters by the number of times they appear in the name
    std::vector<std::pair<char, int>> sorted_letters(letter_count.begin(),
                                                     letter_count.end());
    std::sort(sorted_letters.begin(), sorted_letters.end(),
              [](const std::pair<char, int> &a, const std::pair<char, int> &b) {
                if (a.second == b.second) {
                  return a.first < b.first;
                }
                return a.second > b.second;
              });

    // Take the first 5 letters of the sorted list
    std::string sorted_checksum;
    for (int i = 0; i < 5; i++) {
      sorted_checksum += sorted_letters[i].first;
    }

    // Compare the checksum to the first 5 letters of the sorted list
    if (sorted_checksum == checksum) {
      // If they match, add the sector id to the total
      total += std::stoi(sector_id);
    }
  }
  input_file.close();

  // Print the total
  std::cout << "Total sector sum: " << total << std::endl;
  return 0;
}