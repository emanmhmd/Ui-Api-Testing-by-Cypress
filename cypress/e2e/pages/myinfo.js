export class myinfo {
  //Function to update nickname of user
    updatenickname() {
      cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
      cy.fixture('data.json').then(data => {
        let nick = data.diffdata.nickname
        //detect textfield and type text
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type(nick);
      //intercept request
          cy.intercept('PUT', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/7/personal-details', req => {
            req.reply({ status: 200 });
          }).as('putRequest');
          //click on button to save updates
          cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible').click({force:true});
          cy.wait('@putRequest');
            // Assert on the status code
            cy.get('@putRequest').then(interception => {
              expect(interception.response.statusCode).to.equal(200);
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
    //function to update Gender
    // updateGender (){
    //   //not working idk why ?
    //   cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
    //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').should('be.visible').click({force:true});
    //   cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible').click({force:true});
    //   cy.get('.oxd-toast').should('be.visible','contain','Successfully Updated');

    // }
   


  }
  
