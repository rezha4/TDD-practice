import { capitalize } from "./capitalize";

test("first character capitalized", () => {
    expect(capitalize("string")).toBe("String");
});

test("works on multiple words", () => {
    expect(capitalize("multiple lines of string that are long!"))
    .toBe("Multiple lines of string that are long!");
});

test("works on empty strings", () => {
    expect(capitalize(" ")).toBe(" ");
});

test("works on symbols/non alphabet", () => {
    expect(capitalize("?")).toBe("?");
});