describe("Page produit Samsung Galaxy S6", () => {
  it("affiche bien l'image du produit", () => {
    cy.visit("https://demoblaze.com/prod.html?idp_=1");

    // Attendre que le titre apparaisse (preuve que la page est chargée)
    cy.get(".name", { timeout: 30000 }).should("contain", "Samsung galaxy s6");

    // Vérifier que l'image est présente et visible
    cy.get(".active > img")
      .should("be.visible")
      .and(($img) => {
        const src = $img.attr("src");
        expect(src).to.include("galaxy_s6");
      });
  });
});
