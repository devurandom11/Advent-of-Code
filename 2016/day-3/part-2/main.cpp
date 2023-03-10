#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

int main() {
  std::string pause;
  std::ifstream file("input.txt");
  std::string str;
  std::vector<int> firstCol;
  std::vector<int> secondCol;
  std::vector<int> thirdCol;
  int count = 0;

  while (std::getline(file, str)) {
    std::stringstream ss(str);
    int i;
    while (ss >> i) {
      firstCol.push_back(i);
      ss >> i;
      secondCol.push_back(i);
      ss >> i;
      thirdCol.push_back(i);
    }
  }

  for (int i = 0; i < firstCol.size(); i += 3) {
    if (firstCol[i] + firstCol[i + 1] > firstCol[i + 2] &&
        firstCol[i] + firstCol[i + 2] > firstCol[i + 1] &&
        firstCol[i + 1] + firstCol[i + 2] > firstCol[i]) {
      count++;
    }
  }

  for (int i = 0; i < secondCol.size(); i += 3) {
    if (secondCol[i] + secondCol[i + 1] > secondCol[i + 2] &&
        secondCol[i] + secondCol[i + 2] > secondCol[i + 1] &&
        secondCol[i + 1] + secondCol[i + 2] > secondCol[i]) {
      count++;
    }
  }

  for (int i = 0; i < thirdCol.size(); i += 3) {
    if (thirdCol[i] + thirdCol[i + 1] > thirdCol[i + 2] &&
        thirdCol[i] + thirdCol[i + 2] > thirdCol[i + 1] &&
        thirdCol[i + 1] + thirdCol[i + 2] > thirdCol[i]) {
      count++;
    }
  }

  std::cout << "Number of possible triangles: " << count << std::endl;

  std::cin >> pause;
  return 0;
}