// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

var testenv = Cypress.env("testenv")
  if(testenv!=null)
    {
      Cypress.config("baseUrl", Cypress.env(testenv+'.url'))
      if(typeof Cypress.config("baseUrl", Cypress.env(testenv+'.url'))=='undefined')
      {
        console.log('Setting default environment to qa as environment passed in argument is invalid')
        testenv = 'qa'
        Cypress.config("baseUrl", Cypress.env(testenv+'.url'))
      }
    }
  else
    {
      testenv = 'qa'
      Cypress.config("baseUrl", Cypress.env(testenv+'.url'))
    }
// Alternatively you can use CommonJS syntax:
// require('./commands')
