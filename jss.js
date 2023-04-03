//log-in & register pages
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector("#show-register").addEventListener("click", function(){
    document.querySelector(".popup2").classList.add("active");
});
document.querySelector(".popup2 .close-btn").addEventListener("click", function(){
    document.querySelector(".popup2").classList.remove("active");
});
//Contact Us page, shows an alert for user to see if the form has been submited. 
document.querySelector("#form-submit").addEventListener("click", function(){
    alert("Thank you, your form has been Submitted");
});

//events checks if the request was submitted with any text, otherwise gives an alert
function submit_event() {
    var title = document.forms["event"]["event_title"].value;
    var date = document.forms["event"]["event_date"].value;
    if (title == "") {
        alert("An event must have a title!");
    }
    else {
        if (date.length == 0) {
            alert("An event must have a date!");
        }
        else {
            alert("Event submitted! The society will contact you soon!");
            }
    }
}

function submit_logIn() {
    var email = document.querySelector(".popup input[name='email']").value;
    var password = document.querySelector(".popup input[name='password']").value;
    if (email == "") {
        alert("Please enter your email");
    }
    else {
        if (password == "") {
            alert("Please enter your password");
        }
        else {
            alert("Logged in");
            }
    }
}

function submit_register() {
    var email = document.querySelector(".popup2 input[name='email2']").value;
    var firstName = document.querySelector(".popup2 input[name='firstName']").value;
    var lastName = document.querySelector(".popup2 input[name='lastName']").value;
    var password = document.querySelector(".popup2 input[name='password2']").value;
    var password2 = document.querySelector(".popup2 input[name='password3']").value;

    if (email === "") {
        alert("Please enter your Email Address");
    }
    else {
        if (firstName === "") {
            alert("Please enter your First Name");
        }
        else {
            if(lastName === ""){
                alert("Please enter your Last Name");
            }
            else{
                if(password === ""){
                    alert("Please enter your Password");
                }
                else{
                    if(password2 !== password){
                        alert("Passwords dont match")
                    }
                    else{
                        alert("Account created")
                    }
                }
            }
            }
    }
}
