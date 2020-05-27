# angular-package-template

This repository contains starter project with initialization script to create custom angular NPM package

# Package initialization

- checkout repository to local folder
- run npm install
- run the following command:
  `node scripts/packageInit.js --projectname "{project-name}" --packagename "{package-name}"`
  **arguments description**
  - projectname - name of your package project ('-' separated e.g company-identity)
  - packagename - name of the result npm package (e.g. @company/identity)
  
As a result of this actions package folder will be created located in here: `./package/{project-name}`. You can adjust package.json file and put your package code into src folder.

# Package project features
Started package has builtin setup for **eslint** wiht prettier, **hucky** pre commit hooks that forces repository to lint and format staged files. There is also starated Azure DevOps build pipeline .yml file that will allow you to lint and build package in Azure DevOps pipeline.

# Working with package

Here is the list of command that can be used during the development:
- test - run package tests
- build:all - build target package
- build:all-prod - build target package in production mode (Ivy is disabled, it is requirement of angular package)
- build:{project-name} - build your target package project
- lint - run linter (esLint)
- release - **standard-version** npm package command that allows you to create new package version (update package.json) files and fill in changelog.md file with messages from commits based on conventional commit structure.

