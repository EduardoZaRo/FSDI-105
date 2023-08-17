function displayUsersTable(){
    let users = readUsers();
    $(".usersTableContainer > tbody").empty();
    $(".usersTableContainer > tbody").append(`
            <tr>
                <td>${users.email}</td>
                <td>${users.fname}</td>
                <td>${users.lname}</td>
                <td>${users.age}</td>
                <td>${users.gender}</td>
                <td>${users.phone}</td>
                <td>${users.payment}</td>
                <td>${users.color}</td>
            </tr>
    `);
    console.log(users)
}

function init(){
    displayUsersTable();
}
window.onload = init;