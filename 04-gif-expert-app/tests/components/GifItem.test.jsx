import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas de <GiftItem /> ', () => {
    
    const title = 'Saitama';
    const url = 'https://one-punchu.com/saitama';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );

        expect( container ).toMatchSnapshot();
    })
});