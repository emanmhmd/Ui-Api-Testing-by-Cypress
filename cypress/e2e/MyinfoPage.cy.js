/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

import {myinfo} from "./myinfo"
const myinfoobject = new myinfo()
import {login} from "./login"
const loginobject = new login() 


function validlogin(){
    loginobject.openurl();
    loginobject.enterusername();
    loginobject.enterpassword();
    loginobject.clicklogin();
    loginobject.validateapilogin();
    
}
describe('Test Upadting data', function() {

    beforeEach(() => {
      validlogin();
    })
    it('Update nickname',()=>{
    
        myinfoobject.updatenickname();
       
    })
  
})
