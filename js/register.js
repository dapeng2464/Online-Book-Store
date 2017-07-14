// JavaScript Document

/*mouse on email input*/
function emailFocus(){
	var email=document.getElementById("email");
	var promptId=document.getElementById("email_prompt");
	email.className="register_input register_input_Focus";
	promptId.innerHTML="This email will be used as login name, and receive emails from Book Market";
	 promptId.className="register_prompt";
	}
	
/*mouse left email input*/	
function emailBlur(){
	var email=document.getElementById("email");
	var promptId=document.getElementById("email_prompt");
	promptId.innerHTML="";
	var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;	
    if(email.value==""){
		promptId.innerHTML="Please fill in your email";
		promptId.className="register_prompt_error";
		email.className="register_input register_input_Blur";
		return false;
		  }
		if(reg.test(email.value)==false){
	    promptId.innerHTML="unvalid email ";
		promptId.className="register_prompt_error";
		email.className="register_input register_input_Blur";
	return false;
	  }
	  
	  promptId.className="register_prompt_ok";
	  email.className="register_input";
	  return true;
}

/*mouse on nickname input*/
function nickNameFocus(){
	var nickName=document.getElementById("nickName");
	var nickNameId=document.getElementById("nickName_prompt");
	nickName.className="register_input register_input_Focus";
	nickNameId.innerHTML="nickname can be a combination of any digits or letters ,at least 4 characters ";
	 nickNameId.className="register_prompt";
	}
	
/*mouse left nickname input*/	
function nickNameBlur(){
	var nickName=document.getElementById("nickName");
	var nickNameId=document.getElementById("nickName_prompt");
	nickNameId.innerHTML="";
	var reg=/^[a-zA-Z0-9]{4,20}$/;	
     if(nickName.value==""){
	    nickNameId.innerHTML="Please fill in your nickname";
		nickNameId.className="register_prompt_error";
		nickName.className="register_input register_input_Blur";
	return false;
	  }
	  if(reg.test(nickName.value)==false){
	    nickNameId.innerHTML="Unvalid nickname, please use digits and letters, at least 4 characters";
		nickNameId.className="register_prompt_error";
		nickName.className="register_input register_input_Blur";
	return false;
	  }
	
	  nickNameId.className="register_prompt_ok";
	  nickName.className="register_input";
	  return true;
}


/*mouse on psw input*/
function pwdFocus(){
	var pwd=document.getElementById("pwd");
	var pwdId=document.getElementById("pwd_prompt");
	pwd.className="register_input register_input_Focus";
	pwdId.innerHTML="Password can be a combination of any digits or letters, at least 4 characters";
	pwdId.className="register_prompt";
	}
	
/*mouse left psw input*/	
function pwdBlur(){
	var pwd=document.getElementById("pwd");
	var pwdId=document.getElementById("pwd_prompt");
	pwdId.innerHTML="";
	var reg=/^[a-zA-Z0-9]{6,20}$/;	
     if(pwd.value==""){
	    pwdId.innerHTML="Please fill in your password";
		pwdId.className="register_prompt_error";
		pwd.className="register_input register_input_Blur";
	return false;
	  }
	  if(reg.test(pwd.value)==false){
	    pwdId.innerHTML="Unvalid password, password can be a combination of any digits or letters, at least 4 characters";
		pwdId.className="register_prompt_error";
		pwd.className="register_input register_input_Blur";
	return false;
	  }
	 
	  pwdId.className="register_prompt_ok";
	  pwd.className="register_input";
	  return true;
}

/*mouse on confirm psw input*/
function repwdFocus(){
	var repwd=document.getElementById("repwd");
	repwd.className="register_input register_input_Focus";
	}
	
/*mouse left confirm psw input*/	
function repwdBlur(){
	var pwd=document.getElementById("pwd");
	var repwd=document.getElementById("repwd");
	var repwdId=document.getElementById("repwd_prompt");
	repwdId.innerHTML="";
     if(repwd.value==""){
	    repwdId.innerHTML="Please confirm your password";
		repwdId.className="register_prompt_error";
		repwd.className="register_input register_input_Blur";
	return false;
	  }
	  if(pwd.value!=repwd.value){
	    repwdId.innerHTML="Password cannot match, confirm it again";
		repwdId.className="register_prompt_error";
		repwd.className="register_input register_input_Blur";
	return false;
	  }
	 
	  repwdId.className="register_prompt_ok";
	  repwd.className="register_input";
	  return true;
}
/*click on submit*/
function Reg(){
	checkBlur();
	nameBlur();
	pwdBlur();
	rePwdBlur();
	var email=checkBlur();
	var name=nameBlur();
	var pwd=pwdBlur();
	var repwd=rePwdBlur();
	if(email==true &&name==true &&pwd==true &&repwd==true){
		return true;	
		}else{
			return false;
		}	
	}

/*Province List*/
var cityList = new Array();
     cityList['British Columbia'] = ['Vancouver'];
	 cityList['Alberta'] = ['Edmonton'];
	 cityList['Saskatchewan'] = ['Regina'];
     cityList['Manitoba'] = ['Winnipeg'];
	 cityList['Ontario'] = ['Toronto', 'London', 'Ottawa'];
     cityList['Quebec'] = ['Montreal', 'Quebec City'];
	 cityList['New Brunswick'] = ['Fredericton'];
	 cityList['Prince Edward Island'] = ['Charlottetown'];
	 cityList['Nova Scotia'] = ['Halifax'];
	 cityList['Newfoundland and Labrador'] = ['St. Johns'];
	 cityList['Yukon'] = ['Whitehorse'];
	 cityList['Other'] = ['Other'];
	 
  function changeCity(){
     var province=document.getElementById("province").value; 
	 var city=document.getElementById("city");
	 city.options.length=0; //clear city 
	for (var i in cityList){
	        if (i == province){
                for (var j in cityList[i]){
					try{
					city.add(new Option(cityList[i][j],cityList[i][j]),null);
					}
					catch(e){
						city.add(new Option(cityList[i][j],cityList[i][j]));
						}
                }
            }
       }
  } 
  function allProvince(){
	  var province=document.getElementById("province");
      for (var i in cityList){
		  try{
		 province.add(new Option(i, i),null); //standard
		  }
		  catch(e){
			  province.add(new Option(i, i));  //IE
			  }
		}	
  }
    window.onload=allProvince;
	
/*mouse on button*/
function btn_over(){
	document.getElementById("registerBtn").src="images/register_btn_over.gif";
	}

/*mouse left button*/
function btn_out(){
	document.getElementById("registerBtn").src="images/register_btn_out.gif";
	}