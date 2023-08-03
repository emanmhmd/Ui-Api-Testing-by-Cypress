/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>
import { validlogin } from "./login"
import { invalidlogin } from "./login"

describe('Test Login', function() {
  //To test login with valid coordinates    
  it.only('Login with valid coordinates', ()=> {
        validlogin()
  })
  //To test login with invalid coordinates
  it.skip('Login with invalidvalid coordinates', ()=> {
        invalidlogin()
  })
})

