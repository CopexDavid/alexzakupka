const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testSelenium() {
  console.log('Starting Selenium test...');
  
  const options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');

  try {
    console.log('Creating driver...');
    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    console.log('Driver created successfully!');
    console.log('Navigating to Google...');
    
    await driver.get('https://www.google.com');
    console.log('Successfully loaded Google!');
    
    await driver.quit();
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testSelenium(); 