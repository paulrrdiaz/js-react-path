const firstThree = ["charmander", "squirtle", "bulbasour"];

const pokemons = {
  season1: ["charmander", "squirtle", "bulbasour"],
  season2: ["Chikorita", "Cyndaquil", "Totodile"],
  season3: ["Treecko", "Torchic", "Mudkip"],
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let index = 0;
    
    return {
      next: () => index < keys.length ? 
      {
        done: false,
        value: this[keys[index++]]
      } :
      {
        done: true,
        value: undefined,
      }
    }
  }
};

for (let pokemon of pokemons) {
  console.log(pokemon)
}