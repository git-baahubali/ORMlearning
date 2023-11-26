
# 100x Microblogging Platform ORM Setup

This repository contains the implementation of a microblogging platform, similar to Twitter, using Node.js and Sequelize ORM. The platform supports basic functionalities such as user management, posting, following, liking, and replying to posts.

## Features

- User Registration and Authentication
- Creating and Managing Posts
- Following and Unfollowing Users
- Liking Posts
- Replying to Posts

## Technologies

- Node.js
- Sequelize ORM
- PostgreSQL (through Supabase)
- Express.js (optional, if used in the project)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm or yarn
- PostgreSQL (local or through a service like Supabase)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   git clone https://github.com/git-baahubali/ORMlearning.git

2. Navigate to the project directory:
    cd your-repo-name

3. Install dependencies:
    npm install

4. Set up your database configuration in config/config.json.
5. Run the database migrations:
    npx sequelize-cli db:migrate

