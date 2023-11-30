function fibonacci(num) {
    let a = 0;
    let b = 1;
    let temp;

    if (num === 0) {
        return a;
    } else if (num === 1) {
        return b;
    } else {
        for (let i = 2; i <= num; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

// Test the function
const n = 7; // Change this value to test different nth Fibonacci numbers
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);


module.exports = fibonacci;
