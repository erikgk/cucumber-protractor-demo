import { by } from 'protractor';

export default (app) => ({
    get todoList() {
        return app.element(by.css('ul[class="todo-list"]'));
    },
    get todoListItems() {
        return app.all(by.css('ul[class="todo-list"] li'));
    }
});
