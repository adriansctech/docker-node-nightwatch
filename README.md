# docker-node-nightwatch

## Simply enviorment ot test using nightwatch with real chrome browser

## This enviorment have exampls based in ecosia.js

### Include all to execute tests and mysql server
Execute ./start.sh script to run, if firts time, docker create image of this enviorment and execute npm install with composer.json automatically, this file install nightwatch and chromedriver. Also copy nightwatch.conf.js in the same place, this file contains the configuration of all that ncessary. After this, install real chrome broser in the system.


## Folders 

### reports 
In this file will be kept the results of the tests, in this moment with png extension, inside folder 'failure' will be keep the bad results.

### tests
In this folder can keep the test to execute

### test_output
In this folder keep the xml of results of asserts and more information of the resulst of the test

To execute tests execute ./bash.sh and execute next command:

./node_modules/.bin/nightwatch tests/ecosia.js