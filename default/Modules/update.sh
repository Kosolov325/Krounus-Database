#!/bin/bash


rm -r 'Persistent Kingdoms'
cd Krounus
git pull
chmod 777 build_module.sh
./build_module.sh
cp -r 'Persistent Kingdoms' ..

rm -r /home/PK.js/gameservers/default/logs
cd /home/PK.js/gameservers/3
cp -r logs /home/PK.js/gameservers/default
