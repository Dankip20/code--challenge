
Program Description
This program is designed to calculate various deductions and taxes from an employee's gross salary in Kenya. It takes user input for the gross salary and then calculates NSSF (National Social Security Fund) deductions, NHIF (National Hospital Insurance Fund) deductions, PAYE (Pay As You Earn) tax, and net salary. It also considers tax brackets with different rates based on income levels.

Functions
calculateNSSF(grossPay): Calculates NSSF deductions based on the gross pay of the employee. It considers two tiers for NSSF contributions.

calculateNHIF(grossPay): Calculates NHIF deductions based on the gross pay of the employee. NHIF deductions vary depending on the salary range.

calculateTaxableIncome(grossPay): Calculates the taxable income after deducting NHIF and NSSF contributions from the gross pay.

calculatePAYE(grossSalary): Placeholder function to calculate PAYE (Pay As You Earn) tax. This function is not implemented.

calculateNetSalary(grossPay): Calculates the net salary after deducting PAYE, NHIF, and NSSF contributions.

main(): The main function that takes user input for gross salary, calls the necessary functions to calculate deductions and taxes, and then prints out the detailed breakdown of deductions and the net salary.

Usage
To use the program, run it in a Node.js environment. It will prompt you to enter the gross salary, and then it will display the breakdown of deductions and the net salary.
