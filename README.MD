# Cypress demo framework

Test app url: http://blazedemo.com/
Running the test in local:
    Install cypress: npm install cypress --save-dev
    Checkout the code in same folder.
    Run following command.
    ./node_modules/.bin/cypress run --env testenv=qa --spec 'cypress/integration/e2e-tests/*'

Running via docker and npm:
    npm run e2e:qa-headless (For headless run)
