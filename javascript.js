var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password")
  , message = document.getElementById('message');

function check(){
  if(password.value != confirm_password.value) {
    message.style.color = '#ae2acf';
    message.innerHTML = '* Passwords do not match';
    password.style.border = '1px solid #ae2acf';
    confirm_password.style.border = '1px solid #ae2acf';
  } else {
    message.innerHTML = '';
    password.style.border = '1px solid rgb(207, 207, 207)';
    confirm_password.style.border = '1px solid rgb(207, 207, 207)';
  }
}