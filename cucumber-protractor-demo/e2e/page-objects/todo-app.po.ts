import { element, by } from 'protractor';

export default {
    get app() {
        return element(by.tagName('todo-app'));
    }
};
