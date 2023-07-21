import HomePage from '../pages/homePage';

describe('Test de la página de inicio', () => {
  const homePage = new HomePage();
  
  it('Verificar que se muestre un título, subtítulo y descripción', () => {
    // Paso 1: Verificar que exista un título, subtítulo y descripción en la Home Page
    homePage.assertTitleExists('Welcome');
    homePage.assertSubtitleExists();
    homePage.assertDescriptionExists();
  });
});
