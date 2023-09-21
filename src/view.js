// estas funciones son de ejemplo
export const renderItems = (data) => {
  /*return 'example';*/
  const Tarjetas = document.createElement("ul");
  const Tarjetas = document.createElement("ul");
  data.forEach(pokemon => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.src = pokemon.img;
    p.textContent = `${pokemon.num}  ${pokemon.name}${pokemon.type}`;
    li.appendChild(img);
    li.appendChild(p)
    Tarjetas.appendChild(li);
  });
  return Tarjetas;
};