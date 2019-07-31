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

Given('I have the following tasks on my todo list', { timeout: 4 * 5000 }, async (datatable) => {
    async function processTasks(tasks) {
        for (const task of tasks) {
            await elementHelperPO.slowType(todoAppPO.header.newTodoText, task.text);
            await todoAppPO.header.newTodoText.sendKeys(protractor.Key.ENTER);
            if (task.status === 'completed') { await todoAppPO.main.completeTodoListItem(task.text).click(); }
        }
    }
    await processTasks(datatable.hashes());
});

When('I add a todo item with text {string}', async (todoText) => {
    await chai.expect(todoAppPO.header.newTodoText.isPresent()).to.eventually.be.true;
    await elementHelperPO.slowType(todoAppPO.header.newTodoText, todoText);
    await todoAppPO.header.newTodoText.sendKeys(protractor.Key.ENTER);
});

When('I toggle {string} completed state', async (todoText) => {
    await chai.expect(todoAppPO.main.todoListItem(todoText).isPresent()).to.eventually.be.true;
    await todoAppPO.main.completeTodoListItem(todoText).click();
});

Then('I have {int} item(s) left on my todo list', async (count) => {
    const itemsText = count === 1 ? 'item left' : 'items left';
    await chai.expect(todoAppPO.footer.itemsLeft.getText()).to.eventually.contain(`${count} ${itemsText}`);
});

Then('I have {int} uncomplete item on my todo list', async (count) => {
    await chai.expect(todoAppPO.main.uncompletedTodoListItems.count()).to.eventually.equal(count);
});

Then('I have {int} completed item(s) left on my todo list', async (count) => {
    await chai.expect(todoAppPO.main.completedTodoListItems.count()).to.eventually.equal(count);
});

Then(/^I (can|cannot) clear completed tasks$/, async (expected) => {
    const buttonPresence = expected === 'can';
    await chai.expect(todoAppPO.footer.clearCompletedBtn.isPresent()).to.eventually.equal(buttonPresence);
});

// A debug step while developing to add a feature step to wait
Then('I wait a bit', { timeout: 4 * 5000 }, async () => {
    await browser.sleep(19000);
});
