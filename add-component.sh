#!/bin/bash

# Check if a component name was provided
if [ -z "$1" ]; then
  echo "Please provide a component name."
  echo "Usage: ./add-component.sh [component-name]"
  echo "Example: ./add-component.sh dropdown-menu"
  exit 1
fi

# Add the component
echo "Adding $1 component..."
npx shadcn@latest add "$1"

echo "Component $1 added successfully!" 