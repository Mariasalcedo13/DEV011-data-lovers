// estas funciones son de ejemplo

export const renderItems = () => {
  return 'example';
};
// pagina principal
const formNombre = document.getElementById('formNombre');
const contenedorCards = document.querySelector('.contenedor-cards');
const imagen = document.getElementById('imagen');
const footer = document.querySelector('footer');

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
     document.getElementById("formNombre").addEventListener("submit", function(event){
      event.preventDefault();
      let nombre = document.getElementById("nombre").value;
      mostrarAlerta(nombre);
    });
    function mostrarAlerta(nombre) {
      alert(`¡Bienvenido/a, ${nombre}! ¡Comencemos el juego de Pokémon!`);
    }
   /*ocultar li , ul,imagen */
   document.getElementById("inicio").addEventListener("click", function() {
   document.getElementById("root").style.display = "block";
   imagen.style.display = 'none';
});

