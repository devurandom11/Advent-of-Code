#include <openssl/evp.h>  // OpenSSL library for MD5 implementation

#include <fstream>
#include <iomanip>
#include <iostream>
#include <string>

using namespace std;

bool firstFiveZeros(string hex) {
  for (auto i = 0; i < 5; i++) {
    if (hex[i] != '0') {
      return false;
    }
  }
  return true;
}

void makeHex(unsigned char *result, unsigned int result_len, string &hex) {
  stringstream hexStream;
  hexStream << hex << setfill('0');

  for (auto i = 0; i < result_len; i++) {
    hexStream << setw(2) << static_cast<int>(result[i]);
  }
  hex = hexStream.str();
}

void printInLoop(string password, string hex) {
  cout << "\r"
       << "Cracking Hash... "
       << "\033[1;32m" << string(password) << "\033[0m"
       << hex.substr(password.length(), (8) - password.length()) << " | " << hex
       << flush;
}

auto main() -> int {
  string input;
  ifstream file("input.txt");
  unsigned char result[EVP_MAX_MD_SIZE];
  unsigned int result_len;
  string password = "";
  int append = 0;
  string temp;

  getline(file, input);
  cout << "\033[2J\033[1;1H";  // Clear console

  while (password.size() < 8) {
    temp = input + to_string(append);

    EVP_MD_CTX *ctx = EVP_MD_CTX_new();
    EVP_DigestInit_ex(ctx, EVP_md5(), NULL);
    EVP_DigestUpdate(ctx, temp.c_str(), temp.size());
    EVP_DigestFinal_ex(ctx, result, &result_len);
    EVP_MD_CTX_free(ctx);

    string hex;
    makeHex(result, result_len, hex);

    if (firstFiveZeros(hex)) password += hex[5];
    append++;
    // printInLoop(password, hex);
  }

  cout << "\033[2J\033[1;1H" << endl;  // Clear console
  cout << "Password: " << password << endl;
  cout << "Press ENTER to exit..." << endl;
  cin.get();
  return 0;
}
