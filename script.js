const div = document.querySelector('.container');

//La interpolación en JavaScript se refiere a la capacidad de combinar valores o expresiones dentro de 
//una cadena de texto. Esto se puede hacer utilizando plantillas de cadenas (template strings) con el uso de la sintaxis de ${}

//ESTE ES SOLO UN EJEMPLO NO ES RECOEMNDABLE UTILIZAR INNER HTML YA QUE EL CODIGO SE VUELVE FACILMENTE EDITABLE Y VULNERABLE

function Tarjetas(juego, nombre, desc) { //escribimos una funcion que recibirá unos parámetros y la utilizaremos como inner html
    return ` 
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${juego}</h5>
    <p class="card-text">${nombre}<br>
    ${desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
}


div.innerHTML = Tarjetas('Juegos', 'God of War', 'Es un juego muy divertido'); //Aqui pasamos los parámetros y ponemos que el inner sea igual a la función
div.innerHTML += Tarjetas('Juegos', 'The Legend of Zelda', 'Un clásico atemporal');
div.innerHTML += Tarjetas('Juegos', 'Red Dead Redemption', 'Una épica del oeste');
div.innerHTML += Tarjetas('Juegos', 'Cyberpunk 2077', 'Un mundo futurista cautivador');
//y por último vamos concatenando las nuevas tarejetas que creemos