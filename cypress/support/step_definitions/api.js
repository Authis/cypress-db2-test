import { Given } from "cypress-cucumber-preprocessor/steps";
 
let response = '';

Given(`To connect IBM_db2`, () => {
    var connString = "DATABASE=TESTDB;HOSTNAME=127.0.0.1;UID=username;PWD=password;PORT=50443;PROTOCOL=TCPIP";

  
    cy.task('connectDB2',connString).then((result) => {
           response = result;
      })
})

Then(`DB2 Connection should give success`, () => {
    cy.log("DB2 Connection  : "+response)
     
 })

