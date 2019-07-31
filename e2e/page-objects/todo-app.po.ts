import { element, by } from 'protractor';

import headerPO from './header.po';
import footerPO from './footer.po';
import mainPO from './main.po';

function app() {
    return element(by.tagName('todo-app'));
}

export default {
    get app() {
        return app();
    },
    get header() {
        return headerPO(app());
    },
    get main() {
        return mainPO(app());
    },
    get footer() {
        return footerPO(app());
    }
};
