import { caesarCipher } from "./caesarCipher";

test("single words", () => {
    expect(caesarCipher("defend"))
    .toBe("efgfoe");
});

test("sentences", () => {
    expect(caesarCipher("defend the east wall of the castle"))
    .toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
});

test("punctuations", () => {
    expect(caesarCipher(`lorem? ipsum'. dolor~! "sit-amet01"`))
    .toBe(`mpsfn? jqtvn'. epmps~! "tju-bnfu01"`);
});