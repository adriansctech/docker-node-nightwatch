module.exports = {     
  'Demo test ecosia.org' : function (browser) {
    browser
      .resizeWindow(1200, 3000)
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .saveScreenshot('./reports/homepage.png')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  },
};