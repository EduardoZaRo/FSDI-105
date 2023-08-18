function User(  email,pass,fname,
                lname,age,gender,
                phone,payment,color)
{
    this.email = email;
    this.pass = pass;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}
function isValid(user){
    let validation = true;
    $("input").removeClass("error");
    $("#notifications").text("");

    if(user.email == ""){
        $("#txtEmail").addClass("error");
        $("#notifications").append("<p>Please add an email</p>").addClass("error");
        validation = false;
    }
    if(user.pass == ""){
        $("#txtPassword").addClass("error");
        $("#notifications").append("<p>Please add a password</p>").addClass("error");
        validation = false;
    }

    if(user.fname == ""){
        $("#txtFname").addClass("error");
        $("#notifications").append("<p>Please add your first name</p>").addClass("error");
        validation = false;
    }
    if(user.lname == ""){
        $("#txtLname").addClass("error");
        $("#notifications").append("<p>Please add your last name</p>").addClass("error");
        validation = false;
    }
    if(user.payment == ""){
        $("#selPayment").addClass("error");
        $("#notifications").append("<p>Please add a payment method</p>").addClass("error");
        validation = false;
    }
    return validation;
}
function register(){
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFname = $("#txtFname").val();
    let inputLname = $("#txtLname").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();
    let newUser = new User( inputEmail, inputPassword, inputFname, inputLname,
                            inputAge, inputGender, inputPhone, inputPayment,
                            inputColor);
    if(isValid(newUser)){
        saveUser(newUser);
        $("input").val("");
    }
    
}

function init(){
    $("#btnAdd").click(register);
}

window.onload = init;