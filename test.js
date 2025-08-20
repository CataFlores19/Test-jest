// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


//test Euro to Dollar
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

//test Dollar to Yen
test("One dollar should be 146.26 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(5);

    const expected = 5 * 146.26;

    expect(yen).toBe(expected);
});

test("One yen should be 0.0055 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1000);

    const expected = 1000 * 0.00556;

    expect(pounds).toBe(expected);
});
