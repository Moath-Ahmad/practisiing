function multiply(a: number, b: number, c?: number) {

    if (typeof c !== "undefined") {
        return a * b * c;
    }
    else {
        return a * b;
    }
}

console.log(multiply(4, 5, 5));