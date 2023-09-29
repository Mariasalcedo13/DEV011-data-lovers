import { filterData,  } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe( filterData, () => {

  it('deberia darnos el tipo de pokemon "posion"' + fakeData + '"', () => {
    //const selectFilter = document.querySelector('#filtro');
    const resultFilter = filterData(fakeData, 'type', 'poison');
    
    // VerificaR que resultFilter contenga solo Pokémon de tipo "poison"
    resultFilter.forEach(pokemon => {
      expect(pokemon.type).toBe('poison');
    });
  });
})

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
