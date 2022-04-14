export default function sortObj() {
  const listHeroesSort = [];
  const newListHeroes = [];
  const listHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const mapArray = listHeroes.map((item) => item.health);

  for (let i = 0; i < 3; i += 1) {
    const newArr = Math.max.apply(null, mapArray);
    listHeroesSort.push(newArr);
    mapArray.splice(mapArray.indexOf(newArr), 1);
  }

  for (const item of listHeroesSort) {
    listHeroes.forEach((elem) => {
      if (elem.health === item) {
        newListHeroes.push(elem);
      }
    });
  }

  return newListHeroes;
}
