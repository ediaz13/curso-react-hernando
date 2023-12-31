const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

const locve =  ({ clave, nombre, edad, rango = 'Captain'}) => {

  return {
    nombreClave: clave,
    anios:edad,
    latlng: {
      lat:14.1232,
      lng: -12.3232
    }
  }
}

const { nombreClave, anios, latlng:{ lat, lng} } = locve( persona );

console.log( nombreClave, anios );
console.log( lat, lng);