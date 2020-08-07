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
		platform: 'Android',
		app : properties.browserStack.app,
		host: "hub-cloud.browserstack.com",
		user: properties.browserStack.user,
    	key: properties.browserStack.key,
    	port: 4444,
    	capabilities : {
			realMobile : true,
	  		'build' : 'Node Android',
			"os_version" : "9.0",
			"device" : "Google Pixel 3",
			"app" : properties.browserStack.app,
			"project" : "Login From",
			"name" : "Login Test",
			"browserstack.appium_version" : "1.17.0",
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