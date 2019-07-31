import { by } from 'protractor';

export default (app) => ({
    get itemsLeft() {
        return app.element(by.css('footer span[class="todo-count"]'));
    },
    get clearCompletedBtn() {
        return app.element(by.buttonText('Clear completed'));
    }
});
