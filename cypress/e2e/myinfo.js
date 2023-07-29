export class myinfo {
  //Function to update nickname of user
    updatenickname() {
      cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
      cy.fixture('data.json').then(data => {
        let nick = data.diffdata.nickname
        cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(nick);
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible').click({force:true});
        cy.request('PUT', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/7/personal-details', {"lastName":"Collings","firstName":"Paul","middleName":"","employeeId":"0024","otherId":"","drivingLicenseNo":"","drivingLicenseExpiredDate":null,"gender":1,"maritalStatus":"Married","birthday":"1975-10-15","nationalityId":4,"ssnNumber":"","sinNumber":"","nickname":nick,"smoker":false,"militaryService":null})
        .then((response) => {
          expect(response.status).to.equal(200);
        });
      });
      
    }
    //function to update avatar
     updateavatar(){
     cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
      cy.get('.employee-image').click();
      cy.get('.oxd-file-div > .oxd-icon-button').attachFile('images.png');
      cy.wait(5000);
      cy.get('.oxd-button').click();

     }
   


  }
  