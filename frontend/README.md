# Secure CMS Frontend
A simple reusable content management system with an emphasis on content security and user login security.
My core goal for this project was to create a secure CMS, which could not be reasonably hacked. Instead of using an off the shelf login system, I wanted to implement one from scratch so that I understood best practices when implementing login.

## Frontend server
In the "frontend" directory Run:
`npm install` when you first checkout the project
`ng serve` to start the frontend web server.
Navigate to `http://localhost:4200/`.

## Backend server
In the "backend" directory Run:
`npm install` when you first checkout the project
`sails lift --port 1337`

##DataBase
You will need MySQL 5.10+
import dbschema.sql into mysql to create the necessary tables
