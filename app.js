

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }

    return valueInEuro * oneEuroIs["USD"];
}

//fromDollarToYen
const fromDollarToYen = function(valueInDollar) {
    let oneUsdIs = {
        "EUR": 0.935,    // 1 USD = 0.935 EUR
        "JPY": 146.26,   // 1 USD = 146.26 JPY
        "GBP": 0.813     // 1 USD = 0.813 GBP
    }

    return valueInDollar * oneUsdIs["JPY"];
}

const fromYenToPound = function(valueInYen) {
    let oneYenIs = {
        "EUR": 0.00639,   // 1 JPY = 0.00639 EUR
        "USD": 0.00683,   // 1 JPY = 0.00683 USD
        "GBP": 0.00556    // 1 JPY = 0.00556 GBP
    }

    return valueInYen * oneYenIs["GBP"];
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };