#!/usr/bin/env bash

read -p "Enter app prefix: " prefix

echo "Installing Angular CLI..."
npm install -g @angular/cli

echo "Creating new angular app..."
ng new $prefix-app --prefix $prefix

