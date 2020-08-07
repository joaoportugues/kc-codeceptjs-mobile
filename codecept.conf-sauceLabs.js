const properties = require('./resources/properties.json')

exports.config = {
  output: './output',
  helpers: {

//iOS
    /*Appium: {
	  app: 'de.kid-coins.development',
      platform: 'iOS',
      desiredCapabilities: {
        platformName: 'iOS',
        deviceName: 'iPhone SE (2nd generation)',
        platformVersion: '13.5',
        automationName: 'XCUITest'
      }	
    },*/

//Browswer stack
     Appium: {
		platformName: 'Android',
		"app" : properties.sauceLabs.app,
		    host: "ondemand.saucelabs.com",
			user: properties.sauceLabs.user,
    		key: properties.sauceLabs.key,
    		port: 80,
    	capabilities : {
			"platformVersion" : "8.1",
			"deviceName" : "Samsung Galaxy S9 Plus FHD GoogleAPI Emulator",
			"app" : properties.sauceLabs.app,
			"project" : "Login From",
			"name" : "Login Test",
			"appiumVersion" : "1.9.1",
			"automationName" : "Appium",

		} 
	}
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'codeceptjs-ios'
}