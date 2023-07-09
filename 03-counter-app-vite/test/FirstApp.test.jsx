import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe("Pruebas en FirstApp", () => {
  /*
  test("Debe hacer match con el snapshot.", async () => {

    const titulo = 'Hola soy Mogul'
    const { container } = render( <FirstApp title= { titulo }/> );

    expect( container ).toMatchSnapshot();
    
  });
  */
  
    

  test('Debe mostrar el titulo en h1', () => {
    const titulo = 'Hola soy Mogul'
    const { container, getByText, getByTestId } = render( <FirstApp title= { titulo }/> );

    //const h1 = container.querySelector('h1');
    //expect(h1.innerHTML).toContain(titulo);


    expect( getByTestId('test-title').innerHTML ).toContain(titulo);




  });


});


