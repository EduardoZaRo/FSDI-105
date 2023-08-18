function saveUser(aUser){
    let users = readUsers();
    users.push(aUser);
    let val = JSON.stringify(users);
    localStorage.setItem("users", val);
}

function readUsers(){
    let users = localStorage.getItem("users");
    if(!users){
        return [];
    }else{
        return JSON.parse(users);
    }
}