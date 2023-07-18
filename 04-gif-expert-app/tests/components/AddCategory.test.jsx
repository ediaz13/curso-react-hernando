import { render, screen } from '@testing-library/react';
const { AddCategory } = require('../../src/components/AddCategory');


describe('Prueba en <AddCategory />', () => {
    test('Debe de cambiar el valor de la caja de texto.', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );
        screen.debug();
    });

})