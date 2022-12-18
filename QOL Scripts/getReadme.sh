#!/usr/bin/env bash

years=$(cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/ && ls -1d */)
baseurl='https://adventofcode.com'
cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/
for year in $years;
do
    cd $year 
    days=$(ls -1d */)
    
    for day in $days;
    do
        dayint=$(echo $day | awk -F'-' '{print $2}')
        cd $day
        [ ! -f "README.md" ] && curl ${baseurl}/${year}day/${dayint} > README.md || rm -rf README.md
        echo "Downloading README from ${baseurl}/${year}day/${dayint}"
        cd ../
        echo "Readme curled from $baseurl/${year}day${dayint} complete!"
        sleep 1;
    done
    
    echo "Done with year $year"
    sleep 1;
    cd ../
done
