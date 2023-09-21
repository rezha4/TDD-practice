const calculator = {
    add: function(n, m) {
        return n + m;
    },
    subtract: function(n, m) {
        return n - m;
    },
    multiply: function(n, m) {
        return n * m;
    },
    divide: function(n, m) {
        if (n == 0 || m == 0) {
            throw "can't divide by 0"
        } else {
            return n / m;
        }
    },
}

export { calculator }