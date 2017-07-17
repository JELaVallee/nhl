#!/bin/bash

for url in `grep -Po "(?<=url\(')[^']*(?=')" ../../src/app/material/team-logos.scss`
do
    echo "Getting... $url"
    wget -P ~/workspace/utils/sprite-scripts/files/s3-logos/ $url
done

echo "Converting all non-PNGs to PNG format..."
cd ~/workspace/utils/sprite-scripts/files/s3-logos
mogrify -format png *.gif

echo "Copying PNG files to new folder..."
cp *.png ~/workspace/utils/sprite-scripts/files/png-logos/