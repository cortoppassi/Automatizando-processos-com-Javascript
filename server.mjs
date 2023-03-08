import puppeteer from 'puppeteer';
import express from 'express';
// const puppeteer = require('puppeteer');
const app = express();
const port = 3000;

app.get('/', async(req, res) =>{
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.sofista.com.br/');
//   // await page.screenshot({path: 'example.png'});

// const conteudo = await page.evaluate(() =>{
//   return{
//     h1: document.querySelector('bo.fw-bolder.f-size-custom-resp'),innerHtml
//   };
// })
  
// console.log(conteudo)
// await browser.close();

  res.send({
    

  });
});

app.listen(port, () =>{
  console.log(`Servidor rodando na porta http://localhost:${port}`)
})

//================================================================
