const programs = require('./ostelea-urls.js');
//console.log(programs.programsUrls);
let numberProgam = Math.floor((Math.random() * programsUrls.length) + 0);
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time
let program;
let phoneNumber = 902889441;
let genreOptions = [
	"edit-webform-si-genre-m",
	"edit-webform-si-genre-f"
];
let zipCode = '08018';
let genreValueRandom = Math.floor((Math.random() * genreOptions.length) + 0);
console.log("---------------------------------------------------------------------------------------------");
console.log("RUNNIGN TEST ON " + programsUrls[numberProgam] + " URL ");
console.log("---------------------------------------------------------------------------------------------");

module.exports = {
  'Test page elements': function (browser) {
    browser
      .resizeWindow(1200, 1500)      
      .url(programsUrls[numberProgam])
      .waitForElementVisible('body')
      .waitForElementVisible('h1')
      .waitForElementVisible('h2')
      .waitForElementVisible('nav.breadcrumb')
      .saveScreenshot('./reports/' + programsUrls[numberProgam] + dateTime + '.png')
      .getText('h1', function(result) {
	      browser.assert.titleContains(result.value)
	    });
  },
  'Test webform elements' : function (browser) {
  	browser
  		.waitForElementVisible('div.form-si')
  		.waitForElementVisible('input#edit-webform-si-name')
  		.waitForElementVisible('input#edit-webform-si-lastname')
  		.waitForElementVisible('select#edit-webform-si-age')
  		.waitForElementVisible('div#edit-webform-si-genre')
  		.waitForElementVisible('select#edit-webform-si-studies')
  		.waitForElementVisible('input#edit-webform-si-email')
  		.waitForElementVisible('select#edit-webform-si-country')
  		.waitForElementVisible('input#edit-webform-si-phone')
  		.waitForElementVisible('div#edit-webform-si-legaltext div')
  		.waitForElementVisible('input#edit-submit.webform-button--submit')
  },
  'Test submit' : function (browser) {
  	browser  	
		.setValue('input#edit-webform-si-name', 'Fhios')
		.assert.value("input#edit-webform-si-name", "Fhios")
		.setValue('input#edit-webform-si-lastname', 'Smart Knowledge')
		.assert.value("input#edit-webform-si-lastname", "Smart Knowledge")
		.setValue('select#edit-webform-si-age', '37')
		.assert.value("select#edit-webform-si-age", "37")		
		.setValue('select#edit-webform-si-studies', 'Bachillerato')
		.assert.value('select#edit-webform-si-studies', '3')		
		.click('label[for="' + genreOptions[genreValueRandom] + '"]')
		.setValue('input#edit-webform-si-email', 'fhios@fhios.es')
		.assert.value('input#edit-webform-si-email', 'fhios@fhios.es')
		.click('select#edit-webform-si-country')
    	.click('select#edit-webform-si-country option[value="ES"]')
    	.isVisible('input#edit-webform-si-zipcode', results => {
    		if (results.value) {
    			browser.setValue('input#edit-webform-si-zipcode', zipCode);
    		} else {

    		}
    	})
		.setValue('input#edit-webform-si-phone', phoneNumber)
		.isVisible('div#edit-webform-si-course-campus', results => {
  			if (results.value) {
  				console.log("This program have campus field");
  				click('label[for="edit-webform-si-course-campus-15"]');
  			} else {
  				console.log("This program haven't campus field");
  			}
  		})
		.assert.visible('input[type="submit"]')
		.moveToElement('input[type="submit"]', 10, 10)
		browser.saveScreenshot('./reports/submits/AFTER/' + programsUrls[numberProgam] + dateTime + '.png')
		.click('input[type="submit"]')
		.pause(1000)
		browser.saveScreenshot('./reports/submits/BEFORE/' + programsUrls[numberProgam] + dateTime + '.png')
	  .end()
    },
}
console.log("---------------------------------------------------------------------------------------------");
console.log("END TEST ON " + programsUrls[numberProgam] + " URL ");
console.log("---------------------------------------------------------------------------------------------");