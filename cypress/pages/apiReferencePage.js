class APIReferencePage {
    // Método para acceder a la sección "Apops" en la barra lateral
    accessApiReference() {
      cy.contains('APOPs').click();
    }

    assertSubcategoriesExist() {
      cy.contains('Get all').should('exist');
      cy.contains('Get by ID or QR').should('exist');
    }

    clickSubcategoryGetAll() {
      cy.get('.subnav-expanded > .subpages > :nth-child(1) > .Sidebar-link2Dsha-r-GKh2 > .Sidebar-link-textLuTE1ySm4Kqn > span').click();
  }

    clickSubcategoryGetByID() {
      cy.contains('span', 'Get by ID or QR').click();
  }

}

export default APIReferencePage;
  