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
    //To update nickname
    it.skip('Update nickname',()=>{
    
        myinfoobject.updatenickname();
       
    })
    //to update avatar
    it('Update Avatar', ()=>{
      myinfoobject.updateavatar();
    })
  
})
