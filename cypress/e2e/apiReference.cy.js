import APIReferencePage from '../pages/apiReferencePage';
import Sidebar from '../pages/sidebarPage';
import HomePage from '../pages/homePage';

describe('Test de la sección "API Reference - APOPs"', () => {
  it('Verificar que las subcategorías se puedan abrir y muestren los títulos correspondientes', () => {
    // Paso 1: Acceder a la sección "API Reference - APOPs" en la barra lateral
    const sidebar = new Sidebar();
    const apiReferencePage = new APIReferencePage();
    const homePage = new HomePage();
    sidebar.containsAPIReference();
    sidebar.clickAPOPs();

    // Paso 2: Verificar que existan las subcategorías especificadas: "Get All" y "Get by ID or QR"
    apiReferencePage.assertSubcategoriesExist();

    // Paso 3: Abrir el enlace de cada subcategoría y verificar que se muestre el título correspondiente
    apiReferencePage.clickSubcategoryGetAll();
    homePage.assertTitleExists('Get all');

    apiReferencePage.clickSubcategoryGetByID();
    homePage.assertTitleExists('Get by ID or QR');
  });
});

