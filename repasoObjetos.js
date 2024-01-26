let persona = {
    edad :22,
    nombre : 'manel',
    trabajo : {
        puesto : 'jefe',
        sitio :'Sagunto'
    }
}

console.log(persona.trabajo.puesto);

function Futbolista(altura, edad, posicion){
    this.altura = altura;
    this.posicion = posicion;
    this.edad = edad;
}

let futbolista01 = new Futbolista(171, 22, 'DC');

console.log(futbolista01);