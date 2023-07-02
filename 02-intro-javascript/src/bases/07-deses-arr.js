const personajes = ['Goku', 'Vegeta','Trunks'];

const [ goku, trunks ] = personajes;

console.log( trunks );


const userNice = ( valor ) => {
  return [ valor, ()=> { console.log('Hola, Mogul') } ];
}

const [ nombre, setNombre ] = userNice( 'Goku' );

console.log( nombre );

setNombre();