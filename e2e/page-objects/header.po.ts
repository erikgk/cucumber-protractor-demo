import { by } from 'protractor';

export default (app) => ({
    get appHeading() {
        return app.element(by.tagName('h1'));
    },
    get newTodoText() {
        return app.element(by.tagName('header input'));
    }
});
