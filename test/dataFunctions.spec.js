import { filterData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe( filterData, () => {

  it('deberia darnos el tipo de pokemon "posion"' + fakeData + '"', () => {
    const selectFilter = document.querySelector('#filtro');
    filterData (fakeData);
    expect(filtro.innertext).toBe(poison);
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
