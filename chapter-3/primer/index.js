class Product {
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

class TaxedProduct extends Product {
  constructor(name, price, taxRate = 1.2) {
    super(name, price);
    this.taxRate = taxRate;
  }

  getPriceIncTax() {
    return Number(this.price) * this.taxRate;
  }

  toString() {
    let chainResult = super.toString();
    return `${chainResult}, Tax: ${this.#getDetail()}`;
  }

  static process(...products) {
    products.forEach((p) => console.log(p.toString()));
  }

  #getDetail() {
    return `Tax: ${this.getPriceIncTax()}`;
  }
}

// function createProductIterator() {
//   const hat = new Product("Hat", 100);
//   const boots = new Product("Boots", 100);
//   const umbrella = new Product("Umbrella", 23);

//   let lastVal;

//   return {
//     next() {
//       switch (lastVal) {
//         case undefined:
//           lastVal = hat;
//           return { value: hat, done: false };
//         case hat:
//           lastVal = boots;
//           return { value: boots, done: false };
//         case boots:
//           lastVal = umbrella;
//           return { value: umbrella, done: false };
//         case umbrella:
//           return { value: undefined, done: true };
//       }
//     },
//   };
// }

function* createProductIterator() {
  yield new Product("Hat", 100);
  yield new Product("Boots", 100);
  yield new Product("Umbrella", 23);
}

// let iterator = createProductIterator();
// let result = iterator.next();

// while (!result.done) {
//   console.log(result.value.toString());
//   result = iterator.next();
// }

class GiftPack {
  constructor(name, prod1, prod2, prod3) {
    this.name = name;
    this.prod1 = prod1;
    this.prod2 = prod2;
    this.prod3 = prod3;
  }

  getTotalPrice() {
    return [this.prod1, this.prod2, this.prod3].reduce(
      (total, p) => total + p.price,
      0
    );
  }

  *[Symbol.iterator]() {
    yield this.prod1;
    yield this.prod2;
    yield this.prod3;
  }
}

let winter = new GiftPack(
  "winter",
  new Product("Hat", 100),
  new Product("boots", 80),
  new Product("Gloves", 23)
);

console.log(`Total price: ${winter.getTotalPrice()}`);
[...winter].forEach((p) => console.log(`Product: ${p}`));

let data = new Map();
data.set("hat", new Product("Hat", 100));
data.set("boots", new Product("boots", 80));
[...data.keys()].forEach((key) => console.log(data.get(key).toString()));

class Supplier {
  constructor(name, productids) {
    this.name = name;
    this.productids = productids;
  }
}

let acmeProducts = [new Product("Hat", 100), new Product("Boots", 100)];
let zoomProducts = [new Product("Hat", 100), new Product("Boots", 100)];
let products = new Map();

[...acmeProducts, ...zoomProducts].forEach((p) => products.set(p.id, p));

let suppliers = new Map();
suppliers.set(
  "acme",
  new Supplier(
    "Acme Co",
    acmeProducts.map((p) => p.id)
  )
);
suppliers.set(
  "zom",
  zoomProducts.map((p) => p.id)
);

suppliers
  .get("acme")
  .productids.forEach((id) => console.log(`Name: ${products.get(id).name}`));
