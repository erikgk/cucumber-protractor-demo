# cucumber-protractor-demo

Demonstrates a setup of Cucumber, Protractor, Webdriver (standalone). Using additional dependencies like a HTML reporting tool.
The tests run on **TodoMVC** specically the Angular2 version on http://todomvc.com/examples/angular2/

## Install

Run `npm install` to setup all dependencies in the project. This also runs `webdriver-manager update` to make sure webdriver is setup. If the command fails, please check the installation of webdriver on your local machine.

## Running end-to-end tests

Run `npm run e2e` which runs on chrome to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

There are two configurations available:
- Chrome `npm run e2e:chrome`
- Firefox `npm run e2e:firefox`

## About the features

They were setup to demonstrate approaches to problems so they are not meant as a complete test suite.

### Used approaches are
- Gherkin feature files
- Default step matchers with typing and optional sections
- xPath step matchers to match more natural language
- Datatable with a step definition
- Page Object Model (POM) is used
- Chai as promised assertion library
