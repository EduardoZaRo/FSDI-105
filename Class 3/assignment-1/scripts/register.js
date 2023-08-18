let id = 0;
function User(  email,pass,fname,
                lname,age,grade101,
                grade102,grade103)
{
    this.id = id++;
    this.email = email;
    this.pass = pass;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.grade101 = grade101;
    this.grade102 = grade102;
    this.grade103 = grade103;
}

function register(){
    let inputEmail      = $("#txtEmail").val(),
        inputPassword   = $("#txtPassword").val(),
        inputFname      = $("#txtFname").val(),
        inputLname      = $("#txtLname").val(),
        inputAge        = $("#numAge").val(),
        inputGrade101   = $("#numGrade101").val(),
        inputGrade102   = $("#numGrade102").val(),
        inputGrade103   = $("#numGrade103").val();
    let newUser = new User( inputEmail, inputPassword, inputFname,
                            inputLname, inputAge, inputGrade101,
                            inputGrade102, inputGrade103);
    console.log(newUser);
    $("#users").prepend(`
        <p>${newUser.fname} ${newUser.lname}</p>
        <p>101: ${newUser.grade101}| 102: ${newUser.grade102}| 103: ${newUser.grade103}</p>
        <hr>
    `);


    localStorage.setItem('registeredUser-'+newUser.id, JSON.stringify(newUser));
    let localStorageUser = JSON.parse(localStorage.getItem('registeredUser-'+newUser.id));
    console.log(localStorageUser);
    $("input").val("");
}