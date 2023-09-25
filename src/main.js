import { calcularDamageByEnergy, example, filterData, sortDataByName ,} from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, renderItems, data);
// pagina principal
//const formNombre = document.getElementById('formNombre');
const contenedorCards = document.querySelector('.contenedor-cards');
const imagen = document.getElementById('imagen');
const footer = document.querySelector('footer');
const contenedorTarjetas = document.getElementById("root1");
const prueba = renderItems(data.pokemon);
contenedorTarjetas.replaceWith(prueba);
const root = document.querySelector("#root");
const selectFilter = document.querySelector('.filtro');
const selectSort = document.querySelector('.ordenletra');
const selectData = document.querySelector('.calculoestadistico');


let pruebaarray =[]
//evento con filtrado
selectFilter.addEventListener('change',() =>{
const resultFilter =filterData(data,'type',selectFilter.value)
console.log(resultFilter);
pruebaarray = resultFilter
root.innerHTML = "";
root.appendChild(renderItems(resultFilter))
})

//evento por alfabetico
let calculo=[]
selectSort.addEventListener('change', () => {
  const sortOrder = selectSort.value;
  const validate = !pruebaarray.length > 0 ? data.pokemon : pruebaarray 
  console.log({validate})
  const resultOrden = sortDataByName(validate, sortOrder);
  root.innerHTML = "";
  root.appendChild(renderItems(resultOrden));
});

// Evento para cálculos estadísticos
selectData.addEventListener('change', () => {
  const selectedOption = selectData.value;
  if (selectedOption === "") {
    console.log("Por favor, selecciona una opción válida.");
    return;
  }
  const datosPokemon = data.pokemon ;
  if (!datosPokemon || datosPokemon.length === 0) {
    console.log("No hay datos de Pokémon disponibles para realizar cálculos.");
    return;
  }
  const { datosCalculados } = calcularDamageByEnergy(datosPokemon, selectedOption);
  console.log("Datos Calculados:", datosCalculados);
  return;
});
// selectData.addEventListener('change', () => {
//  const selectedOption = selectData.value;
//  const validar = !calculo.length > 0 ? data.pokemon : calculo
// console.log({validar})
//   const datanew = calcularDamageByEnergy(validar, selectedOption);
//   root.innerHTML = "";
// root.appendChild(renderItems(datanew));
// });

contenedorTarjetas.style.display = 'none'










/*  ocultar el form imagen y footer*/
// formNombre.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const nombreUsuario = document.getElementById('nombre').value;
//   if (!nombreUsuario) {
//     alert('Please enter your name.');
//     return;
//   }
//   localStorage.setItem('nombreUsuario', nombreUsuario);
//   formNombre.style.display = 'none';
//   contenedorCards.style.display = 'block';
//   imagen.style.display = 'none'; 
//   footer.style.display = 'none'; 
//   contenedorTarjetas.style.display = 'none'
  
//  /* mostrarCards();*/
// });


/*formNombre.addEventListener('submit', handleFormSubmit);*/
    
     

     /*  colocar el nombre y sale mensaje de alerta */
    
   /*ocultar li , ul,imagen */
   /*document.getElementById("inicio").addEventListener("click", function() {
   document.getElementById("root1").style.display = "block";*/
  /* imagen.style.display = 'none';
});*/
