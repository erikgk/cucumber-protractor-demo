import { by } from 'protractor';

export default (app) => ({
    get itemsLeft() {
        return app.element(by.css('footer span[class="todo-count"]'));
    }
});
