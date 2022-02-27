function reverseString(str) {
    try {
        var reverse = str.split('').reverse().join('');
        console.log(reverse);
    }
    catch (e) {
        console.log(e.message);
        console.log(str);
    }
}
reverseString(123);
