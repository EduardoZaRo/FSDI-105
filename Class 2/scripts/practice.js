// Javascript
// document.getElementById("txtEmail").style.displat = "none";
// for(let i = 0; i < 2; i++){
//     document.getElementsByTagName("label")[i].style.display = "none";
// }
// document.getElementsByClassName("menu")[0].children[0].style.display = "none";



// JQuery
// $("#txtEmail").hide();
// $("#txtPassword").hide();
// $("label").hide()
// $(".menu a:first").hide();

$("#btnAdd").on('click', example);
$("header").on('click', showForm)
function example(){
    $(".form").hide();
}
function showForm(){
    $(".form").show();
}