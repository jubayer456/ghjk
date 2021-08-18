
function validation()
{
	var firstname = document.getElementById("firstname");
	var lastname = document.getElementById("lastname");
	var email = document.getElementById("email");
	var gender = document.getElementById("gender");
	var presentaddress = document.getElementById("presentaddress");
	var parmanetaddress = document.getElementById("parmanetaddress");
	var phonenumber  = document.getElementById("PhoneNumber ");
	
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var confirmpassword = document.getElementById("confirmpassword");


	if (firstname.value.trim() == "" || lastname.value.trim() == "" || email.value.trim() == ""|| gender.value.trim() == "" || presentaddress.value.trim() == ""|| parmanetaddress.value.trim() == "" || phonenumber.value.trim() == ""  || username.value.trim() == "" || password.value.trim() == "" || confirmpassword.value.trim() == "")
	{
		alert("Fill up the form correctly!");
		return false;
	}
	else if (password.value.trim() !== confirmpassword.value.trim()) 
	{
		alert("Password not matched!");
		return false;
	}
	else
	{
		alert("Welcome to the page");
		true;
	}

}