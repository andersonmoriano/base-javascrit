import superHeores from  './data/heroes'
const getHeroes = (id) => superHeores.find(item => item.id === id);
console.log(getHeroes(4));

export const filterHeroesByOwners = (owner) => superHeores.filter(hero => hero.id == owner);
console.log(filterHeroesByOwners("Marvel"));