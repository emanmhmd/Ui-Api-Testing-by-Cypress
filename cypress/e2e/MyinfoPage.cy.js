/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

import {myinfo} from "./myinfo"
const myinfoobject = new myinfo()


import { validlogin } from "./login"
describe('Test Upadting data', function() {
//Before each to call login function before any following Test
    beforeEach(() => {
      validlogin();
    })
    //To update nick name
    it('Update nickname',()=>{
    
        myinfoobject.updatenickname();
       
    })
    // to update avatar

    // it('Update Avatar'), ()=>{
    //   validlogin();
    //   //myinfoobject.updateavatar();
    //   cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
    //   cy.get('.employee-image').click();
    //   cy.get('.oxd-file-div > .oxd-icon-button').attachFile(cy.fixture('profile.png'));
    //   cy.wait(5000);
    //   cy.get('.oxd-button').click();
    // }
  
})
