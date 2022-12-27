#include "../../utils/parse-input.h"

int main()
{
    std::string file_reader = parse_input("./input.txt");
    std::cout << "The contents of the file are as follows:\n"
              << file_reader << std::endl;

    return 0;
}