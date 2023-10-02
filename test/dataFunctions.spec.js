import { filterData, sortDataByName,  } from '../src/dataFunctions.js';
import {  data as fakeData } from './data.js';

console.log(fakeData);


describe('filterData', () => {
  const dataFake = [
    { num: "001", name: "bulbasaur", type: ["grass", "poison"], basePromedio: 119 },
    { num: "002", name: "ivysaur", type: ["grass", "poison"], basePromedio: 149.66666666666666 },
    { num: "003", name: "venusaur", type: ["grass", "poison"], basePromedio: 192.33333333333334 }
  ];

  it('debería filtrar por tipo "grass" y devolver solo los nombres', () => {
    const filterBy = 'type';
    const value = 'grass';

    const resultado = filterData({ pokemon: dataFake }, filterBy, value).map(pokemon => pokemon.name);

    expect(resultado).toEqual(["bulbasaur", "ivysaur", "venusaur"]);
  });

  
});

//p.u alfabetico
describe('sortDataByName', () => {
  const dataFake = [
    { num: "003", name: "venusaur", type: ["grass", "poison"], basePromedio: 192.33333333333334 },
    { num: "001", name: "bulbasaur", type: ["grass", "poison"], basePromedio: 119 },
    { num: "002", name: "ivysaur", type: ["grass", "poison"], basePromedio: 149.66666666666666 },
  ];

  it('debería ordenar de la A a la Z', () => {
    const sortOrder = 'asc';

    const resultado = sortDataByName(dataFake, sortOrder).map(pokemon => pokemon.name);

    expect(resultado).toEqual(["bulbasaur", "ivysaur", "venusaur"]);
  });

  it('debería ordenar de la Z a la A', () => {
    const sortOrder = 'desc';

    const resultado = sortDataByName(dataFake, sortOrder).map(pokemon => pokemon.name);

    expect(resultado).toEqual(["venusaur", "ivysaur", "bulbasaur"]);
  });
});


//p.u calculos


// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
