import { browser } from 'protractor';
import { Then } from 'cucumber';

import todoAppPO from '../page-objects/todo-app.po';

import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';
chai.use(chaiaspromised);

Then('Say Hi', async () => {
    await browser.get('http://todomvc.com/examples/angular2/');
    await chai.expect(todoAppPO.app.isDisplayed()).to.eventually.be.true;
    await chai.expect(todoAppPO.appHeading.getText()).to.eventually.contain('todos');
});
