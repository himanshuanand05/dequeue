const { AxeBuilder } = require('@axe-core/webdriverjs');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const screen = {
    width: 640,
    height: 480
};

(async () => {
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless').windowSize(screen))
    .build();
  await driver.get('https://dequeuniversity.com/demo/mars/');

  try {
    const results = await new AxeBuilder(driver).analyze();
    console.log(results);
  } catch (e) {
    // do something with the error
  }

  await driver.quit();
})();