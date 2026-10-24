import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

const base=process.env.TEST_PORTFOLIO_URL||'http://127.0.0.1:8765/founder/';
const browser=await chromium.launch({headless:true});
await mkdir('founder-qa-screenshots',{recursive:true});
let passed=0;
try{
 for(const [name,width,height] of [['desktop',1440,900],['tablet',768,1024],['mobile',390,844],['small-mobile',320,700]]){
  const ctx=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,reducedMotion:'reduce',isMobile:name.includes('mobile'),hasTouch:name.includes('mobile')});
  const page=await ctx.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const resp=await page.goto(base,{waitUntil:'domcontentloaded',timeout:30000});
  assert.equal(resp?.status(),200,name+' HTTP 200');
  assert.match(await page.title(),/Muhammad Mamduh Saffin/);
  assert.equal(await page.locator('h1').count(),1);
  assert.equal(await page.locator('.project-card:visible').count(),8);
  await page.locator('[data-filter="digital"]').click();
  assert.equal(await page.locator('.project-card:visible').count(),5,name+' digital filter');
  await page.locator('[data-filter="gulf"]').click();
  assert.equal(await page.locator('.project-card:visible').count(),3,name+' gulf filter');
  await page.locator('[data-filter="all"]').click();
  assert.equal(await page.locator('.project-card:visible').count(),8,name+' all filter');
  const overflow=await page.evaluate(()=>({actual:document.documentElement.scrollWidth,expected:innerWidth}));
  assert.ok(overflow.actual<=overflow.expected+3,name+' horizontal overflow '+JSON.stringify(overflow));
  assert.ok(await page.locator('a[href="./muhammad-mamduh-saffin.vcf"]').isVisible());
  if(width<=850){
   const menu=page.locator('#nav-toggle');
   assert.ok(await menu.isVisible());
   await menu.click();assert.equal(await menu.getAttribute('aria-expanded'),'true');
   await page.locator('#main-nav a[href="#about"]').click();
   assert.equal(await menu.getAttribute('aria-expanded'),'false');
  }
  assert.deepEqual(errors,[],name+' JS errors');
  await page.screenshot({path:'founder-qa-screenshots/'+name+'.png',fullPage:true,animations:'disabled'});
  passed+=12;await ctx.close();
 }
 const ctx=await browser.newContext({viewport:{width:1280,height:800},reducedMotion:'no-preference'});
 const page=await ctx.newPage();await page.goto(base,{waitUntil:'domcontentloaded'});
 const motion=await page.evaluate(()=>({animation:getComputedStyle(document.querySelector('.orbital-ring')).animationName,canvas:!!document.querySelector('canvas#stars'),scene:!!document.querySelector('#orbit-scene')}));
 assert.notEqual(motion.animation,'none');assert.ok(motion.canvas&&motion.scene);
 passed+=3;await ctx.close();
 console.log('PASS: '+passed+' browser checks, four screenshots');
}finally{await browser.close();}
