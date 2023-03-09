import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  try {
    await page.goto('https://aluno.unifacs.br/SOL/aluno/index.php')
    await page.type("input[name='matricula']", '**********');
    await page.type("input[name='senha']", '**********');
    await page.click("input[name=logar]");
    await page.waitForNavigation();
    await page.goto('https://aluno.unifacs.br/SOL/aluno/index.php/ead/ilang');
    await page.click("input[name=btnSalaAulaVirtual]");
    await page.waitForNavigation();
    await page.goto('https://student.ulife.com.br/StudentHome#pageIndex=1');
    await page.waitForNavigation();
    await page.click(".ng-scope");

  } catch (err) {
    console.log(err.msg)
  }
  //  await page.close();
})();
