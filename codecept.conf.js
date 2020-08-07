exports.config = {
  output: './output',
  helpers: {

//iOS
    Appium: {
	  app: 'de.kid-coins.development',
      platform: 'iOS',
      desiredCapabilities: {
        platformName: 'iOS',
        deviceName: 'iPhone SE (2nd generation)',
        platformVersion: '13.5',
        automationName: 'XCUITest'
      }	
    },

//Android
    /*Appium: {
      platform: 'Android',
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'emulator-5554',
        platformVersion: '11',
        automationName: 'Appium',
		appPackage: 'de.kidcoins.development',
		appActivity: 'de.kidcoins.kidcoins.MainActivity',
      }
    }*/
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