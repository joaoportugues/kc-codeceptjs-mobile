const { I } = inject();
const landingPage = require('../pages/landingPage');

// Add in your custom step files

Given('I see {string}', (text) => {landingPage.seeText(text)});

Then('I press {string}', (name) => {landingPage.clickOption(name)});
