const { I } = inject();

module.exports = {
  // insert your locators and methods here
	elements: {
		logo: '//*[@id="dh_logo"]',
	},

	seeText(text) {
    	I.waitForElement({android: text, ios: '~' +text}, 10);
    },

	clickOption(name) {
    	I.tap({android: name , ios:'~' +name});
    },
}
