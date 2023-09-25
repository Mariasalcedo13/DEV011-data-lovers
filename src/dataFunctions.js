// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};

  
 /*filtrado por tipo */
export const filterData = (data, filterBy, value) =>{
  console.log(data.pokemon)
  const filtrado = data.pokemon.filter((element)=>{
    console.log(element[filterBy],value)
    return element[filterBy].includes(value)

  })

  console.log(filtrado)
  return filtrado
  
};

/*filtrado alfabetico*/
export const sortDataByName = (data, sortOrder) => {
 const sortedData = [...data];
console.log({data:sortedData})
  return sortedData.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (sortOrder === 'asc') {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0; 
    } else if (sortOrder === 'desc') {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0; 
    }
  });

  // return sortedData;
};
//filtrado por calculos
export function calcularPromedio(data) {
  return data.map((data) => {
    const ataquepoke = parseInt(data.stats["base-attack"]);
    const defensapoke = parseInt(data.stats["base-defense"]);
    const estaminapoke = parseInt(data.stats["base-stamina"]);

    let dataPromedio = (ataquepoke + defensapoke + estaminapoke) / 3;
    let dataDesviacion = (((ataquepoke - dataPromedio) ** 2 + (defensapoke - dataPromedio) ** 2 + (estaminapoke - dataPromedio) ** 2) / 2) ** (1 / 2);

    data["baseDesviacion"] = dataDesviacion.toFixed(3);
    data["baseProm"] = dataPromedio.toFixed();

    return data;
// hola sopa lo que queremos hacer es tener el promedio y la desviacion estandar de las stats hicimos es
//esto pues tenemos un poco de idea acerca de eso

});
};