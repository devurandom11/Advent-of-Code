#!/usr/bin/env bash

years=$(cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/ && ls -1d */)
baseurl='https://adventofcode.com'
sessionid='Cookie: session=53616c7465645f5f35215e7e4886a54d3ef305beab28ae4aac4664bb460e5c351e71af3fe9eafa722e74ec8ed18abff6479c90cca4273957dfef3d8c693c7bd9'
cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/
for year in $years;
do
    cd $year
    days=$(ls -1d */)
    
    for day in $days;
    do
        dayint=$(echo $day | awk -F'-' '{print $2}' | awk -F'/' '{print $1}' )
        cd $day
        rm -rf README.md
        curl $baseurl/${year}day/${dayint} -H "${sessionid}"  | sed 's/<\/*[^>]*>//g' > README.md &&
        echo "Readme curled from $baseurl/${year}day/${dayint} complete!"
        cd ../
        sleep 1;
    done
    
    echo "Done with year $year"
    echo "Pushing to github"
    
    sleep 1;
    cd ../
done

