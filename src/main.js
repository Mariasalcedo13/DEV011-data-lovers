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
const contenedorTarjetas = document.getElementById("root1");
const prueba = renderItems(data.pokemon)
contenedorTarjetas.replaceWith(prueba)

contenedorTarjetas.style.display = 'none'

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



/*formNombre.addEventListener('submit', handleFormSubmit);*/
    
     

     /*  colocar el nombre y sale mensaje de alerta */
    
   /*ocultar li , ul,imagen */
   document.getElementById("inicio").addEventListener("click", function() {
   document.getElementById("root1").style.display = "block";
   imagen.style.display = 'none';
});



