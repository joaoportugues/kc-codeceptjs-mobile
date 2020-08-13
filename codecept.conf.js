const properties = require('./resources/properties.json')
const allure = codeceptjs.container.plugins('allure');

const fs = require('fs')
const path = require('path')
const directory = 'reports'

var today = new Date();  
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var deviceConfig = "properties.iosConfigs.local.emulator.appium"
//var deviceConfig = "properties.androidConfigs.sauceLabs.GalaxyS8Sim.appium""

var env = deviceConfig.split (".")
console.log(env[1])

var deviceConfig = properties.iosConfigs.local.emulator.appium
//var deviceConfig = properties.androidConfigs.sauceLabs.GalaxyS8Sim.appium

reportsDirectory = './'+ directory + '/' + date + "-" + env[2] + "-" + env[3] + "-" + deviceConfig.capabilities.deviceName

if (!fs.existsSync(reportsDirectory)) {
    fs.mkdirSync(reportsDirectory);
}

allure.environment()

exports.config = {
  output: './output',
  helpers: {
	 Appium: deviceConfig
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
    },
	allure: {
      enabled: true,
      outputDir: reportsDirectory
    },
  },
  tests: './*_test.js',
  name: 'codeceptjs-ios'
}