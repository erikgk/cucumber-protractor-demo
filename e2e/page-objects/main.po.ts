import { by } from 'protractor';

export default (app) => ({
    get todoList() {
        return app.element(by.css('ul[class="todo-list"]'));
    },
    get allTodoListItems() {
        return app.all(by.css('ul[class="todo-list"] li'));
    },
    get completedTodoListItems() {
        return app.all(by.css('ul[class="todo-list"] li[class="completed"]'));
    },
    get uncompletedTodoListItems() {
        return app.all(by.css('ul[class="todo-list"] li:not(.completed)'));
    },
    todoListItem(text) {
        return app.element(by.cssContainingText('li label', text));
    },
    completeTodoListItem(text) {
        return app.element(by.cssContainingText('li', text)).element(by.tagName('input'));
    }
});
