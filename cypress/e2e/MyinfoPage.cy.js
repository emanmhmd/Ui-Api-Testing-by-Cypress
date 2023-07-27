/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

import {myinfo} from "./myinfo"
const myinfoobject = new myinfo()


import { validlogin } from "./login"
describe('Test Upadting data', function() {

    beforeEach(() => {
      validlogin();
    })
    it('Update nickname',()=>{
    
        myinfoobject.updatenickname();
       
    })
  
})
