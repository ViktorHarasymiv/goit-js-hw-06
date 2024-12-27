console.log("↓ Task - 2");

// Задача 2. Склад

class Storage {

  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
     this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) { this.#items.splice(index, 1); }
    else if (index == -1) {
      return console.log(`Element "${itemToRemove}" not found , return start array !`);
    }
  }

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Baba Jaga");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


console.log("↑");