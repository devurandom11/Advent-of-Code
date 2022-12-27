#ifndef PARSE_INPUT_H
#define PARSE_INPUT_H

#include <iostream>
#include <string>
#include <fstream>
#include <sstream>

std::string parse_input(const std::string &file_name)
{
    std::ifstream infile(file_name);
    if (!infile.is_open())
    {
        throw std::runtime_error("Error: could not open file");
    }

    std::string content;
    std::getline(infile, content, '\0');
    infile.close();

    return content;
}
#endif // PARSE_INPUT_H