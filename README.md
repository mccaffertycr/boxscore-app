## Boxscore Challenge

## Installation

`yarn install`

`cd client && yarn install`

## Running locally

Simply create a .env file with the config variables for MongoDB - e.g.:

    MONGO_URL=http://localhost:<your_port>/
    DB_NAME=boxscore-app
    PORT=5000

Once, the configs are in place simply run `yarn dev` at the root directory to start both the server and client similtaenously w/ concurrently.
