class Header {
    // Método para hacer una búsqueda en el buscador del encabezado
    search(searchTerm) {
      cy.get('.Header-search-placeholder3Vx4OmMPcjAi').type(searchTerm);
    }
  }
  
  export default Header;