#! /usr/bin/env bash
set -e

# Define the Project Name and Folder Name.
PROJECT_NAME="HW-Google-Books-Search"

# Define the complete project location.
PROJECT_DIR=$(pwd)

NODE_MODULES='./node_modules'
CLIENT='./client'
CLIENT_BUILD='./client/build'
BUILD_DIR='./build'
PACKAGE_LOCK='package-lock.json'

if [ -d "$NODE_MODULES" ]; then
    rm -rf $NODE_MODULES
fi

if [ -d "$CLIENT_BUILD" ]; then
    git rm -rfq $CLIENT_BUILD
fi

if [ -f "$PACKAGE_LOCK" ]; then
    rm -f $PACKAGE_LOCK
fi

if [ -d "$CLIENT" ]; then
    cd $CLIENT
    if [ -d "$NODE_MODULES" ]; then
        rm -rf $NODE_MODULES
    fi
    if [ -d "$BUILD_DIR" ]; then
        git rm -rfq $BUILD_DIR
    fi
    if [ -f "$PACKAGE_LOCK" ]; then
        rm -f $PACKAGE_LOCK
    fi
else
    mkdir -p $PROJECT_DIR/client
fi

cd $PROJECT_DIR
if [ -d "$CLIENT" ]; then
    git mv public $CLIENT
    git mv src $CLIENT
    cp .gitignore $CLIENT
fi

# Create the Node Package Manager package.json file for the project.
cat <<'EOF' >package.json
{
  "name": "search",
  "version": "0.1.0",
  "private": true,
  "main": "server.js",
  "scripts": {
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
    "seed": "node scripts/seedDB.js",
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"
  }
}
EOF

npm install \
    express \
    if-env \
    mongoose

npm install -D \
    concurrently \
    nodemon \
    json

# Create the React.js client.

if [ -d "$CLIENT" ]; then
cd client

# Create the Node Package Manager package.json file for the React Client.
cat <<'EOF' >package.json
{
  "name": "search",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
EOF

npm install \
    axios \
    react \
    react-dom \
    react-scripts \
    react-router-dom \
    react-bootstrap \
    bootstrap \
    @testing-library/jest-dom \
    @testing-library/react \
    @testing-library/user-event
fi
