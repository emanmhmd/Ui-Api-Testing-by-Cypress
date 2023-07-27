
/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>
import { validlogin } from "./login"
import { invalidlogin } from "./login"

describe('Test Login', function() {

  it('Login with valid coordinates', ()=> {
        validlogin()
  })
  it('Login with invalidvalid coordinates', ()=> {
        invalidlogin()
  })
})

