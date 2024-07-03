import inquirer from "inquirer";
let result = await inquirer.prompt([
  {
    name:"FIRSTNUMBER",
    input:"number",
    message:"ENTER YOUR FIRST NUMBER!"
  },
  {
    name:"SECONDNUMBER",
    input:"number",
    message:"ENTER YOUR SECOND NUMBER!"
  }

]);
let total = (result.FIRSTNUMBER - result.SECONDNUMBER)
console.log(total)