import _ from 'lodash'
import util from './util'
describe("Customer Ledger adjustment",()=>{

    it(("Selecting Standard payment type when transaction ID is missing a prefix M "),()=>{
  cy.visit("https://nextgen.ngi-test.iner.gy/"); 
  cy.contains("with").click();
  
  cy.origin("https://ngi-auth-ngi-test.auth.eu-west-1.amazoncognito.com", () => {
  cy.get('.panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > div > .btn').click()
  
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
})
})


