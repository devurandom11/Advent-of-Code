#!/usr/bin/env bash

years=$(cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/ && ls -1d */)

for year in $years;
do
    if [[ $year == '2015/' || $year == '2016/' || $year == '2017/' || $year == '2018/' || $year == '2019/' || $year == '2020/' ]]
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
        [ ! -f "main.*" ] && touch {main.ts,input.txt} || echo "Files already exist...";
        cd ../
        cd part-2
        [ ! -f "main.js" ] && touch {main.ts,input.txt} || echo "Files already exist...";
        cd ../
        cd ../
        git add -A
        git commit -am "Create skeleton for AoC ${year}${day}"
        echo "Commit for ${year}${day} complete!"
        sleep 1;
    done
    
    echo "Done with year $year"
    sleep 1;
    cd ../
done