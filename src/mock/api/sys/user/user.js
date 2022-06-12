import * as dataUtils from '../../../utils/dataUtils.js'
import {getQuery, getNowFormatDate,splitStr} from '../../../utils/utils.js'
import {deptList, userList, roleList} from '../../../data/data.js'
import {phoneReg,pwdReg,usernameReg,nicknameReg,emailReg} from '../../../utils/reg.js'

function uploadAvatar(req){
    const {avatar} = JSON.parse(req.body); //将传递进来的数据保存
    return {
        "code": "200",
	    "msg": "success response",
	    "data": {
            "imageUrl": avatar
        }
    }
}

function editAccount(req){
    const { userId, userName, nickName, email, sex, avatar} = JSON.parse(req.body); //将传递进来的数据保存
    if(dataUtils.findUser("userId",userId)==-1){
        return{
            "code": "126601",
            "msg": "不存在当前用户ID数据",
            "data": {} 
        }
    }
    if(userName == "" || nickName == "" || email == ""){
        return{
            "code": "120003",
            "msg": "请输入全部信息",
            "data": {} 
        }
    }else if(usernameReg.test(userName)==false){
        return{
            "code": "120004",
            "msg": "请输入正确的用户名",
            "data": {} 
        }
    }else if(nicknameReg.test(nickName)==false){
        return{
            "code": "120005",
            "msg": "请输入正确的昵称",
            "data": {} 
        }
    }else if(emailReg.test(email)==false){
        return{
            "code": "120006",
            "msg": "请输入正确的邮箱",
            "data": {} 
        }
    }
    if(dataUtils.findUserExceptId("userName",userId,userName)!=-1){
        return{
            "code": "120102",
            "msg": "用户名已存在",
            "data": {} 
        }
    }
    if(dataUtils.findUserExceptId("email",userId,email)!=-1){
        return{
            "code": "120103",
            "msg": "邮箱已注册",
            "data": {} 
        }
    }

    let index = dataUtils.findUser("userId",userId);
    userList.userinfo[index].userName = userName;
    userList.userinfo[index].nickName = nickName;
    userList.userinfo[index].email = email;
    userList.userinfo[index].sex = sex;
    userList.userinfo[index].avatar = avatar;
    console.log(userList);
    return {
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function updatePhone(req){
    const { userId, areaCode, phone, uuid, verificationCode} = JSON.parse(req.body); //将传递进来的数据保存
    if(dataUtils.findUser("userId", userId)==-1){
        return{
            "code": "126601",
            "msg": "不存在当前用户ID数据",
            "data": {}
        }
    }else if(phone == ""){
        return{
            "code": "120007",
            "msg": "请填写手机号",
            "data": {}
        }
    }else if(verificationCode == ""){
        return{
            "code": "120009",
            "msg": "请填写验证码",
            "data": {}
        }
    }else if(phoneReg.test(phone)==false){
        return{
            "code": "120008",
            "msg": "请输入正确格式的手机号",
            "data": {}
        }
    }
    if(dataUtils.findUserExceptId("phone",userId,phone) != -1){
        return{
            "code": "120104",
            "msg": "手机号已注册",
            "data": {}
        }
    }
    let index = dataUtils.findUser("userId", userId);
    if(verificationCode != userList.userinfo[index].verificationCode){
        return{
            "code": "120105",
            "msg": "验证码输入不正确",
            "data": {}
        }
    }
    userList.userinfo[index].phone = phone;
    console.log(userList);
    return{
        "code": "200",
            "msg": "success response",
            "data": {}
    }
}

function modifyPwd(req){
    const { userId, oldPassword, newPassword, confirmPassword} = JSON.parse(req.body); //将传递进来的数据保存
    if(dataUtils.findUser("userId",userId)==-1){
        return{
            "code": "126601",
            "msg": "不存在当前用户ID数据",
            "data": {}
        }
    }
    if(oldPassword == ""){
        return{
            "code": "120010",
            "msg": "请填写旧密码",
            "data": {}
        }
    }
    if(newPassword == ""){
        return{
            "code": "120011",
            "msg": "请填写新密码",
            "data": {}
        }
    }
    if(confirmPassword == ""){
        return{
            "code": "120012",
            "msg": "请填写确认密码",
            "data": {}
        }
    }
    if(pwdReg.test(newPassword) == false){
        return{
            "code": "120013",
			"msg": "请输入正确格式的密码，格式：8-20位，由大小写字母、数字、特殊符号(_()`~!@#$%^*-+={}[]:;,.?\/)组成",
            "data": {}
        }
    }
    if(newPassword != confirmPassword){
        return{
            "code": "120107",
            "msg": "两次密码输入不一致",
            "data": {}
        }
    }
    if(oldPassword != userList.userinfo[dataUtils.findUser("userId",userId)].password){
        return{
            "code": "120108",
            "msg": "旧密码输入错误",
            "data": {}
        }
    }
    userList.userinfo[dataUtils.findUser("userId",userId)].password = newPassword;
    console.log(userList);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function addUser(req){
    const { userName, nickName, email, phone, areaCode, sex, deptId} = JSON.parse(req.body); //将传递进来的数据保存
    if(userName==""||nickName==""||email==""||areaCode==""||phone==""){
        return{
            "code": "110001",
            "msg": "请输入全部信息",
            "data": {}
        }
    }
    if(usernameReg.test(userName) == false){
        return{
            "code": "110002",
            "msg": "请输入正确的用户名",
            "data": {}
        }
    }
    if(nicknameReg.test(nickName)==false){
        return{
            "code": "110003",
            "msg": "请输入正确的昵称",
            "data": {}
        }
    }
    if(phoneReg.test(phone)==false){
        return{
            "code": "110004",
            "msg": "请输入正确的手机号",
            "data": {}
        }
    }
    if(emailReg.test(email)==false){
        return{
            "code": "110005",
            "msg": "请输入正确的邮箱",
            "data": {}
        }
    }
    if(dataUtils.findUser("userName",userName)!=-1){
        return{
            "code": "110101",
            "msg": "用户名已存在",
            "data": {}
        }
    }
    if(dataUtils.findUser("phone",phone)!=-1){
        return{
            "code": "110102",
            "msg": "手机号已注册",
            "data": {}
        }
    }
    if(dataUtils.findUser("email",email)!=-1){
        return{
            "code": "110103",
            "msg": "邮箱已注册",
            "data": {}
        }
    }
    if(dataUtils.findDeptId(deptId)==-1){
        return{
            "code": "110104",
            "msg": "请输入部门信息",
            "data": {}
        }
    }
    let user={
        "userId": userList.userinfo[userList.userinfo.length-1].userId+1,
		"createTime": getNowFormatDate(),
		"userName": userName,
		"nickName": nickName,
		"email": email,
		"phone": phone,
		"sex": sex,
		"avatar": "",
		"status": true,
		"deptName": dataUtils.findDeptNameById(deptId),
		"password": phone,
		"verificationCode": "1234",
		"deptId":deptId,
        "delFlag":0
    }
    userList.userinfo.push(user);
    console.log(userList.userinfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function editUser(req){
    const { userId, userName, nickName, email, phone, areaCode, sex} = JSON.parse(req.body); //将传递进来的数据保存
    if(dataUtils.findUser("userId",userId) == -1){
        return{
            "code": "116601",
            "msg": "不存在当前用户ID数据",
            "data": {}
        }
    }
    if(userName == "" || nickName == "" || email == "" || phone == "" || areaCode == ""){
        return{
            "code": "110001",
            "msg": "请输入全部信息",
            "data": {}
        }
    }
    if(usernameReg.test(userName) == false){
        return{
            "code": "110002",
            "msg": "请输入正确的用户名",
            "data": {}
        }
    }
    if(nicknameReg.test(nickName)==false){
        return{
            "code": "110003",
            "msg": "请输入正确的昵称",
            "data": {}
        }
    }
    if(phoneReg.test(phone)==false){
        return{
            "code": "110004",
            "msg": "请输入正确的手机号",
            "data": {}
        }
    }
    if(emailReg.test(email)==false){
        return{
            "code": "110005",
            "msg": "请输入正确的邮箱",
            "data": {}
        }
    }
    if(dataUtils.findUserExceptId("userName",userId,userName)!=-1){
        return{
            "code": "110101",
            "msg": "用户名已存在",
            "data": {}
        }
    }
    if(dataUtils.findUserExceptId("phone",userId,phone)!=-1){
        return{
            "code": "110102",
            "msg": "手机号已注册",
            "data": {}
        }
    }
    if(dataUtils.findUserExceptId("email",userId,email)!=-1){
        return{
            "code": "110103",
            "msg": "邮箱已注册",
            "data": {}
        }
    }
    let index = dataUtils.findUser("userId",userId);
    userList.userinfo[index].userName = userName;
    userList.userinfo[index].nickName = nickName;
    userList.userinfo[index].email = email;
    userList.userinfo[index].phone = phone;
    userList.userinfo[index].sex = sex;
    console.log(userList.userinfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function changeStatus(req){
    const {userId, status} = JSON.parse(req.body); //将传递进来的数据保存
    if(dataUtils.findUser("userId",userId)==-1){
        return{
            "code": "116601",
	        "msg": "不存在当前用户ID数据",
	        "data": {}
        }
    }
    let index = dataUtils.findUser("userId",userId);
    userList.userinfo[index].status = status;
    console.log(userList.userinfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function updatePwd(req){
    const {userId, newPassword, adminPassword} = JSON.parse(req.body); //将传递进来的数据保存
    if(dataUtils.findUser("userId",userId)==-1){
        return{
            "code": "116601",
	        "msg": "不存在当前用户ID数据",
	        "data": {}
        }
    }
    if(newPassword == ""){
        return{
            "code": "110007",
            "msg": "请输入新密码",
            "data": {}
        }
    }
    if(adminPassword == ""){
        return{
            "code": "118801",
            "msg": "请输入管理员密码",
            "data": {}
        }
    }
    if(pwdReg.test(newPassword) == false){
        return{
            "code": "110008",
			"msg": "请输入正确格式的密码，格式：8-20位，由大小写字母、数字、特殊符号(_()`~!@#$%^*-+={}[]:;,.?\/)组成",
            "data": {}
        }
    }
    if(adminPassword != userList.userinfo[0].password){
        return{
            "code": "118802",
            "msg": "管理员密码输入错误",
            "data": {}
        }
    }
    let index = dataUtils.findUser("userId",userId);
    userList.userinfo[index].password = newPassword;
    console.log(userList.userinfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function removeUser(req){
    let userIds_ = getQuery(req.url, 'userIds');
    const userId = splitStr(userIds_);
    let idFlag = true;
    for(let i=0;i<userId.length;i++){
        if(dataUtils.findUser("userId",userId[i])==-1){
            idFlag = false;
            break;
        }
    }
    if(idFlag == false){
        return{
            "code": "116601",
            "msg": "不存在当前用户ID数据",
            "data": {}    
        }
    }
    let statusFlag = true;
    for(let i=0;i<userId.length;i++){
        let index = dataUtils.findUser("userId",userId);
        if(userList.userinfo[index].status == true){
            statusFlag = false;
        }
    }
    if(statusFlag == false){
        return{
            "code": "110105",
            "msg": "未停用用户不可删除",
            "data": {}    
        }
    }
    //删除
    for(let i=0;i<userId.length;i++){
        let index = dataUtils.findUser("userId",userId);
        userList.userinfo[index].delFlag = true;
    }
    console.log(userList.userinfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function getUserList(req){
    console.log(req.url);
    let userName = getQuery(req.url, 'userName');
    let phone = getQuery(req.url, 'phone');
    let status = Number.parseInt(getQuery(req.url, 'status'));
    let createDate = getQuery(req.url, 'createStartTime');
    let endDate = getQuery(req.url, 'createEndTime');
    let deptId = Number.parseInt(getQuery(req.url, 'deptId'));
    let pageSize = Number.parseInt(getQuery(req.url, 'pageSize'));
    let pageNum = Number.parseInt(getQuery(req.url, 'pageNum'))-1;
    //查找部门下的用户
    let query = dataUtils.getUserInfoByDeptId(deptId);
    var [index, size, total] = [pageNum, pageSize, query.length];
    //总页数
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    var newDataList = query.slice(index * size, (index + 1) * size);
    if(userName==""&&phone==""&&status==2&&createDate==""&&endDate==""){
        return{
            "code": 200,
	        "msg": "success response",
            "data": {
                "total":total,
                "totalPage":totalPages,
                "list":newDataList
            }
        }
    }
}

function getDeptTree(){
    var info = dataUtils.getDeptTreeInfo();
    return{
        "code": "200",
        "msg": "success response",
        "data": info
    }
}

function getRoleNameList(req){
    let responseData = [];
    let userId = getQuery(req.url, 'userId');
    for(let i=0;i<roleList.roleInfo.length;i++){
        if(roleList.roleInfo[i].delFlag == false){
            var index = dataUtils.findUser("userId",userId);
            var assignStatus = false;
            for(var j=0;j<userList.userinfo[index].roleIds.length;j++){
                if(userList.userinfo[index].roleIds[j] == roleList.roleInfo[i].roleId){
                    assignStatus = true;
                    break;
                }
            }
            let tmpData = {};
            tmpData = {
                "roleId": roleList.roleInfo[i].roleId,
                "roleName": roleList.roleInfo[i].roleName,
                "assignStatus": assignStatus
            }
            responseData.push(tmpData);
        }
    }
    return{
        "code": "200",
        "msg": "success response",
        "data": responseData
    }
}

function assignRoles(req){
    const {userId, roleIds} = JSON.parse(req.body); //将传递进来的数据保存
    if(roleIds.length == 0){
        return{
            "code": "113301",
	        "msg": "请至少为此用户分配一个角色",
	        "data": {}
        }
    }
    if(dataUtils.findUser("userId",userId)==-1){
        return{
            "code": "116601",
            "msg": "不存在当前用户ID数据",
            "data": {} 
        }
    }
    let index = dataUtils.findUser("userId",userId);
    userList.userinfo[index].roleIds = roleIds;
    console.log(userList.userinfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function getMenuTree(req){
    let userId = getQuery(req.url, 'userId');
    var result = dataUtils.findMenuListByUserId(userId);
    if(result == -1){
        return{
            "code": "116601",
            "msg": "不存在当前用户ID数据",
            "data": {}
        }
    }else{
        return{
            "code": "200",
            "msg": "success response",
            "data": {
                "list": result
            }
        }
    }
}

function getUserInfo(req){
    let userId = getQuery(req.url, 'userId');
    var index = dataUtils.findUser('userId', userId);
    if(index == -1){
        return {
            "code": "126601",
	        "msg": "不存在当前用户ID数据",
	        "data": {}
        }
    }
    return{
        "code": "200",
        "msg": "success response",
        "data": {
                "userId": userList.userinfo[index].userId,
                "userName": userList.userinfo[index].userName,
                "nickName": userList.userinfo[index].nickName,
                "email": userList.userinfo[index].email,
                "areaCode": userList.userinfo[index].areaCode,
                "phone": userList.userinfo[index].phone,
                "sex": userList.userinfo[index].sex,
                "avatar": userList.userinfo[index].avatar,
            }
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
	index = dataUtils.findUser("phone", phone);
	if(index != -1){
		return {
			code: "120104",
			msg: "手机号已注册",
			data: {}   
		}
	}else{
        return {
            code: "200",
            msg: "success response",
            data: {
                "uuid":"9af6c19c-6b1e-4b95-8eae-c4d77711959d",
                "verificationCode": "1234"
            }  
        }
	}
}

export {
    uploadAvatar,
    editAccount,
    updatePhone,
    modifyPwd,
    addUser,
    editUser,
    changeStatus,
    updatePwd,
    removeUser,
    getUserList,
    getDeptTree,
    getRoleNameList,
    assignRoles,
    getMenuTree,
    getUserInfo,
    getSmsCode
};