1.Intro
# Admin Dashboard Project

This project is a simple Admin Dashboard built with Vue 3, Nuxt 3, and Express.js. It allows users to manage users and roles in an admin panel.

## Features
- User management (CRUD operations for users)
- Role management (CRUD operations for roles)
- Login authentication using JWT (JSON Web Tokens)

## Project Structure
- **Frontend (Nuxt.js)**: 
  - Login page to authenticate users
  - Sidebar navigation for managing users and roles
- **Backend (Express.js)**:
  - APIs for user and role management
  - Login authentication via JWT

## Prerequisites
- Node.js (version 16 or later)
- npm or yarn

## Installation

2. Clone the repository:

```bash
git clone https://github.com/Dinesh11234/RBAC-App
```

3.Set up the backend:
Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

4.Start the server (from the backend folder):

```bash
npm start
```
This will run the server at http://localhost:3001.
don't close the cmd

5.Set up the frontend:
open new cmd for frontend folder, install dependencies:

```bash
cd frontend
npm install
```
Start the frontend (from the frontend folder):

```bash
npm run dev
```
This will run the Nuxt.js app at http://localhost:3000.

6.Login Credentials
To log into the admin dashboard, use the following credentials:

Email: dinesh@gmail.com
Password: password123
After logging in, you will have access to the Users and Roles management pages.

7.API Endpoints
POST /login: Authenticate user and receive JWT token.

Request Body:

```bash
{
  "email": "your-email",
  "password": "your-password"
}
```
Response:

```bash
{
  "token": "your-jwt-token",
  "user": {
    "id": 1,
    "name": "Dinesh",
    "email": "dinesh@gmail.com",
    "role": "Admin",
    "status": "Active"
  }
}
```
GET /users: Get all users.

POST /users: Create a new user.

PUT /users/:id: Update user information.

DELETE /users/:id: Delete a user.

GET /roles: Get all roles.

POST /roles: Create a new role.

PUT /roles/:id: Update role information.

DELETE /roles/:id: Delete a role.

8.Notes
The login functionality uses JWT for authentication. The JWT token is stored in localStorage and included in subsequent API requests.
This project uses Tailwind CSS for styling, ensuring a modern and responsive design for both mobile and desktop views.


### Explanation:
- **Project Overview**: The first section gives a brief description of the project and its features.
- **Installation**: Instructions are provided for setting up both the frontend and backend of the application.
- **Login Credentials**: The credentials `dinesh@gmail.com` and `password123` are provided for logging into the application.
- **API Endpoints**: A list of API endpoints is included for user and role management, along with the login endpoint.
- **Notes**: Notes on how the JWT authentication works and how the frontend is styled with Tailwind CSS.
- **License**: A placeholder for the license, in case you're planning to open-source the project.

This `README.md` file provides all the necessary information for setting up, running, and using the project.
