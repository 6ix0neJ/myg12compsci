const prompt = require("prompt-sync")();
let a = parseInt("23480957)")
let b = parseFloat("434857.5")
let c = Number("98475")
let d = String(668235)

console.log(a, b, c, d)


let nums = prompt("Enter a number: ").split("")
while (nums.length > 0) {
    let apos = parseInt(prompt("Enter a position: "))
    console.log(nums[apos])
}

