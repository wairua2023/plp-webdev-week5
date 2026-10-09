# SpendWise Dashboard

## Project Description

SpendWise is a budgeting dashboard project designed to demonstrate how HTML, CSS, and JavaScript can be used to create a simple personal budgeting application. The dashboard provides a visual layout for budget information, expenses, savings, and recent transactions.

The JavaScript component collects budget information from users, calculates their remaining balance, determines the percentage of the budget spent, and displays the results in the browser console.

## Project Objectives

* Create a responsive budgeting dashboard.
* Use HTML to structure the webpage.
* Use CSS to style the dashboard and improve its appearance.
* Use JavaScript to store budgeting data and collect user input.
* Perform calculations to determine remaining balances.
* Create reusable functions for budget calculations.
* Display clearly labeled results in the browser console.

## Technologies Used

* **HTML5** – Structures the dashboard content.
* **CSS3** – Provides styling, layout, responsiveness, and visual effects.
* **JavaScript** – Collects user input, stores data, performs calculations, and displays results.

## Project Structure

```text
spendwise-dashboard/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## JavaScript Features

### 1. Budget and Expense Variables

The application uses variables to store the monthly budget, total expenses, and remaining balance.

### 2. User Input

The `prompt()` function requests the monthly budget and total expenses from the user.

### 3. Budget Calculations

The application includes reusable functions:

* `calculateRemainingBalance(budget, expenses)` – Calculates the remaining budget by subtracting expenses from the budget.
* `calculatePercentageSpent(budget, expenses)` – Calculates the percentage of the budget spent.

### 4. Input Validation

The application checks that the budget and expenses are valid numbers and that the budget is positive and expenses are not negative.

### 5. Console Output

The application displays the following information in the browser console:

* Monthly budget
* Total expenses
* Remaining balance
* Percentage of budget spent
* Budget status, including a warning if spending exceeds the budget

## How to Run the Project

1. Open the project folder in Visual Studio Code.

2. Ensure that `index.html`, `styles.css`, and `script.js` are in the same folder.

3. Link the JavaScript file in `index.html` using the following code immediately before the closing `</body>` tag:

   ```html
   <script src="script.js"></script>
   ```

4. Open `index.html` in a web browser. You can use the Live Server extension in Visual Studio Code.

5. Enter the requested budget and expense values in the prompts.

6. Open the browser Developer Tools by pressing **F12**.

7. Select the **Console** tab to view the calculated results.

**Note:** Run the application in a web browser rather than using `node script.js`, because the `prompt()` function used by this project is provided by the browser environment.

## Example

If the monthly budget is KSh 50,000 and total expenses are KSh 18,500, the application calculates:

* Monthly Budget: KSh 50,000.00
* Total Expenses: KSh 18,500.00
* Remaining Balance: KSh 31,500.00
* Budget Spent: 37.00%
* Status: You are within your budget.

## Conclusion

The SpendWise Dashboard project demonstrates the integration of HTML, CSS, and JavaScript in a budgeting application. It introduces variables, user input, input validation, arithmetic operations, reusable functions, and console output. These features provide a foundation for developing more advanced budgeting functionality in the future.
