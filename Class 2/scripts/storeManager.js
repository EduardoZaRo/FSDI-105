function saveUser(aUser){
    let val = JSON.stringify(aUser);
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