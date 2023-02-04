#include <openssl/evp.h> // OpenSSL library for MD5 implementation
#include <iostream>
#include <cctype>
#include <string>
#include <iomanip>
#include <fstream>

auto main() -> int
{
    std::string input;
    std::ifstream file("testinput.txt");
    unsigned char result[EVP_MAX_MD_SIZE];
    unsigned int result_len;
    std::string password = "--------";

    std::getline(file, input);
    int append = 0;

    std::cout << "\033[2J\033[1;1H"; // Clear console

    while (password.find('-') != std::string::npos)
    {
        std::string temp = input + std::to_string(append);

        EVP_MD_CTX *ctx = EVP_MD_CTX_new();
        EVP_DigestInit_ex(ctx, EVP_md5(), NULL);
        EVP_DigestUpdate(ctx, temp.c_str(), temp.size());
        EVP_DigestFinal_ex(ctx, result, &result_len);
        EVP_MD_CTX_free(ctx);

        std::stringstream hexStream;
        hexStream << std::hex << std::setfill('0');

        for (unsigned int i = 0; i < result_len; i++)
        {
            hexStream << std::setw(2) << static_cast<int>(result[i]);
        }
        std::string hex = hexStream.str();

        bool firstFiveZeros = true;
        for (unsigned int i = 0; i < 5; i++)
        {
            if (hex[i] != '0')
            {
                firstFiveZeros = false;
                break;
            }
        }

        if (firstFiveZeros)
        {
            if ((hex[5] - '0') >= 0 && (hex[5] - '0') <= 7 && isdigit(hex[5]) && password.at(hex[5] - '0') == '-')
            {
                password.at(hex[5] - '0') = hex[6];
            }
        }
        append++;
        std::cout << "\r" << password << " " << hex.substr(password.length(), hex.length() - password.length()) << std::flush;
    }

    std::cout << "\033[2J\033[1;1H"; // Clear console
    std::cout
        << "\n"
        << "Password: " << password << std::endl;
    std::cout << "Press ENTER to exit..." << std::endl;
    std::cin.get();
    return 0;
}