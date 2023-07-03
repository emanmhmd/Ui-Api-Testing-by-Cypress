
export class login{
    
    openurl(){
        cy.fixture('data.json').then((data)=>{
            let websiteurl=data.url;
        cy.visit(websiteurl);
    })
    }
    enterusername(){
        cy.fixture('data.json').then((data)=>{
            let user=data.login.username;
       
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user);
    })
    }
    enterpassword(){
        cy.fixture('data.json').then((data)=>{
           let pass=data.login.password;
       
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(pass);
    })
} 
    enterwrongpassword(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test');
    }
    clicklogin(){
        cy.get('.oxd-button').click();
    }
    validateapilogin(){
        cy.request('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate', {
      login: {
        username: 'Admin',
        password: 'admin123'
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
    }

}

