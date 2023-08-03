/// <reference types="cypress" />
Cypress.config('defaultCommandTimeout', 10000);
Cypress.on('uncaught:exception', () => false); 
import { validlogin } from "./login";

describe('Test Search', function() {
//Before each to call login function before any following Test
    beforeEach(() => {
      validlogin();
    });
    //Test to valid search with present person
    it('Search for present person', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.fixture('data.json').then(data => {
          let key = data.diffdata.keyword;
          cy.get(':nth-child(2) > .oxd-input').type(key);
      
          cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&username=Sara.Tencrady&sortField=u.userName&sortOrder=ASC').as('getRequest');
          // Trigger the action that sends the GET request 
          cy.contains('Search').should('be.visible').click({ force: true });
            // Wait for the request to be intercepted
            cy.wait('@getRequest').then(interception => {
                // Assert on the status code of the intercepted response
                expect(interception.response.statusCode).to.equal(200);
                // Iterate through the 'data' array and check for 'username' value
                const data = interception.response.body.data;
                const saraFound = data.some(item => item.username === 'Sara.Tencrady');
                // Assert that 'Sara.Tencrady' is found in the 'data' array 
                expect(saraFound).to.be.false;
            });
        });
      });
      

    //Test to valid search with non exsiting person
    it('Search for non exsiting person',()=>{
    
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.get(':nth-child(2) > .oxd-input').type('notpresent');
           
        cy.contains('Search').should('be.visible').click({force:true});
       //the following lines both are valid individually
        cy.get('.oxd-toast').should('be.visible').and
        cy.contains('No Records Found').should('be.visible');
       
    })

  
})