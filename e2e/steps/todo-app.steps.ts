import { browser, protractor } from 'protractor';
import { Given, When, Then } from 'cucumber';
import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';

import todoAppPO from '../page-objects/todo-app.po';
import elementHelperPO from '../page-objects/element-helper.po';

chai.use(chaiaspromised);

Given('I have an empty todo list', async () => {
    await chai.expect(todoAppPO.main.todoList.isPresent()).to.eventually.be.false;
});

When('I add a todo item with text {string}', async (todoText) => {
    await chai.expect(todoAppPO.header.newTodoText.isPresent()).to.eventually.be.true;
    await elementHelperPO.slowType(todoAppPO.header.newTodoText, todoText);
    await todoAppPO.header.newTodoText.sendKeys(protractor.Key.ENTER);
});

Then('I have {int} uncomplete item on my todo list', async (count) => {
    const itemsText = count === 1 ? 'item left' : 'items left';
    await chai.expect(todoAppPO.main.todoListItems.count()).to.eventually.equal(count);
    await chai.expect(todoAppPO.footer.itemsLeft.getText()).to.eventually.contain(`${count} ${itemsText}`);
});

// A debug step while developing to add a feature step to wait
Then('I wait a bit', {timeout: 4 * 5000}, async () => {
    await browser.sleep(19000);
});
