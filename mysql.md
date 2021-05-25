# Using MySQL

## Install MySQL

```shell
$ sudo apt update
$ sudo apt install mysql-server
$ sudo mysql_secure_installation
$ sudo mysql
```

```sql
CREATE USER 'user' IDENTIFIED WITH authentication_plugin BY 'password';
ALTER USER 'user' IDENTIFIED WITH mysql_native_password BY 'password';
-> GRANT PRIVILEGE ON *.* TO 'user'@'host';
-> GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on database.table TO 'root'@'localhost' WITH GRANT OPTION;
->(root user) GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
exit
```

> ### Never use "root" user in your application beacause it power to delete all database, all users.

## Start MySQL Service

### Linux

```shell
$ sudo service mysql start (OR)
$ sudo systemctl start mysql.service
```

### MySQL Services

```shell
$ sudo systemctl {start|stop|restart} mysql
$ systemctl status mysql
```

## Log in to MySQL as root

Without root password -

```shell
$ mysql -u user
mysql>
```

With root password -

```shell
$ mysql -u root -p
Enter Password:

mysql>
```

## Create DB, User, Grant access

```sql
CREATE DATABASE dishdb;

CREATE USER 'dishuser'@'localhost' IDENTIFIED BY 'dish@Pass1';

USE dishdb;

GRANT ALL PRIVILEGES ON dishdb to 'dishuser'@'localhost';

GRANT ALL PRIVILEGES ON dishdb.* TO 'dishuser'@'localhost';

FLUSH PRIVILEGES;
```

## Login using the new user

```shell
$ mysql -u dishuser -p
Enter Password: (enter 'dish@Pass1' here)

mysql>
```

## Create, Read, Update, Delete Tables using ORM Sql-Wrapper (Sequelize)

### [Sequelize](https://sequelize.org/master/manual/getting-started.html) is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. Since we are using mysql as our database, so `npm install --save mysql2`

```shell
# Use one of the following:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```

> ## dishes

| uuid  | name | imageUrl | price | description |
| :-: | :--: | :------: | :---: | :---------: |
|  1  | ...  | ...  |  ...  |  ...  |
|  2  | ...  | ...  |  ...  |  ...  |

> ## users 

| uuid  | firstName | lastName | username | email | password |
| :-: | :-------: | :------: | :------: | :---: | :------: |
| ... |    ...    |   ...    |   ...    |   ... |   ...    |
| ... |    ...    |   ...    |   ...    |   ... |   ...    |
| ... |    ...    |   ...    |   ...    |   ... |   ...    |
| ... |    ...    |   ...    |   ...    |   ... |   ...    |
