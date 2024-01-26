//Un tema muy importantq que se me habia olvidado estudiar y es esencual para el manejo del dom

//La destructuración de objetos en JavaScript es una característica que permite extraer múltiples propiedades de un objeto y asignarlas a variables individuales de forma más concisa. Esto facilita el acceso a las propiedades de un objeto y
//puede hacer que el código sea más legible. Por ejemplo:

let persona = {
    nombre : 'federico',
    edad : '21',
    profesion : 'programador'
}

let {nombre, edad, profesion} = persona;

edad = '2'

console.log(persona); //obviamente al ser una variable individual la detructuración no modifica al objeto inicial

const usuario = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
      calle: 'Calle Principal',
      ciudad: 'Ciudad',
      codigoPostal: '12345'
    },
    contactos: {
      email: 'juan@example.com',
      telefono: '123-456-7890'
    }
  };

  const {calle,codigoPostal} = usuario.direccion //si hay un objetos dentro de un objeto simplemente ponemos las dos rutas


  console.log(calle);



  const videojuegos = [ //array de objetos
    { nombreV: 'The Legend of Zelda: Breath of the Wild', lanzamiento: '2017' },
    { nombreV: 'Red Dead Redemption 2', lanzamiento: '2018' },
    { nombreV: 'Cyberpunk 2077', lanzamiento: '2020' }
  ];
  
  const [juego1, juego2, juego3] = videojuegos; // si es un array de objetos se escribe [] y nos devuelve un objeto individualmente
  juego1.nombreV = 'Estoy modifficando el nomnre xq ahora soy un objeto individual'
  
const { nombreV, lanzamiento } = juego1; //se nos crea otro objrto que podemos seguir destructurando        
console.log(nombreV);
console.log(lanzamiento); 
