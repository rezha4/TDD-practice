import { reverseString } from "./reverseString";

test("reverse a single string", () => {
    expect(reverseString("Hello!")).toBe("!olleH");
});

test("reverse a sentence", () => {
    expect(reverseString("This is a sentence! Right?"))
    .toBe("?thgiR !ecnetnes a si sihT");
});

test("doesn't break on empty string", () => {
    expect(reverseString(" ")).toBe(" ");
});