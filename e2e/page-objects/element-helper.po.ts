import { browser, ElementFinder } from 'protractor';

export default {
  async scrollElementIntoView(element: ElementFinder) {
    await browser.executeScript((el) => {
      el.scrollIntoView();
    }, element);
  },
  // Because of: https://bugs.chromium.org/p/chromedriver/issues/detail?id=2599
  async clickElement(element: ElementFinder) {
    await browser.executeScript((el) => {
      el.click();
    }, element);
  },
  // Slow type the text in new todo item input since angular 2 can trip over
  // input that is too fast and therefore miss characters while typing
  async slowType(element: ElementFinder, value: string) {
    for (const char of value) {
      await element.sendKeys(char);
    }
  }
};
