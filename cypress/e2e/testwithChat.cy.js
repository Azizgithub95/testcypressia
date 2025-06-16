describe("Sign Up on demoblaze.com", () => {
  it("should sign up a new user", () => {
    const username = `user${Date.now()}`;
    const password = "azerty123";

    cy.visit("https://demoblaze.com");

    // Ouvre le modal de Sign Up
    cy.get("#signin2").click();

    // Attend que le champ username devienne visible
    cy.get("#sign-username", { timeout: 10000 }).should("be.visible");

    // Remplit le formulaire
    cy.get("#sign-username").type(username);
    cy.get("#sign-password").type(password);

    // Intercepte l'alerte
    cy.on("window:alert", (str) => {
      expect(str).to.match(/Sign up successful|This user already exist/);
    });

    // Clique sur le bouton d'enregistrement
    cy.get('button[onclick="register()"]').click();
  });
});
