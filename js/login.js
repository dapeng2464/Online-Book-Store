// JavaScript Document

/*Mouse on email input field*/
function emailFocus(){
	var email=document.getElementById("email");
	email.className="login_content_input login_content_input_Focus";
	}
	
/*Mouse left email input field*/
function emailBlur(){
	var email=document.getElementById("email");
		email.className="login_content_input";
		}
		
/*Mouse on psw input field*/
function pwdFocus(){
	var pwd=document.getElementById("pwd");
	pwd.className="login_content_input login_content_input_Focus";
	}
	
/*Mouse left psw input field*/	
function pwdBlur(){
	var pwd=document.getElementById("pwd");
		pwd.className="login_content_input";
		}
/*Click on login button to check whether email and password are empty*/
function checkLogin(){
	var email=document.getElementById("email").value;
	var pwd=document.getElementById("pwd").value;
	if(email==""){
		alert("Please fill in Email or Nickname");
		return false;
		}
	if(pwd==""){
		alert("Please fill in password");
		return false;
		}
	return true;
	}
	
/*Jump to Register page*/
function jump(){
	window.location.href="register.html";
	}