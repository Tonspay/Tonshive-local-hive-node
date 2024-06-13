const puppeteer = require('puppeteer');


function sleep (ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

(async () => {
	const browser = await puppeteer.launch(
        {
            headless: 'new',
            args: ['--no-sandbox'],

        }
    );  
	const page = await browser.newPage();
    await page.setViewport({
        width: Math.ceil(200),
        height: Math.ceil(100),
        deviceScaleFactor: 2,
      });
	await page.goto('https://api.tonshive.xyz/');
    while(true)
    {
        await page.screenshot({ path: `./logs/${Date.now()}.png` });
        
        await sleep(3000)
    }
    await browser.close();
})();
