// estas funciones son de ejemplo

export const renderItems = (data) => {
  /*return 'example';*/
  const Tarjetas= document.createElement("ul");
  data.forEach(pokemon => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = pokemon.img;
    li.textContent = `${pokemon.num}  ${pokemon.name}${pokemon.type}`;
    li.appendChild(img);
    Tarjetas.appendChild(li);
  });
  return Tarjetas;
};

