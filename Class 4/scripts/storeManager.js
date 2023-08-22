function saveUser(aUser){
    let users = readUsers();
    users.push(aUser);
    let val = JSON.stringify(users);
    localStorage.setItem("users", val);
}
function setLogout(){
    localStorage.setItem("bLogin", false);
    localStorage.setItem("strMailLoggedIn", "");
    window.location = "./index.html";
}
function setLogin(email){
    localStorage.setItem("bLogin", true);
    localStorage.setItem("strMailLoggedIn", email);
}
function getLoggedEmail(){
    return localStorage.getItem("strMailLoggedIn");
}
function isLogin(){
    return localStorage.getItem("bLogin");
}
function readUsers(){
    let users = localStorage.getItem("users");
    if(!users){
        return [];
    }else{
        return JSON.parse(users);
    }
}