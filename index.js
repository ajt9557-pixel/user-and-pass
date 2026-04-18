
const button = document.getElementById("button");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const username = document.getElementById("username");
const password = document.getElementById("password");





button.onclick = function(){
    const usernameinput = username.value;
    const passwordinput = password.value;

    if (usernameinput.startsWith(" ")) {

    result.textContent =" your username cant start with a space ";
    return;

    }


    if (passwordinput.includes(" ")) {

    result2.textContent =" no spaces!!!";
    return;
   
    }
    result.textContent = "username :" + usernameinput;
    result2.textContent = "password :" +  passwordinput;
};
