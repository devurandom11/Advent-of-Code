#!/usr/bin/env bash

years=$(cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/ && ls -1d */)
cd /mnt/c/Users/mikec/OneDrive/Git/Advent-of-Code/
echo $years
pwd
for year in $years; do
	cd $year
	echo Working on year $year
	days=$(ls -1d */)

	for day in $days; do
		cd $day
		cd part-1
		touch testinput.txt
		cd ../
		cd part-2
		touch testinput.txt
		cd ../../
	done
	cd ../
	echo Finished with $year
	sleep 5
done

echo Complete
