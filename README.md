# Codeceptjs Testing Framework
> Simple tests in codeceptj using BDD

```sh
Make sure to have the simulators required to run tests installed.
Built on Mac as iOS require Xcode to run.


Mac version:
sw_vers -productVersion
10.15.6

npm -v
6.14.4

node -v
v12.18.0

java -version
java version "1.8.0_251"
Java(TM) SE Runtime Environment (build 1.8.0_251-b08)
Java HotSpot(TM) 64-Bit Server VM (build 25.251-b08, mixed mode)
```

Framework specific
```sh
appium -v
1.17.1

appium-doctor --version
1.15.3

/usr/bin/xcodebuild -version
Xcode 11.5
Build version 11E608c

Resolve all dependencies:

appium-doctor
info AppiumDoctor Appium Doctor v.1.15.3
info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: /usr/local/bin/node
info AppiumDoctor  ✔ Node version is 12.18.2
info AppiumDoctor  ✔ Xcode is installed at: /Applications/Xcode.app/Contents/Developer
info AppiumDoctor  ✔ Xcode Command Line Tools are installed in: /Applications/Xcode.app/Contents/Developer
info AppiumDoctor  ✔ DevToolsSecurity is enabled.
info AppiumDoctor  ✔ The Authorization DB is set up properly.
info AppiumDoctor  ✔ Carthage was found at: /usr/local/bin/carthage. Installed version is: 0.35.0
info AppiumDoctor  ✔ HOME is set to: /Users/player1
info AppiumDoctor  ✔ ANDROID_HOME is set to: /Users/player1/Library/Android/sdk/
info AppiumDoctor  ✔ JAVA_HOME is set to: /Library/Java/JavaVirtualMachines/jdk-14.0.1.jdk/Contents/Home
info AppiumDoctor    Checking adb, android, emulator
info AppiumDoctor      'adb' is in /Users/player1/Library/Android/sdk/platform-tools/adb
info AppiumDoctor      'android' is in /Users/player1/Library/Android/sdk/tools/android
info AppiumDoctor      'emulator' is in /Users/player1/Library/Android/sdk/emulator/emulator
info AppiumDoctor  ✔ adb, android, emulator exist: /Users/player1/Library/Android/sdk/

```

## Installation

OS X, Linux or Windows with npm:

clone this project and from the terminal and navigate to folder
```sh
git clone https://github.com/joaoportugues/kc-codeceptjs-web
cd kc-codeceptjs-web
```

Codeceptjs

```sh
npm install codeceptjs webdriverio@6.3.5 @wdio/selenium-standalone-service --save

```

Visual testing

```sh
npm install codeceptjs-resemblehelper --save
```

Reports

```sh
npm install -g allure-commandline --save
```

## Usage example

To run:
from root folder of the project (--steps --features --debug --verbose are available for different levels of logging):
```sh
npx codeceptjs run
```
or
```sh
npx codeceptjs run --debug
```
Use different configs with -c (supports browserStack)
```sh
npx codeceptjs run -c codecept.config-firefox.js
```

and to get the testing reports
```sh
allure serve reports/2020-8-4 (or any other folder available)
```

You can use tags as well:
```sh
npx codeceptjs run --grep "@runThis"
```

## Detailed project creation and helper tools

```sh
mkdir your_dir_name
cd your_dir_name
```

```sh
npx codeceptjs init
```

Choose Helper Appium - all rest default

Configure app undertest in the file condecept.conf.js

```sh
npx codeceptjs gherkin:init
```

Write Gherkin scenarios in features/your_feature.feature

And generate the respective steps using from the project root folder:

```sh
npx codeceptjs gherkin:snippets
```

Generate sample page object file
```sh
npx codeceptjs gpo
```

Happy testing!!!
