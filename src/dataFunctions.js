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
export function calcularDamageByEnergy(data, selectedOption) {
  console.log(selectedOption, 'ver');
  const filteredData = data.filter((element) => {
    // Aplica parseFloat para convertir las cadenas en números antes de la comparación
    const energy = parseInt(element["energy"]);
    // console.log(typeof energy) 
    const baseDamage = parseInt(element["base-damage"]);
    // console.log(typeof baseDamage)
    return energy !== 0 && baseDamage !== 0;
  });
  console.log('filtrado: ', filteredData);
  const calculatedData = filteredData.reduce((acc, element) => {
    // Aplica parseFloat nuevamente si es necesario para realizar operaciones matemáticas
    const energy = parseInt(element["energy"]);
    const baseDamage = parseInt(element["base-damage"]);
    const damageByEnergy = baseDamage / energy;
    acc.push(damageByEnergy);
    return acc;
  }, []).map((value) => value.toFixed(2));
  if (selectedOption === "Mayor") {
    calculatedData.sort((a, b) => a - b);
  } else if (selectedOption === "Menor") {
    calculatedData.sort((a, b) => b - a);
  }
  return {
    datosCalculados: calculatedData,
  };
}