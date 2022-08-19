# Issues-tracker

## Get started

1 - Fork and clone the repo to your computer  
2 - CD into fronted and run npm install to install the dependencies the npm satrt to lunch the project in your browser  
3 - CD into server and run npm install to install the dependencies then node index.js or nodemon

## The frontend new routes

1- The main route http://localhost:3000/ is now redirecting to http://localhost:3000/user/login. On successful login, the user is redirected to the dashboard.  
2- You may access the dashboard directly by going to http://localhost:3000/user/dashboard. This route is going to be protected and only made available to authenticated users.  
3- To access the sign up page visit http://localhost:3000/user/create-account or use the link on the login page

## Configurations

Create a file named .env in the server folder and set the values for these variables:

PORT= 9000  
MONGODB_URI="" paste in your mongodb connection string  
jwtPrivateKey="" create a private key

## API endpoints

1 - To create a new user, send a POST req to http://localhost:9000/api/users  
2 - To Login, send a POST request to http://localhost:9000/api/authn  
3- Get the current user (Protected route, requies authentication and authorization) http://localhost:9000/api/users/me
