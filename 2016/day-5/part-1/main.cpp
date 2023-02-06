#include <openssl/evp.h> // OpenSSL library for MD5 implementation
#include <iostream>
#include <string>
#include <iomanip>
#include <fstream>

auto main() -> int
{
    std::string input;
    std::ifstream file("input.txt");
    unsigned char result[EVP_MAX_MD_SIZE];
    unsigned int result_len;
    std::string password = "";

    std::getline(file, input);
    int append = 0;

    std::cout << "\033[2J\033[1;1H"; // Clear console

    while (password.length() < 8)
    {
        std::string temp = input + std::to_string(append);

        EVP_MD_CTX *ctx = EVP_MD_CTX_new();
        EVP_DigestInit_ex(ctx, EVP_md5(), NULL);
        EVP_DigestUpdate(ctx, temp.c_str(), temp.size());
        EVP_DigestFinal_ex(ctx, result, &result_len);
        EVP_MD_CTX_free(ctx);

        std::stringstream hexStream;
        hexStream << std::hex << std::setfill('0');

        for (auto i = 0; i < result_len; i++)
        {
            hexStream << std::setw(2) << static_cast<int>(result[i]);
        }
        std::string hex = hexStream.str();

        bool firstFiveZeros = true;
        for (auto i = 0; i < 5; i++)
        {
            if (hex[i] != '0')
            {
                firstFiveZeros = false;
                break;
            }
        }

        if (firstFiveZeros)
        {
            password += hex[5];
        }
        append++;
        std::cout << "\r" << std::string(password) << hex.substr(password.length(), (hex.length() - hex.length() + 8) - password.length()) << std::flush;
    }

    std::cout << "\033[2J\033[1;1H"; // Clear console
    std::cout
        << "\n"
        << "Password: " << password << std::endl;
    std::cout << "Press ENTER to exit..." << std::endl;
    std::cin.get();
    return 0;
}