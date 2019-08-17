import { browser, protractor } from 'protractor';
import { Given, When, Then } from 'cucumber';
import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';

import todoAppPO from '../page-objects/todo-app.po';
import elementHelperPO from '../page-objects/element-helper.po';

chai.use(chaiaspromised);

Given('the user has an empty todo list', async () => {
    await chai.expect(todoAppPO.main.todoList.isPresent()).to.eventually.be.false;
});

Given('the user has the following tasks on the todo list', { timeout: 4 * 5000 }, async (datatable) => {
    async function processTasks(tasks) {
        for (const task of tasks) {
            await elementHelperPO.slowType(todoAppPO.header.newTodoText, task.text);
            await todoAppPO.header.newTodoText.sendKeys(protractor.Key.ENTER);
            if (task.status === 'completed') { await todoAppPO.main.completeTodoListItem(task.text).click(); }
        }
    }
    await processTasks(datatable.hashes());
});

When('the user adds a todo item with text {string}', async (todoText) => {
    await chai.expect(todoAppPO.header.newTodoText.isPresent()).to.eventually.be.true;
    await elementHelperPO.slowType(todoAppPO.header.newTodoText, todoText);
    await todoAppPO.header.newTodoText.sendKeys(protractor.Key.ENTER);
});

When('the user toggles {string} completed state', async (todoText) => {
    await chai.expect(todoAppPO.main.todoListItem(todoText).isPresent()).to.eventually.be.true;
    await todoAppPO.main.completeTodoListItem(todoText).click();
});

Then('there is/are {int} item(s) left on the todo list', async (count) => {
    const itemsText = count === 1 ? 'item left' : 'items left';
    await chai.expect(todoAppPO.footer.itemsLeft.getText()).to.eventually.contain(`${count} ${itemsText}`);
});

Then('there is/are {int} uncomplete item(s) on the todo list', async (count) => {
    await chai.expect(todoAppPO.main.uncompletedTodoListItems.count()).to.eventually.equal(count);
});

Then('there is/are {int} completed item(s) left on the todo list', async (count) => {
    await chai.expect(todoAppPO.main.completedTodoListItems.count()).to.eventually.equal(count);
});

Then(/^(can|cannot) clear completed tasks$/, async (expected) => {
    const buttonPresence = expected === 'can';
    await chai.expect(todoAppPO.footer.clearCompletedBtn.isPresent()).to.eventually.equal(buttonPresence);
});

When('the user clears all completed tasks', async () => {
    await todoAppPO.footer.clearCompletedBtn.click();
});

// A debug step while developing to add a feature step to wait
Then('I wait a bit', { timeout: 4 * 5000 }, async () => {
    await browser.sleep(19000);
});
