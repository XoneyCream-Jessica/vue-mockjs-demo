import {findUser} from '../../utils/dataUtils.js'
import {userList} from '../../data/data.js'
import {getQuery} from '../../utils/utils.js'
import {phoneReg, pwdReg} from '../../utils/reg.js'

function doLogin(req){
	console.log(req);
	const { userName, password } = JSON.parse(req.body); 
	let i = 0;
	for (i = 0; i < userList.userinfo.length; i++) { 
		if (userName === userList.userinfo[i].userName && password === userList.userinfo[i].password) {
			if(userList.userinfo[i].status == true){
				console.log(userList);
				return {
					code: "200",
					msg: "success response",
					data: {
						"accessToken":"9af6c19c-6b1e-4b95-8eae-c4d77711959d",
						"userInfo":{
							"userId": userList.userinfo[i].userId,
							"userName": userList.userinfo[i].userName,
							"nickName": userList.userinfo[i].nickName,
							"avatar": userList.userinfo[i].avatar
						}
					}   
				}
			}else{
				return {
					code: "130102",
					msg: "账号已被停用",
					data: {}   
				}
			}
		}else if(userName === ""){
			return {
				code: "130001",
				msg: "请填写用户名",
				data: {}   
			}
		}else if(password === ""){
			return {
				code: "130002",
				msg: "请填写登录密码",
				data: {}   
			}
		}else if(userName === userList.userinfo[i].userName && password === userList.userinfo[i].password && userList.userInfo[i].status == false){
			return {
				code: "130102",
				msg: "账号已被停用",
				data: {}   
			}
		}else if((userName === userList.userinfo[i].userName && password !== userList.userinfo[i].password)&& userList.userinfo[i].status == true){
			return {
				code: "130101",
				msg: "用户名或密码不正确",
				data: {}   
			}
		}
	}
	return {
		code: "130103",
		msg: "用户未注册",
		data: {}   
	}
}

function getSmsCode(req){
	console.log(req);
	const phone = getQuery(req.url, 'phone');
	if(phone == ""){
		return {
			code: "130003",
			msg: "请填写手机号",
			data: {}   
		}
	}else if(phoneReg.test(phone)==false){
		return {
			code: "130004",
			msg: "请输入正确格式的手机号",
			data: {}   
		}
	}
	let index = -1;
	index = findUser("phone", phone);
	if(index == -1){
		return {
			code: "130103",
			msg: "用户未注册",
			data: {}   
		}
	}else{
		if(userList.userinfo[index].status == false){
			return {
				code: "130102",
				msg: "账号已被停用",
				data: {}   
			}
		}else{
			console.log(userList);
			return {
				code: "200",
				msg: "success response",
				data: {
					"uuid":"9af6c19c-6b1e-4b95-8eae-c4d77711959d",
					"verificationCode":"1234"
				}  
			}
		}
	}
}

function resetPwd(req){
	const { phone, areaCode, uuid, verificationCode, newPassword, confirmPassword } = JSON.parse(req.body); //将传递进来的数据保存
	let index = findUser("phone", phone);
	if(phone == ""){
		return{
			code: "130003",
			msg: "请填写手机号",
			data: {}
		}
	}else if(phoneReg.test(phone)==false){
		return{
			code: "130004",
			msg: "请输入正确格式的手机号",
			data: {}
		}
	}else if(verificationCode == ""){
		return{
			code: "130005",
			msg: "请填写验证码",
			data: {}
		}
	}else if(newPassword == ""){
		return{
			code: "130008",
			msg: "请填写新密码",
			data: {}
		}
	}else if(confirmPassword == ""){
		return{
			code: "130009",
			msg: "请填写确认密码",
			data: {}
		}
	}else if(newPassword != confirmPassword){
		return{
			code: "130007",
			msg: "两次输入密码不一致",
			data: {}
		}
	}else if(pwdReg.test(newPassword)==false){
		return{
			code: "130010",
			msg: "请输入正确格式的密码，格式：8-20位，由大小写字母、数字、特殊符号(_()`~!@#$%^*-+={}[]:;,.?\/)组成",
			data: {}
		}
	}else if(index != -1){
		if(userList.userinfo[index].status == false){
			return{
				code: "130102",
				msg: "账号已被停用",
				data: {}
			}
		}else if(userList.userinfo[index].status == true){
			if(userList.userinfo[index].verificationCode == verificationCode){
				userList.userinfo[index].password = newPassword
				console.log(userList);
				return{
					code: "200",
					msg: "success response",
					data: {}
				}
			}else{
				return{
					code: "130006",
					msg: "验证码输入不正确",
					data: {}
				}
			}
		}
	}else if(index == -1){
		return{
			code: "130103",
			msg: "用户未注册",
			data: {}
		}
	}else{
		return{
			code: "130105",
			msg: "验证码已过期，请重新获取验证码 ",
			data: {}
		}
	}
	return {
		meta: {
			msg: 'error',
			status: "201"
		}
	}
}

function loginOut(req){
	const { userId } = JSON.parse(req.body); 
	let index = findUser("userId", userId);
	if(index == -1){
		return{
			code: "136601",
			msg: "不存在当前用户ID数据",
			data: {}
		}
	}else{
		console.log(userList);
		return{
			"code":"200",
    		"msg":"success response",
    		"data":{}
		}
	}
}

export {
	doLogin,
	getSmsCode,
	resetPwd,
	loginOut
};



