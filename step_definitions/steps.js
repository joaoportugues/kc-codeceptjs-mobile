const { I } = inject();
const main = require('../pages/main');

// Add in your custom step files

Given('I see {string}', (text) => {main.seeText(text)});

Then('I press {string}', (name) => {main.clickOption(name)});
