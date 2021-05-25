<h1 align = "center" > Food Ordering Application </h1>

</p>

### A beginner-friendly project which helps you to create a green corridor so that your meal can be delivered to you in a very efficient manner :) This project is useful for people who don't want to buy a full-fledged restaurant to serve people, instead, they just need to have a kitchen in their favorite place and some delivery partners according to their needs.

# BACKEND

## Quickstart

Download [Node.js](https://nodejs.dev/download/), [git](https://git-scm.com/downloads), [VS Code](https://code.visualstudio.com/Download), mysql

### Install MySQL

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

## Start MySQL Service

### Linux

```shell
$ sudo service mysql start
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

```shell
$ git clone https://github.com/rhythm98/Food.git FoodApp
$ cd FoodApp
$ npm i
$ node -r dotenv/config scripts/seed_sampledish.js # to add seed data
$ node src/run.js # to start server
```
## Visit `http://localhost:2323/`


### [Extension to make REST API requests inside VS Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
<!-- see rest -->

## Business Logic

### Users

1. **create users**
   this will create a new user

### Dishes

1. **Only admin user can create dish**
   required fields are

   - name
   - imageUrl
   - price
   - description

2. **show all dishes**
   list all existing dishes, we should have following filtering support

   - filter by veg/non-veg
   - filter by query contained in title (search by title)

3. **edit dish details by admin users** `TBD`

4. **delete dishes** `TBD`

### Comments

1. **show all comments (under a dish)**

2. **add a comment**


## API Documentation

### `users`

1. `POST /api/users`

Creates a new user with required fields in body - `firstName`, `lastName`, unique `username`, `email` and `password`

2. `GET /users/{id}`

Get an user with a given user id

3. `GET /users/{username}`

Get an user with a given username

4. `GET /api/users`

Get list of all users

### `dishes`

1. `GET /api/dishes`

Get list of all dishes

2. `POST /api/dishes`

Create a new dish. Required fields in body -

`name`, `imageUrl`, `price`, `description`

3. `GET /api/dishes/{id}`

To see dish with a particular id


> ### Project Structure

```shell
├── .env
├── public_static
│   ├── index.html
│   ├── style.css
│   ├── about.html
│   └── jquery-3.6.0.js
├── scripts
│   └── seed_sampledish.js
├── src                        # Backend
│   ├── auth
│   │   ├── strategies
│   │   │   └── passport-local-strategy.js
│   │   └── passport.js
│   ├── controllers            # (functions to execute sql queries)
│   │   ├── dishes.js          # (fetchDishes, fetchDishById, createDish)
│   │   └── users.js           # (fetchUsers, fetchUserById, fetchUserByUsername, createUser)
│   ├── models                 # ORM sequelize
│   │   └── db.js              # (creating table users, dishes)
│   ├── routes
│   │   ├── api
│   │   │   ├── dishes.js
│   │   │   ├── users.js
│   │   │   └── index.js
│   │   └── pages
│   │       ├── dishes.js
│   │       ├── auth.js
│   │       └── index.js
│   ├── run.js
│   └── server.js
│
└── views
    ├── layouts
    │   └── main.hbs
    ├── pages
    │   ├── auth
    │   │   ├── login.hbs
    │   │   └── signup.hbs
    │   ├── dishes
    │   │   └── id.hbs
    │   ├── dishes.hbs
    │   ├── index.hbs
    │   └── user.hbs
    └── partials
        ├── authLoginform.hbs
        └── authSignupform.hbs
```

# FRONTEND (React)

```bash
$ git clone https://github.com/rhythm98/Food.git FoodApp
$ cd FoodApp/client
$ npm i
$ npm start
```
## Visit `http://localhost:3000/`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

