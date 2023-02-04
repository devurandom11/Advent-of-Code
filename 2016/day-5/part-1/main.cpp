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
            std::cout << "Found: " << hex[5] << " at ";
            std::cout << std::dec << append << std::endl;
            std::cout << "Current Password: " << password << std::endl;
        }
        append++;
    }

    std::cout << "Password: " << password << std::endl;
    std::cout << "Press ENTER to exit..." << std::endl;
    std::cin.get();
    return 0;
}