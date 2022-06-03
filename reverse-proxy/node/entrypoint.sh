if [ ! -d "$(pwd)/node_modules" ] 
then
    npm install express mysql
fi
dockerize -wait tcp://mysql_fullcycle:3306 -timeout 15s
node index.js
