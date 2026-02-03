#!/bin/bash

cd "$(dirname "$0")"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Serve the site
echo "Starting Docusaurus server at http://localhost:3000"
npm start
