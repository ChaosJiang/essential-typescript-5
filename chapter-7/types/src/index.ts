function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

const taxValue = calculateTax(100, false)

switch (typeof taxValue) {
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    default:
        const value: never = taxValue;
        console.log(`Unexpected type for value: ${value}`);
}

const myResult: unknown = calculateTax(200, false);
const myNumber: number = myResult as number;
console.log(`Number value: ${myNumber.toFixed(2)}`);
