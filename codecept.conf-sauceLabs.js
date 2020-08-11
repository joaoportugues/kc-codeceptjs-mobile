const properties = require('./resources/properties.json')

exports.config = {
  output: './output',
  helpers: {

//Browswer stack
     Appium: {
		platformName: 'Android',
		"app" : properties.sauceLabs.app,
		 host: properties.sauceLabs.user + ':' + properties.sauceLabs.key + '@ondemand.eu-central-1.saucelabs.com',
     	 path: '/wd/hub',
		 port: 80,
		 user: properties.sauceLabs.user, // credentials
         key: properties.sauceLabs.key, // credentials
    	 capabilities : {
			platformName: 'Android',
			"platformVersion" : "8.1",
			"deviceName" : "Samsung Galaxy S8 Plus WQHD GoogleAPI Emulator",
			"project" : "Login From",
			"name" : "Login Test",
			"appiumVersion" : "1.17.1",
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