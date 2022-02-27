//this function will be applying a new discount on number that have been sent (default parameters)

function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100));

