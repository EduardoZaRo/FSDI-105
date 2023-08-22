function displayUsers(usersArray){
    let row = "";
    $("#usersList").empty();
    let loggedUser = getLoggedEmail();

    usersArray.forEach((user)=>{
        row = `
            <tr>
                <td>${user.email}</td>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td>${user.color}</td>
            </tr>
        `;
        $("#usersList").append(row);
        if(loggedUser == user.email){
            $("#usersList tr:last-child").addClass("highlight");
        }
    });
    console.log(usersArray)
}

function init(){
    $("main.container").css("display", "block"); //fixing a rendering issue
    if(isLogin() == 'true'){
        let users = readUsers();
        displayUsers(users);
    }
    else{
        $(".container").html("<a href='./index.html'>You need to login to see the list of users <i class='fas fa-external-link-alt'></i></a>")
    }
}
window.onload = init;