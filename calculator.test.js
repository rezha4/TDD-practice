import { calculator } from "./calculator";
//test bigint
test("addition works", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("subtraction works", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test("multiplication works", () => {
    expect(calculator.multiply(9, 2)).toBe(18);
});

test("division works", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test("divide by 0 throws custom error", () => {
    expect(() => calculator.divide(1, 0)).toThrow("can't divide by 0");
    expect(() => calculator.divide(0, 20)).toThrow("can't divide by 0");
});