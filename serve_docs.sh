#!/bin/bash

cd "$(dirname "$0")"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Check for --dev flag
if [ "$1" = "--dev" ]; then
    echo "Starting dev server at http://localhost:3000 (no search)"
    npm start
else
    echo "Building site..."
    npm run build
    echo "Serving at http://localhost:3000 (with search)"
    npm run serve
fi
