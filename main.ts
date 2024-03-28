#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance: number = 10000;
let accPin: number = 1010;

let account = await inquirer.prompt([

    {
        message: "Enter your pin",
        type: "number",
        name: "pin",
    }
])
if (account.pin === accPin) {
    console.log("correct pin")


    let operationAns = await inquirer.prompt([

        {
            name: "option",
            choices: ["cash withdawral", "fast cash", "check balance"],
            message: "select option",
            type: "list"
        }
        //cash withdawral depart
    ])
    if (operationAns.option === "cash withdawral") {
        let ammountAns = await inquirer.prompt([
            {
                message: "Enter your ammount",
                type: "number",
                name: "ammount"
            }
        ])
        if (ammountAns.ammount > myBalance) {
            console.log("check your balance")
        }

        else if (ammountAns.ammount == myBalance) { console.log("your remaining balance " + 0) }

        else if (myBalance -= ammountAns.ammount) { console.log(`your remaining balance is: ${myBalance}`) }


    }
    //fast cash option depart

    if (operationAns.option === "fast cash") {
        let fastCash = [5000, 10000, 15000, 20000]
        let fastcashOption = await inquirer.prompt([{
            type: "list",
            message: "select your Ammount",
            choices: ["5000", "10000", "15000", "20000"],
            name: "cash"
        }])
        if (fastcashOption.cash > myBalance) {
            console.log("check your balance")
        }
        else if (fastcashOption.cash == myBalance) {
            console.log("your remaining balance " + 0)
        }
        else if (myBalance -= fastcashOption.cash) {
            console.log(`your remaining balance: ${myBalance}`)
        }
    }
    // check balance depart
    if (operationAns.option === "check balance") {
        console.log(`your balance is: ${myBalance}`)
    }

}


else (console.log("Incorrect pin"))




