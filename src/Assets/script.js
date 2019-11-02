$(function(){
    $('body').fadeIn(1000);
    setTimeout(function(){
        $('body').fadeOut(1000, function(){
            location.reload(true);
        });
    }, 60000);
});







var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

	