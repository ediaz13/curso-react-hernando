import { fireEvent, render, screen } from '@testing-library/react';
const { AddCategory } = require('../../src/components/AddCategory');


describe('Prueba en <AddCategory />', () => {
    test('Debe de cambiar el valor de la caja de texto.', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target: { value: 'Jamaica' } });

        expect( input.value ).toBe('Jamaica');
        screen.debug();
    });

})