import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {

  const title = 'Hola soy Mogul'

  test('Debe hacer match con el snapshot', () => {
    const { container } = render( <FirstApp title={ title } /> );
    expect( container ).toMatchSnapshot();

  });
  
  test('Debe mostrar el mensaje "Hola soy Mogul"', () => {
    render( <FirstApp title={ title } /> );
    expect( screen.getAllByText ).toBeTruthy();

  });

  test('Debe mostrar el mensaje "Hola soy Mogul"', () => {
    render( <FirstApp title={ title } /> );
    expect( screen.getAllByText ).toBeTruthy();

  });
  
});
