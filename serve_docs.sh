#!/bin/bash

export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

cd "$(dirname "$0")"

# Check Ruby version
RUBY_VERSION=$(ruby -v | grep -oE '[0-9]+\.[0-9]+' | head -1)
REQUIRED_VERSION="3.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$RUBY_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "Error: Ruby $REQUIRED_VERSION+ required. You have Ruby $RUBY_VERSION"
    echo "Install with: brew install ruby"
    echo "Then add to ~/.zshrc: export PATH=\"/opt/homebrew/bin:\$PATH\""
    exit 1
fi

# Install dependencies if needed
if [ ! -f "Gemfile.lock" ]; then
    echo "Installing dependencies..."
    bundle install
fi

# Serve the site
echo "Starting Jekyll server at http://localhost:4000"
bundle exec jekyll serve
