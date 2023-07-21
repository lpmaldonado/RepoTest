class SearchResultsPage {
  
    assertResultExists(result) {
      cy.get('.SearchResults-Result3TWcEjpDrkd5').contains(result).should('be.visible');
    }

    assertResultExistsModal(result) {
      cy.contains(result).should('exist');
    }
  }
  
  export default SearchResultsPage;