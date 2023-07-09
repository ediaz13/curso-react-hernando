import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en CounterApp", () => {
  const value = 10;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe tener valor inicial 100", () => {
    render(<CounterApp value={ 100 } />);
    expect(screen.getByText( 100 )).toBeTruthy();
  });

  test("Debe incrementar con el boton +1", () => {
    render(<CounterApp value={ 10 } />);
    fireEvent.click( screen.getByText('+1') )
    expect( screen.getByText('11') ).toBeTruthy();
    
  });

  test("Debe dismionuir con el boton -1", () => {
    render(<CounterApp value={ 10 } />);
    fireEvent.click( screen.getByText('-1') );
    expect( screen.getByText('9') ).toBeTruthy();
    
  });

  test("Debe funcionar reset", () => {
    render(<CounterApp value={ 10 } />);
    fireEvent.click( screen.getByText('-1') );
    fireEvent.click( screen.getByText('-1') );
    fireEvent.click( screen.getByText('-1') );
    //fireEvent.click( screen.getByText('Reset') );

    fireEvent.click( screen.getByRole('button', {name: 'btn-reset' }) );
    expect( screen.getByText('10') ).toBeTruthy();
    
  });

});
