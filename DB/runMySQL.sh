docker run -d --name mysql -p 3306:3306 -v mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=sql_server mysql:8.3 --default-authentication-plugin=mysql_native_password