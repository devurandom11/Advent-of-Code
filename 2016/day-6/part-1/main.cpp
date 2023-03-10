#include <fstream>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

int main() {
  string input;
  ifstream file("input.txt");
  getline(file, input);
  vector<vector<char>> grid(8, vector<char>(8, ' '));

  for (size_t i = 0; i < grid[0].size(); ++i) {
    for (size_t j = 0; j < grid.size(); ++j) {
      grid[j][i] = input[i * 8 + j];
    }
  }

  for (size_t i = 0; i < grid.size(); ++i) {
    unordered_map<char, int> freq;
    for (size_t j = 0; j < grid[0].size(); ++j) {
      freq[grid[i][j]]++;
    }

    char maxChar = ' ';
    int maxFreq = 0;
    for (auto &p : freq) {
      if (p.second > maxFreq) {
        maxChar = p.first;
        maxFreq = p.second;
      }
    }

    cout << maxChar;
  }
  return 0;
}