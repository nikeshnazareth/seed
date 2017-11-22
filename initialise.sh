#!/usr/bin/env bash

read -p "Enter app prefix: " prefix

echo -e "\nCreating .gitignore..."
echo -e "# Webstorm IDE\n.idea\n" > .gitignore
echo -e "# Dependencies\nnode_modules\n" >> .gitignore

echo "Installing Angular CLI..."
npm install -g @angular/cli

echo "Creating new angular app..."
ng new app --prefix $prefix

