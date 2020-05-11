var email;
module.exports = {
  'Get ghost email': function (browser) {
    browser
      .resizeWindow(1200, 1500)
      .url('https://temp-mail.org/es/')
      .getValue('input[id=mail]', function(result) {
      	email = result.value;
      	console.log(email);
      })
      .pause(10000)
      browser.saveScreenshot('./reports/temp-mail/mail.png')
  }
}