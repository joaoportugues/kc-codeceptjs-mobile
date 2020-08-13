const { I } = inject();
const landing = require('../pages/landingPage');
let config = require('codeceptjs').config.get()

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

module.exports = {
  // insert your locators and methods here
	async seeText(text) {
		 switch (text.toLowerCase()) {
			case 'logo': 
				I.waitForElement({android: landing.elementsAndroid.logo , ios: landing.elementsiOS.logo}, 20)
				break
			case 'kid-coins': 
				/*try{
					if(I.dontSeeElement("~Allow")){*/
					//I.waitForElement({android: landing.elementsAndroid.logo , ios: landing.elementsiOS.logo}, 20)
				
					//I.runOnIOS(() => {I.tap("~Allow")})
				
						I.waitForElement({android: '//*[@content-desc="'+ text + '"]' , ios: '~' + text}, 20)

					/*} else {
						I.waitForElement({android: landing.elementsAndroid.logo , ios: landing.elementsiOS.logo}, 20)
					}
				}catch (e) {
					console.log("we got here")
				}*/
				break
			case 'allow app': 
				I.waitForElement({android: landing.elementsAndroid.allowApp , ios: landing.elementsiOS.allowApp}, 20)
				break
			default:
			    //I.waitForElement({android: text, ios: '~' +text}, 20);
    			I.waitForElement({android: '//*[@content-desc="'+ text + '"]' , ios: '~' +text}, 20);
				break
		}
    },

	clickOption(name) {
		switch (name.toLowerCase()) {
			case 'options': 
				I.tap({android: '//*[@content-desc="'+ landing.elementsAndroid.settings + '"]' , ios: landing.elementsiOS.settings})
				break
			case 'continue': 
				I.runOnIOS(() => {
					I.runOnIOS(() => {I.tap({android: name , ios:'~' +name});}
					);
				});
				break
			case 'back to app': 
				I.touchPerform([{
    				action: 'press',
    				options: {
      					x: 5,
      					y: 5
   				 	}
				}, {action: 'release'}])
				
				break
			default:
				I.tap({android: '//*[@content-desc="'+ name + '"]' , ios:'~' +name});
				break
		}
    },
	type(text, field) {		
		switch (field.toLowerCase()) {
			case 'email': 				
				//need to split - type elements does not allow both platforms in one command.
				if(config.helpers.Appium.platform == "Android") {
					//handle specially difficult cases
					I.waitForElement(landing.elementsAndroid.googleEmailField, 20);
										
					I.touchPerform([{
    				action: 'press',
    				options: {
      					x: 205,
      					y: 860
   				 	}
				}, {action: 'release'}])
				
					sleep(2000)
					I.type(text, 100)
					I.see(text)
					//I.fillField(landing.elementsAndroid.googleEmailField, text)
					//I.seeInField(landing.elementsAndroid.googleEmailField, text)
				} else {
					I.waitForElement(landing.elementsiOS.googleEmailField, 20);
					I.tap(landing.elementsiOS.googleEmailField)	
					I.fillField(landing.elementsiOS.googleEmailField, text)
					I.seeInField(landing.elementsiOS.googleEmailField, text)
				}
				break
			default:
				I.tap({android: '//*[@content-desc="'+ name + '"]' , ios:'~' +name});
				break
		}
    },
}
