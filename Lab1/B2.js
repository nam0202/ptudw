var username = document.forms['vform']['name'];
var email = document.forms['vform']['day'];
var day = document.forms['vform']['mail'];
// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var day_error = document.getElementById('day_error');

// username.addEventListener('blur', nameVerify, true);
// email.addEventListener('blur', emailVerify, true);
// day.addEventListener('blur', dayVerify, true);
function Validate() {
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Họ tên không được để trống";
    username.focus();
    return false;
  }
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email không để trống";
    email.focus();
    return false;
  }
  if (day.value == "") {
    day.style.border = "1px solid red";
    document.getElementById('day_div').style.color = "red";
    day_confirm.style.border = "1px solid red";
    day_error.textContent = "Ngày sinh không được để trống";
    day.focus();
    return false;
  }
}
// event handler functions
function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}
function dayVerify() {
  if (day.value != "") {
    day.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	document.getElementById('day_div').style.color = "#5e6e66";
  	day_error.innerHTML = "";
  	return true;
  }
}