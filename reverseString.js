function reverseString(string) {
    let array = [];
    for (let i = string.length; i != -1; i--) {
        array.push(string.charAt(i));
    }
    return array.join("");
}

export { reverseString }