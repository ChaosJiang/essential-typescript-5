function check(expression: boolean): asserts expression {
    if (!expression) {
        throw new Error("Expression is false");
    }
}

function calculateTax(amount: number | null): number {
    check(typeof amount == "number");
    return amount * 1.2;
}

const taxAmount: number = calculateTax(100);
console.log(`Tax value: ${taxAmount}`);

// function writeValue(label: string, value: number): void {
//     console.log(`${label}: ${value}`);
// }

// let taxValue = calculateTax(100, 0);
// console.log(`Total Amount: ${taxValue}`);

// taxValue = calculateTax(100);
// console.log(`Total Amount: ${taxValue}`);

// taxValue = calculateTax(100, 10, 20);
// console.log(`3 args: ${taxValue}`);


// taxValue = calculateTax(100, 10, 20, 1, 30, 7);
// console.log(`6 args: ${taxValue}`);

// taxValue = calculateTax(null, 0)
// console.log(`Tax Value: ${taxValue}`);
