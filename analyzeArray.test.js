import { analyzeArray } from "./analyzeArray";

test("works with array of numbers", () => {
    expect(analyzeArray([102, 202, 11, 29])).toEqual({"average": 86, "length": 4, "max": 202, "min": 11});
});