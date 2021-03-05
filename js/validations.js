function validate() {
	var userName = document.getElementById("username");
	var userPassword = document.getElementById("userpass");
	var userMail = document.getElementById("usermail");
	var userPhone = document.getElementById("userphone");

	if (userName.value.trim() == "" || userPassword.value.trim() == "" || userMail.value.trim() == "" || userPhone.value.trim() == "") {
		return false;
	} else {
		return true;
	}

}