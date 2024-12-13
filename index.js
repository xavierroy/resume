import puppeteer from "puppeteer";
 
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });
  await page.pdf({ format: 'letter', path: './resume.pdf' });
  await browser.close();
}

await printPDF();