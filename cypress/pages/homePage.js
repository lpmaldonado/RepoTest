class HomePage {
    // Elementos de Home Page
    
    getTitle() {
      return cy.get('h1');
    }
  
    getSubtitle() {
      return cy.get('[role="doc-subtitle"]');
    }
  
    getDescription() {
      return cy.get('[class="markdown-body"]');
    }
  
    // Acciones de la página
    assertTitleExists(titulo) {
      this.getTitle().should('be.visible').should('contain', titulo); 
    }
  
    assertSubtitleExists() {
      this.getSubtitle().should('exist');
    }
  
    assertDescriptionExists() {
      this.getDescription().should('be.visible').should('contain', 'At Intuitivo we are on a mission');
    }
  }
  
  export default HomePage;