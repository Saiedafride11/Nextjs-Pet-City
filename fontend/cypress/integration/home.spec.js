/// <reference types="cypress" />

context("Home Page", () => {
    beforeEach(_ => cy.visit("http://localhost:3000"));

    it("should find out our home page", () => {
        cy.get("Footer").contains("Get connected with us on social networks:")
    })

    it('should take less than 500ms', function(done){
        this.timeout(4000);
        setTimeout(done, 3000);
      });
})