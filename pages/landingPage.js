const { I } = inject();

module.exports = {
  // insert your locators and methods here
	elementsiOS: {
		settings: '//XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther'+
		'/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeButton',
		label: '~Kid-Coins',
		motto: '~Motivation, Spaß und mehr',
		logo: '//XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther'+
		'/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeImage[1]',
		signInApple: '~Mit Apple anmelden',
		signInGoogle:'~Mit Google anmelden',
		signInPhone: '~Mit dem Handy anmelden',
		registerEmail: '~Registrieren',
		loginEmail: '~Login',
		googleEmailField: '~E-Mail oder Telefonnummer',
		allowApp: '~This allows the app and website to share information about you.'
	},
	
	elementsAndroid: {
		settings: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout'+
		'/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button',
		label: 'Kid-Coins',
		motto: 'Motivation, Spaß und mehr',
		logo: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout'+
		'/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]',
		signInApple: 'Mit Apple anmelden',
		signInGoogle:'Mit Google anmelden',
		signInPhone: 'Mit dem Handy anmelden',
		registerEmail: 'Registrieren',
		loginEmail: 'Login',
		googleEmailField: 'Forgot email?',
		allowApp:'Sign in',

	},

	seeText(text) {
    	I.waitForElement({android: text, ios: '~' +text}, 10);
    },

	clickOption(name) {
    	I.tap({android: name , ios:'~' +name});
    },
}
