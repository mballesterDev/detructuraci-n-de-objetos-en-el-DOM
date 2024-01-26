const div = document.querySelector('.container');

const peliculas = [
    {
        nombre: 'Titanic',
        año: '2004',
        desc: 'Un barco que naufraga'
    },
    {
        nombre: 'Inception',
        año: '2010',
        desc: 'Un thriller que desafía la mente'
    },
    {
        nombre: 'The Shawshank Redemption',
        año: '1994',
        desc: 'Un relato de esperanza y perseverancia'
    },
    {
        nombre: 'The Godfather',
        año: '1972',
        desc: 'Una historia de poder y familia'
    }
];

const [pelicula1, pelicula2, pelicula3, pelicula4] = peliculas; //lo hemos desctructurado y ahora nos devuelve un objeto individual que podremos llamar como queramos ya que no tenia nombre previo


function Tarjetas(peliculas) { //escribimos una funcion que recibirá unos parámetros y la utilizaremos como inner html
    const {nombre, año, desc} = peliculas
    return ` 
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${año}<br>
    ${desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
}


div.innerHTML = Tarjetas(pelicula1); //Aqui pasamos los parámetros y ponemos que el inner sea igual a la función
div.innerHTML += Tarjetas(pelicula2);
div.innerHTML += Tarjetas(pelicula3);
div.innerHTML += Tarjetas(pelicula4);


