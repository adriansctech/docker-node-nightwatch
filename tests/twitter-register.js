const names = require('./names-clean.js');
console.log(allNames.length);
let valueRandom = Math.floor((Math.random() * allNames.length) + 0);
let nameApp = "register-twitter";
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;
let email = '';
let nameUser = allNames[valueRandom]; 
module.exports = {
  'Get ghost email': function (browser) {
    browser      
      .url('https://temp-mail.org/es/')
      .pause(2000)
      .getValue('input[id=mail]', function(result) {
        email = result.value;
        console.log(email);
      })
      .pause(10000)
      browser.saveScreenshot('./reports/twitter/'+ nameApp + '/EMAIL-twitter' + dateTime +'.png')
  },
  'Go to page register twitter and include values': function (browser) {
    browser
      .url('https://twitter.com/i/flow/signup')
      .pause(1000)
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', nameUser + "_boot_army_"+ valueRandom)
      .moveToElement('div.css-18t94o4.css-901oao.r-1n1174f.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-19h5ruw.r-bcqeeo.r-qvutc0', 10, 10)
      .mouseButtonClick(0)
      .pause(1000)
      .setValue('input[type=email]', email)
      .pause(1000)
      browser.saveScreenshot('./reports/twitter/'+ nameApp + '/STEP1-twitter' + dateTime +'.png')
      .moveToElement('div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1vsu8ta.r-aj3cln.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr', 10, 10)
      .mouseButtonClick(0)
      .pause(2000)
      browser.saveScreenshot('./reports/twitter/'+ nameApp + '/STEP2-twitter' + dateTime +'.png')
      .moveToElement('div.css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-vw2c0b.r-1777fci.r-eljoum.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0', 10, 10)
      .mouseButtonClick(0)
      .pause(3000)      
      .moveToElement('div.css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-vw2c0b.r-1777fci.r-eljoum.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0', 10, 10)      
      .mouseButtonClick(0)
      .pause(3000)
      browser.saveScreenshot('./reports/twitter/'+ nameApp + '/STEP3-twitter' + dateTime +'.png')
      .moveToElement('div.css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-vw2c0b.r-1777fci.r-eljoum.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0', 10, 10)      
      .mouseButtonClick(0)
      .pause(3000)
      browser.saveScreenshot('./reports/twitter/'+ nameApp + '/STEP4-twitter' + dateTime +'.png')
    .end();
  },  
}