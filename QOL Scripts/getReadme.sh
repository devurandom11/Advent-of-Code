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
        dayint=$(echo $day | awk -F'-' '{print $2}' | awk -F'/' '{print $1}' )
        cd $day
        curl "${baseurl}/${year}day/${dayint}" | sed -n '/--- Day /,/To play, please/p' > README.md &&
        echo "Readme curled from $baseurl/${year}day/${dayint} complete!"
        cd ../
        sleep 1;
    done
    
    echo "Done with year $year"
    echo "Pushing to github"
    git add -A && git commit -am "Update README for ${year}"
    sleep 1;
    cd ../
done
