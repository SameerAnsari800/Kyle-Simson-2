// var tmp = getSomeRecords();

// var first = tmp[0];
// var second = tmp[1];
// var firstName = first.name;
// var firstEmail = first.email !== undefined ? first.email :"nobody@none.tld";

// var secondName = second.name;
// var secondEmail = second.email !== undefined ?
// second.email :"nobody@none.tld";

// function getSomeRecords(name,email) {
//     this.name = name
//     this.email = email
   
// }
// var a = new getSomeRecords()
// a.name = "sameer"
// console.log(a);




// Destructuring 



// normal Array 

var student = ["sameer","class 1",80,90,98]
let Name = student[0];
let grade = student[1];
let mark1 = student[2];
console.log(Name);
console.log(grade);
console.log(mark1);  //normal array me individual element ko index value ke jariye extract kiya jaa skta hai or alg alg variable me assign kiya jaa skta hai 


// Array Destructuring

//Array Destucturing me agr array me bahut sare values hai to code lamba ho jaega  ki har value ke liye ek nya variable ko bnana  isiliye ham Destucturing se ham ek code me ham sabhi values ko fetch kr skte hai iske liye sabhi variables ko ek empty array me likhi jati hai or values wale array name ko ise assign ki jati hai


// example 1
var students = ["sohail", "class 2",70,70,70];
let [Name1,Grade,mark2] = students ;
console.log(Name);
console.log(Grade);
console.log(mark2);


// example 2
var Student = ["sameer"];
let [Name2,Grade1,mark3=90] =Student;
console.log(Name2) 
console.log(Grade1) 
console.log(mark3)



// Nested Array 
var Students =["saif","class5",[89,92,90]];
let [Names,Grades,[maths,englih,physics]] = Students;
console.log(Names)
console.log(Grades)
console.log(maths)
console.log(englih)
console.log(physics);



// Araay Destruturing with function 
function student101 () {
    return ["AASIF","CLASS101"];
}

let [Name101,grade101] = student101();
console.log(Name101)
console.log(grade101)



// Object Destucturing 


// Normal Object me har ek property ko alg alg krke variable me adssign kiya jata hai

// example 
let user = {
    firstname:"Tanu" ,
    lastname:"Btech" ,
    age1:23,
    course:"BTech"
}

let firstName = user.firstname;
let lastname = user.lastname;
let age1 = user.age1;
let course = user.course;
console.log(firstName)
console.log(lastname)
console.log(age1);
console.log(course)


// javascript Destructuring ke jariye object properties ko ek sath variables assign kr skte hai 


let user1 = {
firstname1:"Tanu" ,
lastname1:"Btech" ,
age12:23,
course1:"BTech"
}

let {firstname1:username,lastname1:userlastname,age12:userage,course1:usercourse} = user1 ;
console.log(username)
console.log(userlastname)
console.log(userage)
console.log(usercourse);


// agr isme variable names alag alg rkhna hai toh properties name self,tb objct destructuring me phle property name likhna hoga or uske bad :(colon) dekr variable name likh skte hai 


// Note : agr property name or variable name same rkhna chahte hai toh :(colon) separator ki jarurat nhi hai ek bar hi variable ko sequentially likh skte hai 

// example 



const person = {
    first:"sameer",
    last:"ansari",
    age:20
}

let {age,last,first}=person
console.log(age)
console.log(first)
console.log(last)

// let {first:username ,last:userlast,age:userage} =person

// console.log(username);
// console.log(userage)
// console.log(userlast);

