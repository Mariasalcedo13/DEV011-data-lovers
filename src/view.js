// estas funciones son de ejemplo

export const renderItems = (data) => {
  /*return 'example';*/
  const Tarjetas= document.createElement("ul");
  data.forEach(pokemon => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const n = document.createElement("n");
    const t = document.createElement ("t");
    img.src = pokemon.img;
    p.textContent = `${pokemon.num}`
    n.textContent = `${pokemon.name}`
    t.textContent = `${pokemon.type}`
    li.appendChild(img);
    li.appendChild(p)
    li.appendChild(n)
    li.appendChild(t)
    Tarjetas.appendChild(li);
  });
  return Tarjetas;
};
