// Concat String

var Name = "kyle simson";
var email = "getfy@gmail.com";
var title = "Teacher";

var msg = "Welcome To this class ! your " + title + " is " + Name + "Contact " + email;
console.log(msg);


// Template String 
var Name1 = "Sameer Ansari";
var Email = "SameerAnsari123@gmail.com";
var Title = "Web Developer";
var Msg = ` Welcome to this class ! your ${Title} is ${Name} Contact ${Email}`;

console.log(Msg)


// formatCurrency 

var amount = 12.3;
function formatCurrency(){
    return `the total for your order is $${amount.toFixed(2)}`
}
var msg1 = formatCurrency(amount)
console.log(msg1);