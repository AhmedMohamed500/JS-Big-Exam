let yourName = document.querySelector(".name");
let phone = document.querySelector(".phone");
let Password = document.querySelector(".password");
let Email = document.querySelector(".email");
let Age = document.querySelector(".age");
let repassword = document.querySelector(".repassword");



let data = {
    name : yourName.value,
    phone : phone.value,
    pass : Password.value,
    email : Email.value,
    age : Age.value,
    repass : repassword.value
}

let rejex = {
    yourName : /^[a-z0-9_-]{3,15}$/,
    Password : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    Email : /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/,
    phone :/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    Age : /^\S[0-9]{0,3}$/
}

