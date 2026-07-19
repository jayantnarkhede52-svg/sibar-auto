const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:3000');
  
  // Try to click menu toggle
  try {
    await page.setViewport({ width: 375, height: 812 });
    await page.waitForSelector('.menu-toggle', { timeout: 2000 });
    console.log("Found menu-toggle");
    
    const isVisible = await page.$eval('.menu-toggle', el => {
      const style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    });
    console.log("Is menu-toggle visible?", isVisible);
    
    await page.click('.menu-toggle');
    console.log("Clicked menu-toggle");
    
    const isActive = await page.$eval('.nav-links', el => el.classList.contains('active'));
    console.log("Is nav-links active?", isActive);
    
  } catch(e) {
    console.error("Error interacting with menu:", e.message);
  }

  await browser.close();
})();
