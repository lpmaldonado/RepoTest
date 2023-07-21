import Header from "../pages/headerPage";
import SearchResultsPage from "../pages/searchResultsPage";

describe('Test del buscador del encabezado', () => {
    it('Validar que se muestra el resultado correspondiente a "Authentication"', () => {
      // Paso 1: Acceder al buscador en el encabezado
      const header = new Header();
      header.search('Authentication');
  
      // Paso 2: Verificar que se muestre el resultado correspondiente a "Authentication"
      const searchResultsPage = new SearchResultsPage();
      searchResultsPage.assertResultExists('Authentication');
    });
});
  