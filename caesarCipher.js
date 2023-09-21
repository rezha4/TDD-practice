function caesarCipher (string) {
    const cipher = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"];
    let result = [];
    let arr = string.split("");
    arr.forEach(letter => {
        if (cipher.includes(letter)) {
            let index = cipher.indexOf(letter);
            result.push(cipher[index + 1]);
        }
        else {
            result.push(letter);
        }
    })
    return result.join("");
}

export { caesarCipher }