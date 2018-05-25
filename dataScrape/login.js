const puppeteer = require('puppeteer');
const env = require('dotenv').config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

const BASE_URL = 'http://utopia-game.com/shared/?next=/wol/game/throne';
const LOGIN_BOX = '#id_username';
const PASSWORD_BOX = '#id_password';
const LOGIN_BUTTON = '.g-recaptcha';
const NAVIGATION_LINKS = '.navigation';
const KINGDOM_TABLE = '.tablesorter'
const KINGDOM_URL= 'http://utopia-game.com/wol/game/kingdom_details'
const KINGDOM_SIZE = 25;

async function main(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    try{
        await login(page)
    } catch (err){
        console.log('error navigating to login page');
    }

    try{
        //possibly need 'await delay(5000);
        await navigateToKingdomPage(page);
    } catch (err){
        console.log('error navigating to kd page');
    }

    // try{
        await kingdomTableRows(page);
    // } catch (err){
    //     console.log('error selecting table rows');
    // }

    await selectTotalLand(page);
    await selectTotalNetworth(page);
    // await selectTotalHonor(page);
   
}

async function login(page) {
    
    await page.goto(BASE_URL, {"waitUntil":"networkidle0"});
    console.log('go to login page')
    page.click(LOGIN_BOX);
    await page.keyboard.type(USERNAME);
    await page.click(PASSWORD_BOX);
    await page.keyboard.type(PASSWORD);
    await page.click(LOGIN_BUTTON);
   
}

async function navigateToKingdomPage(page) {
    console.log('inside navigateToKdPageFunction');
    page.goto(KINGDOM_URL);
    console.log('should be at kd page');
    await page.waitForSelector(KINGDOM_TABLE);

}

async function kingdomTableRows(page){
    await delay(5000);
    let table = [];
    for (let i = 0; i < KINGDOM_SIZE; i++) {
        let row = await page.evaluate((i) => {
            return document.querySelectorAll('.tablesorter > tbody > tr')[i].innerHTML;
        }, i);
        table.push(row);
    }
    // console.log(table);
    return table;
}

async function selectTotalLand(page) {
    await delay(5000);
    let table = [];
    const totalLand = await page.evaluate(()=>{
        return document.querySelectorAll('.two-column-stats > tbody > tr')[2].childNodes[3].textContent;
    })
    console.log('acres: ', totalLand);
    return totalLand;
}

async function selectTotalNetworth(page) {
    await delay(5000);
    let table = [];
    const totalNetworth = await page.evaluate(()=>{
        return document.querySelectorAll('.two-column-stats > tbody > tr')[1].childNodes[3].textContent;
    })
    console.log('networth: ', totalNetworth);
    return totalNetworth;
}

async function selectTotalHonor(page) {
    await delay(5000);
    let table = [];
    const totalHonor = await page.evaluate(()=>{
        return document.querySelectorAll('.two-column-stats > tbody > tr')[1].childNodes[3].textContent;
    })
    console.log(totalHonor);
    return totalHonor;
}

async function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

main();