const { AxeBuilder } = require('@axe-core/webdriverjs');
const { describe, it } = require('mocha');
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
var assert = require('assert');


const screen = {
    width: 640,
    height: 480
};
var results = null;
// (async ()=>{
//     const driver = new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(new chrome.Options().addArguments('--headless').windowSize(screen))
//     .build();
//     await driver.get('https://dequeuniversity.com/demo/mars/')
//     results = await new AxeBuilder(driver).analyze();
    
    
// })()

// try {
// var results = new AxeBuilder(driver).analyze();
// } catch (e) {
// // do something with the error
// }


(async function () {
    const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless').windowSize(screen))
    .build();
    await driver.get('https://dequeuniversity.com/demo/mars/')
    results = await new AxeBuilder(driver).analyze();

    describe("pow", function () {
        it("main-nav exists",  function () {
           try {
            this.timeout(5000);
               const data =  driver.findElement(By.id('main-nav'))
               assert.equal(data.toString(), '[object Object]');
           } catch (error) {
               assert.equal(true, false);
           }
       });
   
        it("log analysis data", function () {
           console.log(results);
           assert.equal(true, true);
           driver.quit();
   
       });
   
   
   });
     
    run();
  })();

