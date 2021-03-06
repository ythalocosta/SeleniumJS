require('dotenv').config();
require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

(async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to Url
    await driver.get(process.env.BROWSER_URL);

    // Enter text "cheese" and perform keyboard action "Enter"
    await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

    const firstResult = await driver.wait(
        until.elementLocated(By.css('h3')),
        10000,
    );

    console.log(await firstResult.getAttribute('textContent'));
  } catch (e) {
    console.error(e);
  } finally {
    await driver.quit();
  }
})();

console.log('Test Browser Finished');
