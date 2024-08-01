enum Feature {
    Waterproof,
    Insulated
}

// type Product = {
//     name: string;
//     price?: number;
//     hasFeature?(Feature):boolean;
// }

// type Person = {
//     id: string;
//     name: string;
//     city: string;
// }

// let hat = {id: 1, name: "Hat", price: 100};
// let gloves = {id:2, name: "Gloves", price: 75};
// let umbrella = {name: "Umbrella", price: 30, hasFeature: (feature)=> feature === Feature.Waterproof}

// let products: Product[] = [hat, gloves, umbrella];

// products.forEach(prod => console.log(`${prod.name}: ${prod.price} ` + 
//      `${prod.hasFeature ? prod.hasFeature(Feature.Waterproof): "false"}`));

type Product = {
    id:number
    name: string;
    price?: number;
}

type Person = {
    id: string,
    name: string,
    city: string,
}

let hat = {id: 1, name: "Hat", price: 100};
let gloves = {id:2, name: "Gloves", price: 75};
let umbrella = {id:3, name: "umbrella", price: 30};

let bob = {id: "bsmith", name:"Bob", city: "London"};

let dataItems: (Product| Person)[] = [hat, gloves, umbrella, bob];
dataItems.forEach(item => console.log(`ID: ${item.id},Type: ${typeof item}`));
