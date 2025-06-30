function play(dice) {
  const facets = parseInt(dice.slice(1), 10);
  const randomFacets = Math.floor(Math.random() * facets + 1);
  return randomFacets;
}

console.log(play('d6'));
