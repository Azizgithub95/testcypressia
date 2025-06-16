describe("suite test recording", () => {
  it("test run video", () => {
    cy.visit("https://demoblaze.com/");
    cy.get("[onclick=\"byCat('notebook')\"]").click();
    cy.get(
      ":nth-child(2) > .card > .card-block > .card-title > .hrefch"
    ).click();
    cy.get(".col-sm-12 > .btn").click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#cartur").click();
    cy.get(".col-lg-1 > .btn").click();
    cy.get("#name").clear("Azizou");
    cy.get("#name").type("Azizou");
    cy.get("#country").clear("f");
    cy.get("#country").type("french");
    cy.get("#city").clear("p");
    cy.get("#city").type("paris");
    cy.get("#card").clear("1");
    cy.get("#card").type("1234123412341234");
    cy.get("#month").clear("A");
    cy.get("#month").type("APRIL");
    cy.get("#month").click();
    cy.get("#year").clear("2");
    cy.get("#year").type("2029");
    cy.get(
      "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.get(".sweet-alert > h2").click();
    cy.get(".confirm").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it.only("formulaire de contact", function () {
    cy.visit("https://demoblaze.com");

    // Clique sur le bouton "Contact" dans la navbar
    cy.get(":nth-child(2) > .nav-link").click();

    // Attendre que la modale soit visible avant d’interagir
    cy.get("#exampleModal")
      .should("be.visible")
      .within(() => {
        // Email
        cy.get("#recipient-email")
          .should("be.visible")
          .clear()
          .type("aziz.aidel@hotmail.fr", { delay: 100 });

        // Nom
        cy.get("#recipient-name")
          .should("be.visible")
          .clear()
          .type("Azizou", { delay: 100 });

        // Message
        cy.get("#message-text")
          .should("be.visible")
          .click()
          .type("Ceci est un message de test", { delay: 100 });

        // Bouton d'envoi
        cy.get(".modal-footer > .btn-primary").click();
      });
  });
});
