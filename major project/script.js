function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(
        let item of errors
    ){
        item.innerHTML = "";
    }
}
function seterror(id, error){
    // sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
    var returnval = true;
    clearErrors();
    // perfoms validation and if validation fails, set the value of returnval to false
    var name = document.forms["myForm"]["fname"].value;
    if(name.length<5){
        seterror("name", "*Length of name is too short!");
        returnval = false;
    
    }
    var email = document.forms["myForm"]["femail"].value;
    if(email.length>25){
        seterror("email", "*Length of email is too long!");
        returnval = false;
    }
    var phone = document.forms["myForm"]["fphone"].value;
    if(phone.length!=10){
        seterror("phone", "*Length should be 10 digit!");
        returnval = false;
    }
    var password = document.forms["myForm"]["fpass"].value;
    if(password.length<8){
        seterror("pass", "*Password should be atleast of length 8!");
        returnval = false;
    }
    
    var cpassword = document.forms["myForm"]["fcpass"].value;
    if(cpassword != password ){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
        

    }
   

    return returnval;

}