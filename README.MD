# Cypress demo framework

[![CircleCI](https://circleci.com/gh/samarr/turnkey-cypress/tree/master.svg?style=svg)](https://circleci.com/gh/samarr/turnkey-cypress/tree/master)
Test app url: http://blazedemo.com/
Running the test in local:
```sh
    $ Install cypress: npm install cypress --save-dev
    $ Checkout the code in same folder.
    $ Run following command.
    $ ./node_modules/.bin/cypress run --env testenv=qa --spec 'cypress/integration/e2e-tests/*'
   ```

### Running via docker and npm:
-  Run in headless mode
```sh
    $ npm run e2e:qa-headless
 ```
