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
