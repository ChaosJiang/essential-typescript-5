// function calculateTax(amount: number): number {
//     return amount * 1.2;
// }

// function writePrice(product: string, price: number): void {
//     console.log(`Price for ${product}: $${price.toFixed(2)}`);
// }


// const hat: [string, number, number?, ...number[]] = ["Hat", 100, 10, 1.20, 3, 0.95];
// const gloves: [string, number, number?, ...number[]] = ["Gloves", 75, 10];

// const products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
// const tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];

// tupleUnion.forEach((elem: [string, number] | boolean) => {
//     if (elem instanceof Array) {
//         const [str, num] = elem;
//         console.log(`Name: ${str}`);
//         console.log(`Price: ${num.toFixed(2)}`);
//     } else if (typeof elem === "boolean") {
//         console.log(`Boolean Value: ${elem}`);

//     }
// })

// [hat, gloves].forEach(tuple => {
//     let [name, price, taxRate, ...coupons] = tuple;
//     if (taxRate !== undefined) {
//         price += price * (taxRate / 100);
//     }
//     coupons.forEach(c => price -= c);
//     writePrice(name, price);
// })

// enum Product {
//     Hat,
//     Gloves,
//     Umbrella
// }


// const products: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]];

// products.forEach((prod: [Product, number]) => {
//     switch (prod[0]) {
//         case Product.Hat:
//             writePrice("Hat", calculateTax(prod[1]));
//             break;
//         case Product.Gloves:
//             writePrice("Gloves", calculateTax(prod[1]));
//             break;
//         case Product.Umbrella:
//             writePrice("Umbrella", calculateTax(prod[1]));
//             break;
//     }
// })

// [Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {console.log(`Number value: ${val}`)});

// enum Product {
//     Hat,
//     Gloves = 20,
//     Umbrella
// }

// let productValue: Product = 0;
// let productName: string = Product[productValue];
// console.log(`Value: ${productValue}, Name: ${productName}`);


// enum OtherEnum {
//     first = 10, second = 20
// }

// enum Product {
//     Hat = OtherEnum.first + 1,
//     Gloves = 20,
//     Umbrella = Hat + Gloves
// }

// const productValue = 0;
// const productName = Product[productValue]
// console.log(`Value: ${productValue}, Name: ${productName}`);

// enum City {
//     London = "London",
//     Paris = "Paris",
//     NY = "New York"
// }
// console.log(`City: ${City.London}`);

// const enum Product { Hat, Gloves, Umbrella }
// // let productValue = Product.Hat;


// let restrictedValue: 1 | 2 | 3 = 100;
// console.log('Value: ${restrictedValue}');

function calculatePrice(quantity: 1| 2, price: number):number {
    return quantity * price;
}

let total = calculatePrice(2, 19.99)
console.log(`Price: ${total}`)

type numVals = 1|2|3|4;
function getRandomValue(): numVals {
    return Math.floor(Math.random() *4) + 1 as numVals;
}

type cities = "London" | "Paris" | "Chicago";
type cityResponse = `City: ${cities}`

// function getMixedValue(input:1): 1;
// function getMixedValue(input: 2|3) :"Hello" | true;
// function getMixedValue(input: 4): City.London;
// function getMixedValue(input: number): 1 | "Hello" | true | City.London {
//     switch(input) {
//         case 1:
//             return 1;
//         case 2:
//             return "Hello";
//         case 3:
//             return true;
//         case 4:
//         default:
//             return City.London;

//     }
// }
// const first = getMixedValue(1);
// const second = getMixedValue(2);
// const third = getMixedValue(4);
// console.log(`${first} ${second} ${third}`);

function getCityString(city: cities): cityResponse {
    return `City: ${city}`;
}

let str = getCityString("London");
console.log(str);
