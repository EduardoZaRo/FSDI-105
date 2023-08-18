function displayUsers(usersArray){
    let row = "";
    $("#usersList").empty();
    usersArray.forEach((user)=>{
        let row = `
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
    });
    // for(let i = 0; i < usersArray.length; i++){
    //     $("#usersList").append(`
    //         <tr>
    //             <td>${usersArray[i].email}</td>
    //             <td>${usersArray[i].fname}</td>
    //             <td>${usersArray[i].lname}</td>
    //             <td>${usersArray[i].age}</td>
    //             <td>${usersArray[i].gender}</td>
    //             <td>${usersArray[i].phone}</td>
    //             <td>${usersArray[i].payment}</td>
    //             <td>${usersArray[i].color}</td>
    //         </tr>
    //     `);
    // }

    console.log(usersArray)
}

function init(){
    let users = readUsers();
    displayUsers(users);
}
window.onload = init;