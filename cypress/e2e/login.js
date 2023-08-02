//class implementations of login actions
 class login{
      //function to navigate to website url
    openurl(){
        //using fixtures to get data from json file
        cy.fixture('data.json').then((data)=>{
            let websiteurl=data.url;
        cy.visit(websiteurl);
    })
    }
    //function to enter username of account
    enterusername(){
        //using fixtures to get data from json file
        cy.fixture('data.json').then((data)=>{
            let user=data.login.username;
       
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user);
    })
    }
    //function to enter right password
    enterpassword(){
        //using fixtures to get data from json file
        cy.fixture('data.json').then((data)=>{
           let pass=data.login.password;
       
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(pass);
    })
} 
      //function to enter wrong password
    enterwrongpassword(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test');
    }
    //function to click on login button
    clicklogin(){
        cy.get('.oxd-button').click();
    }
    //function to check api of login 
    // validateapilogin(){
    //     cy.request('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate', {
    //   login: {
    //     username: 'Admin',
    //     password: 'admin123'
    //   }
    // }).then((response) => {
    //   expect(response.status).to.equal(200);
    // });
    // }

}
const loginobject = new login() 
//function to login with valid data
export function validlogin(){
    loginobject.openurl();
    loginobject.enterusername();
    loginobject.enterpassword();
    loginobject.clicklogin();
    //loginobject.validateapilogin();
    
}
//function to login with invalid data
export function invalidlogin(){
    loginobject.openurl();
    loginobject.enterusername();
    loginobject.enterwrongpassword();
    loginobject.clicklogin();
     //to check that error message appeared and contains certain text
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible').and('contain', 'Invalid credentials');
}
