const { Then } = require('cucumber');
const { browser } = require('protractor');

const todoAppPO = require('../page-objects/todo-app.po');

const chai = require('chai');
chai.use(require('chai-as-promised'));

Then('Say Hi', async () => {
    await browser.get('http://todomvc.com/examples/angular2/')
    await chai.expect(todoAppPO.app.isDisplayed()).to.eventually.be.true;
});