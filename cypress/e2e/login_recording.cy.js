describe("tests magiques", () => {
  it("sign_up", function () {
    cy.visit("https://demoblaze.com/");
    cy.get("#signin2").click();
    cy.get("#sign-username").clear("H");
    cy.get("#sign-username").type("Hakimouche1");
    cy.get("#sign-password").clear("A");
    cy.get("#sign-password").type("Assyatou");
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it.only("login_test", function () {
    cy.visit("https://demoblaze.com/");
    cy.get("#login2").click();
    cy.get("#loginusername").clear("H");
    cy.get("#loginusername").type("Hakimouche1");
    cy.get("#loginpassword").clear("A");
    cy.get("#loginpassword").type("Assyatou");
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.get("#nameofuser").click();
    cy.get("#nameofuser").should("have.text", "Welcome Hakimouche1");
  });
});
