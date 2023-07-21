import Sidebar from "../pages/sidebarPage";
import SearchResultsPage from "../pages/searchResultsPage";

describe('Test del buscador "Jump To"', () => {
    it('Validar que se muestra el resultado correspondiente "Create transaction"', () => {
      // Paso 1: Acceder al buscador "Jump To" en la barra lateral
      const sidebar = new Sidebar();
      sidebar.clickJumpTo();
      sidebar.search('Create transaction');
  
      // Paso 2: Verificar que se muestre el resultado correspondiente a "Create transaction"
      const searchResultsPage = new SearchResultsPage();
      searchResultsPage.assertResultExistsModal('Create transaction');
    });
  });
  