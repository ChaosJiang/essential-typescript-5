let names = ["Hat", "Boots", "Gloves"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);
console.log(`First Item: ${names[0]} ${prices[0]}`);

function sumPrice(...numbers) {
  return numbers.reduce(
    (total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val))
  );
}

let totalPrice = sumPrice(...prices);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

let combinedArray = [...names, ...prices];
combinedArray.forEach((element) =>
  console.log(`Combined Array Element: ${element}`)
);

// prices = [100, 120, 50.25];
// let [, ...highest] = prices.sort((a, b) => a - b);
// highest.forEach((price) => console.log(`High price: ${price}`));

let hat = {
  name: "hat",
  _price: 100,
  priceIncTax: 100 * 1.2,

  set price(newPrice) {
    this._price = newPrice;
    this.priceIncTax = this._price * 1.2;
  },

  get price() {
    return this._price;
  },
  writeDetails: () => {
    console.log(`${this.name}: ${this.price} ${this.priceIncTax}`);
  },
};

let boots = {
  name: "Boots",
  price: "100",
  get priceIncTax() {
    return Number(this.price) * 1.2;
  },
};

hat.writeDetails();
hat.price = 120;
hat.writeDetails();

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = "120";
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

let myObject = {
  greeting: "Hi, there",

  getWriter() {
    return (message) => console.log(`${this.greeting}, ${message}`);
  },
};

greeting = "hello";
let writer = myObject.getWriter();
writer("It is raining today");

let standALone = myObject.getWriter;
let standALoneWriter = standALone();
standALoneWriter("It is sunny today");
