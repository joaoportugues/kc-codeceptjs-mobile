const { I } = inject();
const landing = require('../pages/landingPage');


module.exports = {
  // insert your locators and methods here
	seeText(text) {

		switch (text.toLowerCase()) {
			case 'logo': 
				I.tap({android: landing.elementsAndroid.logo , ios: landing.elementsiOS.logo})
				break
			default:
    			I.waitForElement({android: text, ios: '~' +text}, 20);
				break
		}
    },

	clickOption(name) {		
		switch (name.toLowerCase()) {
			case 'settings': 
				I.tap({android: landing.elementsAndroid.settings , ios: landing.elementsiOS.settings})
				break
			default:
				I.tap({android: name , ios:'~' +name});
				break
		}
    },
}
