import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, renderItems, data);
// pagina principal
const formNombre = document.getElementById('formNombre');
const contenedorCards = document.querySelector('.contenedor-cards');
const imagen = document.getElementById('imagen');
const footer = document.querySelector('footer');
const pokemonCadaCards = document.querySelector('root li');



/*  ocultar el form imagen y footer*/
formNombre.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombreUsuario = document.getElementById('nombre').value;
  if (!nombreUsuario) {
    alert('Please enter your name.');
    return;
  }
  localStorage.setItem('nombreUsuario', nombreUsuario);
  formNombre.style.display = 'none';
  contenedorCards.style.display = 'block';
  imagen.style.display = 'none'; 
  footer.style.display = 'none'; 
  mostrarCards();
});
formNombre.addEventListener('submit', handleFormSubmit);
    
     

     /*  colocar el nombre y sale mensaje de alerta */
    
   /*ocultar li , ul,imagen */
   document.getElementById("inicio").addEventListener("click", function() {
   document.getElementById("root").style.display = "block";
   imagen.style.display = 'none';
});


/*traer el pokemon*/
function crearCards() {
  fetch("pokemon.json")
    .then(respuesta => respuesta.json())
    .then(pokemon => {
      const pokemonCadaCards = document.getElementById("root");
      
      pokemon.forEach(pokemon => {
        const poke = document.createElement("tr");
        poke.innerHTML = `
          <td>${pokemon.num}</td>
          <td>${pokemon.name}</td>
          <td>${pokemon.type.join(", ")}</td>
        `;
        
        pokemonCadaCards.appendChild(poke);
      });
    });
}

crearCards();

