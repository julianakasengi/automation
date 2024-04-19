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
cy.get('.btn ').click();
cy.log(cy.get('.btn').should("be.visible"));
cy.visit("https://nextgen.ngi-test.iner.gy/#/tam/requests");

cy.get('.btn > .button-general').click({force: true});

 cy.contains("Single Request").click()
 //cy.get('.jss28 > :nth-child(1)').click()
//cy.contains("Single Request").click()
//cy.get('.jss28 > :nth-child(1)').click();
//select TAM type Customer Ledger adjustment

cy.get('.ant-select-selection-item[title = "Installation payment processing failure"]').should("be.visible").click({force: true})

cy.get("[title='Customer Ledger adjustment']").click();
cy.get('#newTAM-modal_transactionMode').click();

//select TAM type Standard Payment Type
 cy.get("div[title='Stove Balance Payment Type'] div[class='ant-select-item-option-content']").click();
//cy.get("div[title='Standard Payment Type'] div[class='ant-select-item-option-content']").click();
//cy.wait(1000)
//Set intercept for API after account number is entered.
cy.intercept('GET', '/customersmanagement/api/v1/customers/9063051').as('checkTransaction');
cy.get('#newTAM-modal_customerId').click().type("9063051");


// Wait for the intercepted request to complete
cy.wait('@checkTransaction').then((intercept) => {
  // Access the intercepted request and response data
  const request = intercept.request;
  const response = intercept.response;
//console. log( response.body.result.id)
let customerID = response.body.result.id;
//Assert if the correct account details were fetched
expect(customerID).to.equal('9063051')
//set intercept for when transaction ID is entered
cy.intercept("GET","/paymentsgateway/api/v1/transaction/TAMAUTOMATION4").as("transactionInfo");

//Add transaction ID
cy.get("#newTAM-modal_transactionId").type("TAMAUTOMATION4");

cy.wait("@transactionInfo").then((intercept)=>{
   console.log(intercept.response.body)

})
cy.get(':nth-child(2) > .button-general').click();
//cy.Xpath("/html//div[@id='layout-wrapper']/div[@class='main-content']/div[@class='page-content']/div[@class='container-fluid']/div[@class='col-lg-12']/div[@class='ant-table-wrapper jss6']//table/tbody/tr[1]/td[11]/div/img[@alt='action-icon']").click()
});
})
})