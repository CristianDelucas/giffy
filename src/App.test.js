import { render, screen } from '@testing-library/react';
import App from './App';

//test async cuando se espera que no este renderizado nada más cargar el componente
test('renders learn react link', async () => {
  const {findByText} = render(<App />);
  const linkElement = await screen.findByText(/Última búsqueda/i);
  expect(linkElement).toBeInTheDocument();
});
