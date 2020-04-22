let names = [];
module.exports = {
  'Get any names of wikipedia': function (browser) {    
    browser
      .url('https://es.wikipedia.org/wiki/Categor%C3%ADa:Nombres_hebreos')
      .waitForElementVisible('body')
      .waitForElementVisible('h1')
      .waitForElementVisible('div#mw-pages')
      .elements('css selector', 'div.mw-category-group ul li a', function(result){        
        result.value.map(function(element, err) {
            browser.elementIdAttribute(element.ELEMENT, 'innerText', function(res) {              
              names[res.value]= res.value
            })
        })
    })
  },
  'display results': function (browser) {    
    console.log(names)    
  }
}
