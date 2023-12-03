# PawHub - MERN Stack Social Media for Pets

## Overview

Welcome to PawHub, a full-stack social media project for pets built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project allows pets to connect, share posts, and showcase their furry friends in an online community.

## Features

- **User Authentication:** Secure user authentication using MongoDB for user storage. Users can sign up, log in, and manage their profiles.
- **Post Creation and Sharing:** Users can create posts and share images to engage with the community.
- **Feed:** A dynamic feed displays posts from users that others are following, creating an interactive and engaging experience.
- **User Profiles:** Every user has a profile component where they can view and edit their personal information.
- **Responsive Design:** PawHub is designed to provide a seamless experience across devices, ensuring users can interact with the community from desktops, tablets, and mobile phones.
- **Search Function:** Users can search for other users to follow utilising the search bar. 

## Tech Stack

- **Frontend:** React.js
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Hosting:** Digital Ocean

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB instance (local or remote)
- Digital Ocean account for hosting

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rundex0/Large-Project.git
   cd pawhub
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. Configuration:

   - Create a `.env` file in the `server` directory and configure the following:

     ```env
     MONGODB_URI=your_mongodb_connection_string
     SECRET_KEY=your_jwt_secret_key
     ```

     Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_jwt_secret_key` with a secret key for JWT.

4. Run the application:

   ```bash
   # Run backend server
   cd server
   npm start

   # Run frontend
   cd ../client
   npm start
   ```

   The application should be accessible at `http://localhost:3000`.

## Deployment

To deploy PawHub on Digital Ocean, follow these steps:

1. Create a Digital Ocean account and set up a new Droplet.
2. Connect to your Droplet and clone the PawHub repository.
3. Set up your environment variables on the Droplet.
4. Install dependencies and start the application.

   
![Screenshot from 2023-07-30 11-15-28](https://github.com/rundex0/Large-Project/assets/69157728/d69d9ed1-9a20-414d-8a54-129754f9ec61)
![Screenshot from 2023-07-30 11-15-58](https://github.com/rundex0/Large-Project/assets/69157728/15e13f8a-5afb-44d4-bb4b-4f2a81fe6949)
![Screenshot from 2023-07-30 11-16-15](https://github.com/rundex0/Large-Project/assets/69157728/99c191ba-06d1-4c29-812c-6cc387d3428d)
![Screenshot from 2023-07-30 11-16-37](https://github.com/rundex0/Large-Project/assets/69157728/2a4529b0-07e0-4cb4-8a79-800b13cc014a)
![Screenshot from 2023-07-30 11-16-46](https://github.com/rundex0/Large-Project/assets/69157728/46aa07a3-c63b-4113-9a94-0054b9df3a70)
![Screenshot from 2023-07-30 11-17-00](https://github.com/rundex0/Large-Project/assets/69157728/b64ddbb2-e24e-4968-85ee-193d1ca0bbee)
![Screenshot from 2023-07-30 11-17-14](https://github.com/rundex0/Large-Project/assets/69157728/01968e95-8c29-4c09-a2f2-6c46ae515ccb)



Happy pet sharing on PawHub! 🐾
