import {render, screen, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import Form from './Form';

test('it shows an input and a button', () => {
  // renderizza il componente
  render(<Form />)  
  
  // manipola il componente o trova un elemento all'interno
  const input = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // crea un'assertion: assicurati che il componente stia facendo quello che ci aspettiamo
  expect(input).toHaveLength(1);
  expect(button).toBeInTheDocument();
})

test('it calls handleSubmit at form submit', () => {
  const mock = jest.fn();

  // Renderizza il componente
  render(<Form />);
  const input = screen.getByRole('textbox');
  // simula utente
  user.click(input);
  user.keyboard('studia html');
  // Trova il pulsante
  const button = screen.getByRole('button');
  // Simula il click del pulsante
  button.click();
  // Invia il form
  // screen.logTestingPlaygroundURL();
  expect(mock).toHaveBeenCalled();
  // expect(mock).toHaveBeenCalledWith({name: 'studia html'})
})