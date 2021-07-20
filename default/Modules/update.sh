#!/bin/bash


rm -r 'Persistent Kingdoms'
cd Krounus
git pull
cp -r 'Persistent Kingdoms' ..

rm -r /home/PK.js/gameservers/default/logs
cd /home/PK.js/gameservers/3
cp -r logs /home/PK.js/gameservers/default
