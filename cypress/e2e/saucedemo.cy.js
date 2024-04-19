describe('Sauce Demo Login', () => {
    it('should log in with valid credentials', () => {
      // Visit the Sauce Demo website
      cy.visit('https://www.saucedemo.com/');
  
      // Type username into the username input field
      cy.get('#user-name').type('standard_user');
  
      // Type password into the password input field
      cy.get('#password').type('secret_sauce');
  
      // Click on the login button
      cy.get('#login-button').click();
    
  
      // Assertions or further actions can be added here
    });
  });
