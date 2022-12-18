#!/usr/bin/env bash

years=$(cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/ && ls -1d */)
for year in $years;
do
    cd $year
    days=$(ls -1d */)
    for day in $days;
    do
        mv $day day-$day
    done
    cd ../
done