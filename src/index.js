export default function sortObj() {
  const listHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  listHeroes.sort((a, b) => b.health - a.health);
  return listHeroes;
}
