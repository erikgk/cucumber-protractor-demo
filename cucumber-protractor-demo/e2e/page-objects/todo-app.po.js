const { element }  = require('protractor');

module.exports = {
    get app() {
        return element(by.tagName('todo-app'));
    }
}