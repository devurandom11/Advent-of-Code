#!/usr/bin/env bash

years=$(cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/ && ls -1d */)

for year in $years;
do
    if [[ $year == '2015/' || $year == '2016/' || $year == '2017/' || $year == '2018/'  ]]
    then
        continue
    fi
    cd $year
    days=$(ls -1d */)
    
    for day in $days;
    do
        cd $day
        [ ! -d "part-1" ] && mkdir {part-1,part-2} || echo "Directory already exists..."
        [ ! -f "README.md" ] && echo "# Advent of Code --- Day $day" > README.md || echo "README already exists";
        cd part-1
        echo $(pwd)
        [ ! -f "main.*" ] && touch {main.java,input.txt} || echo "Files already exist...";
        cd ../
        echo $(pwd)
        cd part-2
        echo $(pwd)
        [ ! -f "main.js" ] && touch {main.java,input.txt} || echo "Files already exist...";
        cd ../
        echo $(pwd)
        
        cd ../
        echo $(pwd)
        sleep 1;
    done
    git add -A
    git commit -am "Create skeleton for AoC ${year}"
    echo "Done with year $year"
    sleep 10;
    cd ../
done