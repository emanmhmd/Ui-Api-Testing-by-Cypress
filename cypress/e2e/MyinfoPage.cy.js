/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

import {myinfo} from "./myinfo"
const myinfoobject = new myinfo()


import { validlogin } from "./login"
describe('Test Upadting data', function() {

    beforeEach(() => {
      validlogin();
    })
    it.skip('Update nickname',()=>{
    
        myinfoobject.updatenickname();
       
    })
    it.only('Update Avatar'), ()=>{
      validlogin();
      //myinfoobject.updateavatar();
      cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
      cy.get('.employee-image').click();
      cy.get('.oxd-file-div > .oxd-icon-button').attachFile(cy.fixture('profile.png'));
      cy.wait(5000);
      cy.get('.oxd-button').click();
    }
  
})
