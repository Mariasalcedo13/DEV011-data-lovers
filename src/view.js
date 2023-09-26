// estas funciones son de ejemplo
export const renderItems = (data) => {
  /*return 'example';*/
  const Tarjetas = document.createElement("ul");
  data.forEach(pokemon => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const pokenum = document.createElement("pokenum");
    const n = document.createElement("n");
    const t = document.createElement("t");
    const t2 = document.createElement("t2");
    img.src = pokemon.img;
    pokenum.textContent = `${pokemon.num}`
    n.textContent = `${pokemon.name}`
    t.textContent = `${pokemon.type[0]}`
    if (pokemon.type[1]) {
      t2.textContent = `${pokemon.type[1]}`
    }
    li.appendChild(img);
    li.appendChild(pokenum)
    li.appendChild(n)
    li.appendChild(t)
    li.appendChild(t2)
    Tarjetas.appendChild(li);
  });
  return Tarjetas;
};
