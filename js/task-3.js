console.log("↓ Task - 3");

// Задача 3. Конструктор рядків

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
     this.#value = str + this.#value;
 }

  padEnd(str) {
     this.#value = this.#value + str;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }


}

const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."

builder.padStart("^");

console.log(builder.getValue()); // "^."

builder.padEnd("^");

console.log(builder.getValue()); // "^.^"

builder.padBoth("=");

console.log(builder.getValue()); // "=^.^="


console.log("↑");