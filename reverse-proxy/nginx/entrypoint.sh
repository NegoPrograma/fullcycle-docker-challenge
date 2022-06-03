dockerize -wait tcp://mysql_fullcycle:3306 -timeout 15s
dockerize -wait tcp://node_fullcycle:3000 -timeout 15s
nginx -g 'daemon off;'