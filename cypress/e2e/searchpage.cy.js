/// <reference types="cypress" />



import {login} from "./login"
const loginobject = new login() 


function validlogin(){
    loginobject.openurl();
    loginobject.enterusername();
    loginobject.enterpassword();
    loginobject.clicklogin();
    loginobject.validateapilogin();
    
}
describe('Test Search', function() {

    beforeEach(() => {
      validlogin();
    });
    it('Search for present person',()=>{
    
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.fixture('data.json').then(data=>{
            let key=data.diffdata.keyword;
            cy.get(':nth-child(2) > .oxd-input').type(key);
           
            cy.contains('Search').should('be.visible').click({force:true});
            
            cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&username=Sara.Tencrady&sortField=u.userName&sortOrder=ASC')
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('data') ;
        const userData = response.body.data;
        expect(userData.some(user => user.username === 'Sara.Tencrady')).to.be.false ;
      })
        })
       
    });
    it('Search for non exsiting person',()=>{
    
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.get(':nth-child(2) > .oxd-input').type('notpresent');
           
        cy.contains('Search').should('be.visible').click({force:true});
       //the following lines both are valid individually
        cy.get('.oxd-toast').should('be.visible').and
        cy.contains('No Records Found').should('be.visible');
       
    })

  
})