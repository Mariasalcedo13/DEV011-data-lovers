import { calcularPromedio, filterData, sortDataByName, filtrarPorAtaqueBase, } from '../src/dataFunctions.js';
import {  data as fakeData } from './data.js';

console.log(fakeData);


describe('filterData', () => {
  it('debería filtrar por tipo "grass" y devolver solo los Pokémon del tipo correspondiente', () => {
    const filterBy = 'type';
    const value = 'grass';

    const resultado = filterData({ pokemon: fakeData }, filterBy, value);
    const todosSonDeTipoGrass = resultado.every(pokemon => pokemon.type.includes('grass'));
    expect(todosSonDeTipoGrass).toBe(true);
  });
});

//p.u alfabetico
describe('sortDataByName', () => {
  it('debería ordenar de la A a la Z', () => {
    const sortOrder = 'asc';

    const resultado = sortDataByName(fakeData, sortOrder).map(pokemon => pokemon.name);

    expect(resultado).toEqual(["bulbasaur", "ivysaur", "venusaur"]);
  });

  it('debería ordenar de la Z a la A', () => {
    const sortOrder = 'desc';

    const resultado = sortDataByName(fakeData, sortOrder).map(pokemon => pokemon.name);

    expect(resultado).toEqual(["venusaur", "ivysaur", "bulbasaur"]);
  });
});

//p.u calculos
describe('calcularPromedio', () => {
  it('debería ser una función', () => {
    expect(typeof calcularPromedio).toBe('function');
  });

  it('debería calcular el promedio de menor correctamente', () => {
    const orden = 'Menor';

    const resultadoMenor = calcularPromedio(fakeData, orden);

    const resultadoEsperadoMenor = [
      {
        num: "001",
        name: "bulbasaur",
        type: ["grass", "poison"],
        stats: { "base-attack": 118, "base-defense": 111, "base-stamina": 128 },
        basePromedio: 119
      },
      {
        num: "002",
        name: "ivysaur",
        type: ["grass", "poison"],
        stats: { "base-attack": 151, "base-defense": 143, "base-stamina": 155 },
        basePromedio: 149.66666666666666
      },
      {
        num: "003",
        name: "venusaur",
        type: ["grass", "poison"],
        stats: { "base-attack": 198, "base-defense": 189, "base-stamina": 190 },
        basePromedio: 192.33333333333334
      }
    ];

    expect(resultadoMenor).toEqual(resultadoEsperadoMenor);
  });

  it('debería calcular el promedio de mayor correctamente', () => {
    const orden = 'Mayor';

    const resultadoMayor = calcularPromedio(fakeData, orden);

    const resultadoEsperadoMayor = [
      {
        num: "003",
        name: "venusaur",
        type: ["grass", "poison"],
        stats: { "base-attack": 198, "base-defense": 189, "base-stamina": 190 },
        basePromedio: 192.33333333333334
      },
      {
        num: "002",
        name: "ivysaur",
        type: ["grass", "poison"],
        stats: { "base-attack": 151, "base-defense": 143, "base-stamina": 155 },
        basePromedio: 149.66666666666666
      },
      {
        num: "001",
        name: "bulbasaur",
        type: ["grass", "poison"],
        stats: { "base-attack": 118, "base-defense": 111, "base-stamina": 128 },
        basePromedio: 119
      }
    ];

    expect(resultadoMayor).toEqual(resultadoEsperadoMayor);
  });
});


//P.U base de ataque

describe('filtrarPorAtaqueBase', () => {
  const dataFake = [
    { name: 'bulbasaur', stats: { 'base-attack': '118' } },
    { name: 'ivysaur', stats: { 'base-attack': '151' } },
    { name: 'venusaur', stats: { 'base-attack': '198' } },
  ];

  it('debería filtrar Pokémon con ataque base mayor que 100', () => {
    const resultado = filtrarPorAtaqueBase(dataFake, 100);

    expect(resultado).toEqual([
      { name: 'bulbasaur', stats: { 'base-attack': '118' } },
      { name: 'ivysaur', stats: { 'base-attack': '151' } },
      { name: 'venusaur', stats: { 'base-attack': '198' } },
    ]);
  });

  it('debería filtrar Pokémon con ataque base mayor que 150', () => {
    const resultado = filtrarPorAtaqueBase(dataFake, 150);

    expect(resultado).toEqual([
      { name: 'ivysaur', stats: { 'base-attack': '151' } },
      { name: 'venusaur', stats: { 'base-attack': '198' } },
    ]);
  });

  it('debería filtrar Pokémon con ataque base mayor que 200', () => {
    const resultado = filtrarPorAtaqueBase(dataFake, 200);

    expect(resultado).toEqual([]);
  });
});
  