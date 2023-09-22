/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    
    let tip_precise = (meal_cost/ 100) * tip_percent;
    
    let tax_precise = (tax_percent / 100) * meal_cost;
    
    let total_cost = (meal_cost + tip_precise + tax_precise);
    
    console.log(Math.round(total_cost));
}

function main() {
    const meal_cost = 12.00;

    const tip_percent = 20;

    const tax_percent = 8;

    solve(meal_cost, tip_percent, tax_percent);
}

main();

/*
Explanation

Given:
meal_cost = 12, tip_percent = 20, tax percent = 8
Calculations:

tip = 12 and × 20/100 = 2.4
tax = 8 and × 12/100 = 0.96

total_cost = meal_cost + tip + tax = 12 + 2.4 +0.96 = 15.36
round(total cost) = 15

We round total cost to the nearest integer and print the result, 15.
*/