# CucumberProtractorDemo

Demonstrates a setup of Cucumber, Protractor, Webdriver (standalone). Using additional dependencies like a HTML reporting tool.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Install

Run `npm install` to setup all dependencies in the project. This also runs `webdriver-manager update` to make sure webdriver is setup. If the command fails, please check the installation of webdriver on your local machine.

If you plan on contributing `npm install -g commitizen` or if you have NPM 5.2+ `npx git-cz`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Run this demo project wihout serving the app

This demo includes the Angular framework but does not run test anything locally. So instead of `npm run e2e` it is recommended to run `npm run protractor`. This skips the build of the app. 

Note: you may require a globally installed protractor. 
`npm install -g protractor` 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
