function login() {
    const PASS = "pass";
    var input = prompt("Input the password", "");

    while (input != PASS) {
        alert("Wrong");
        input = prompt("Input the password", "");
    }

    alert("Pass");
    
}

function initial() {
    var day = prompt("Input from Mon to Sun", "Mon");

    if (day == "Tue" || day == "Thur") {
        document.write(day + " Go work");
    }
    else {
        document.write("Holiday");
    }
}