#ifndef PARSE_INPUT_H
#define PARSE_INPUT_H

#include <iostream>
#include <string>
#include <fstream>

std::string parse_input(const std::string &file_name)
{
    std::ifstream infile(file_name);
    if (!infile.is_open())
    {
        throw std::runtime_error("Error: could not open file");
    }

    std::string content;
    std::getline(infile, content);

    size_t nl_index = content.find_last_of("\n");

    if (nl_index != std::string::npos)
    {
        content.erase(nl_index);
    }

    infile.close();

    return content;
}
#endif // PARSE_INPUT_H