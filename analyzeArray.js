function analyzeArray(array) {
    let object = {
        average: 0,
        min: 0,
        max: 0,
        length: 0,
    };
    object.length = array.length;
    object.min = Math.min(...array);
    object.max = Math.max(...array);
    object.average = ((array.reduce((a, b) => {return a + b}, 0)) / object.length);
    return object;
}

export { analyzeArray }