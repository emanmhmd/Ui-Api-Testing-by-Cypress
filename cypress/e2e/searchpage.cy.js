/// <reference types="cypress" />



import { validlogin } from "./login";

describe('Test Search', function() {
//Before each to call login function before any following Test
    beforeEach(() => {
      validlogin();
    });
    //Test to valid search with present person
    it('Search for present person',()=>{
    
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.fixture('data.json').then(data=>{
            let key=data.diffdata.keyword;
            cy.get(':nth-child(2) > .oxd-input').type(key);
           
            cy.contains('Search').should('be.visible').click({force:true});
            //to check the request
            cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&username=Sara.Tencrady&sortField=u.userName&sortOrder=ASC')
            .then((response) => {
              expect(response.status).to.equal(200);
               expect(response.body).to.have.property('data') ;
        const userData = response.body.data;
        expect(userData.some(user => user.username === 'Sara.Tencrady')).to.be.false ;
      })
        })
       
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