function login(){
    let flag = false;
    let usersArray = readUsers();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    for(let i = 0; i < usersArray.length; i++){
        let user = usersArray[i];
        if(inputEmail == user.email && inputPassword == user.pass){
            flag = true;
            window.location.href = "users.html";
            break;
        }
        else{
            flag = false;
        }
    }
    if(flag == false){
        alert("Email or password incorrect");
    }
}