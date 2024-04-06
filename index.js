#! /usr/bin/env node
import inquirer from "inquirer";
let my_Balance = 10000; //Doller
let my_pin_code = 1234;
let pin_Answer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number"
    },
]);
if (pin_Answer.pin === my_pin_code) {
    console.log("Correct pin code");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount <= my_Balance) {
            my_Balance -= amountAnswer.amount;
            console.log(`your remaining balance is: ${my_Balance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("your balance is: " + my_Balance);
    }
    else if (operationAnswer.operation === "fast cash") {
        let fast_cash = await inquirer.prompt([
            {
                name: "amount",
                message: "please select amount",
                type: "list",
                choices: [500, 1000, 2000, 5000]
            }
        ]);
        if (my_Balance -= fast_cash.amount) {
            // literal template
            console.log(`your remaining balance is: ${my_Balance}`);
        }
    }
}
else {
    console.log("incorrect pin number");
}
