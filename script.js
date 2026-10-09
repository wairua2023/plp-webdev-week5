
"use strict";

// 1. Store budgeting and expense data
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 2. Calculate the remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Calculate the percentage of budget spent
function calculatePercentageSpent(budget, expenses) {
    if (budget <= 0) {
        return 0;
    }

    return (expenses / budget) * 100;
}

// 4. Collect information from the user
const budgetInput = prompt("Enter your monthly budget (KSh):");
const expensesInput = prompt("Enter your total expenses (KSh):");

// Convert the input values into numbers
monthlyBudget = Number(budgetInput);
totalExpenses = Number(expensesInput);

// 5. Validate the input
if (
    budgetInput === null ||
    expensesInput === null ||
    budgetInput.trim() === "" ||
    expensesInput.trim() === "" ||
    !Number.isFinite(monthlyBudget) ||
    !Number.isFinite(totalExpenses) ||
    monthlyBudget <= 0 ||
    totalExpenses < 0
) {
    console.log("Invalid input. Enter a positive budget and valid expenses.");
} else {
    // 6. Perform budget calculations
    remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    const percentageSpent = calculatePercentageSpent(
        monthlyBudget,
        totalExpenses
    );

    // 7. Display results in the browser console
    console.log("===== SpendWise Budget Report =====");
    console.log("Monthly Budget: KSh " + monthlyBudget.toFixed(2));
    console.log("Total Expenses: KSh " + totalExpenses.toFixed(2));
    console.log("Remaining Balance: KSh " + remainingBalance.toFixed(2));
    console.log("Budget Spent: " + percentageSpent.toFixed(2) + "%");

    if (remainingBalance < 0) {
        console.log("Warning: You have exceeded your budget!");
    } else {
        console.log("Status: You are within your budget.");
    }
}