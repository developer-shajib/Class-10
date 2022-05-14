
////Create an email pattern 

let email = "mail@itschool.edu.bd"

let pattern1 = /^[a-z0-9A-z_]*@[a-zA-Z]{2,}(\.[a-z]{2,}|\.[a-z]{2,}){1,3}$/i;

console.log(pattern1.test(email));



//// Create a  username pattern


let uesername = "sunhail_shajib";

let pattern2 = /^[^- ! # $ % & ' + - / = ? ^ _ ` { | } ~][a-zA-Z0-9 - ! # $ % & ' + - / = ? ^ _ ` { | } ~]*$/i;

console.log(pattern2.test(uesername));




////Create a Bangladeshi phone number pattern

let ban_phon = "01794173731";
let pattern3 = /^(\+8801|01)[3-9]{1}[0-9]{8}$/;
console.log(pattern3.test(ban_phon));



////Create a password pattern 

let password = "as33S$S3";

//week password
let pattern4 = /^[a-zA-Z0-9 - ! # $ % & ' + - / = ? ^ _ ` { | } ~]{6,32}$/;

//strong password
let strong_pattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


console.log(pattern4.test(password));


////Create a zipcode pattern

let zip = "2432";
let pattern = /^[0-9]{4}$/;
console.log(pattern.test(zip));