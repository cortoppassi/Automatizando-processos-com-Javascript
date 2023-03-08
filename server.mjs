import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  await page.goto('https://aluno.unifacs.br/SOL/aluno/index.php/index/seguranca/dev/instituicao/127')
  await page.type("input[name='matricula']", '*********');
  await page.type("input[name='senha']", '*********');
  await page.click("input[name=logar]");
  
   
});
  // https://pptr.dev/
  // https://www.youtube.com/watch?v=xianIw6PleE
