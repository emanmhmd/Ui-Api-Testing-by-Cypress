
/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

import {login} from "./login"
const loginobject = new login();


describe('Test Login', function() {

  it('Login with valid coordinates', ()=> {
    loginobject.openurl();
    loginobject.enterusername();
    loginobject.enterpassword();
    loginobject.clicklogin();
    loginobject.validateapilogin();

  })
  it('Login with invalidvalid coordinates', ()=> {
    loginobject.openurl();
    loginobject.enterusername();
    loginobject.enterwrongpassword();
    loginobject.clicklogin();
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible').and('contain', 'Invalid credentials');

  })

 

})

