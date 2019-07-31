import { element, by } from 'protractor';

function app() {
    return element(by.tagName('todo-app'));
}

export default {
    get app() {
        return app();
    },
    get appHeading() {
        return app().element(by.tagName('h1'));
    },
    get todoList() {
        return app().element(by.css('ul[class="todo-list"]'));
    },
    get newTodoText() {
        return app().element(by.tagName('header input'));
    },
    get todoListItems() {
        return app().all(by.css('ul[class="todo-list"] li'));
    },
    get itemsLeft() {
        return app().element(by.css('footer span[class="todo-count"]'));
    }
};
