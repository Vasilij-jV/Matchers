import sortObj from '../index';

test('two objects with a list of heroes', () => {
  const result = sortObj();
  const listHeroesObj = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(listHeroesObj);
});
