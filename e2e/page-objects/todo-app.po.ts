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
    }
};
