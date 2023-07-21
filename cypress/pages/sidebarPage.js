class Sidebar {
    containsAPIReference() {
      // Hacer clic en el enlace "API Reference"
      cy.contains('API REFERENCE');
    }
    clickAPOPs() {
      cy.get('#Explorer > :nth-child(1) > .Sidebar1t2G1ZJq-vU1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > .Sidebar-link_parent3OBrzjAJRSfq').should('be.visible').click();
  }
    clickJumpTo() {
      cy.get('.Main-QuickNav-container1OiLvjSDusO6 > .QuickNav1q-OoMjiX_Yr').click();
  }

    search(searchTerm) {
      cy.get('#QuickNav-modal-root > .Modal2vJ55oY4GB2e > .Modal-FocusLock10lbWU4IwTQD > .Input').type(searchTerm);
  }
  
}
  export default Sidebar;
  