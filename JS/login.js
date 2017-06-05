var login_username="admin";
var login_password="123";

function login(user, pwd)
{
	if ((user == login_username) && (pwd ==  login_password))
	{
		setCookie("connected", "true");
		return true;
	}
	else
	{
		setCookie("connected", "false");
		alert("Enter " + login_username + " & " + login_password + ".");
		return false;
	}
}

function logout()
{
	setCookie("connected", "false");
}