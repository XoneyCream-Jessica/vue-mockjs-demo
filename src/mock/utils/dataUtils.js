import {userList, deptList, roleList, menuList, loginLogList, operationLogList, dictList} from '../data/data.js'
import * as utils from './utils'

function findUser(proName, findStr){
	var index = -1;
	for (var i = 0; i < userList.userinfo.length; i++) { 
		if(proName == "userId"){
			if(Number.parseInt(findStr) == userList.userinfo[i].userId && userList.userinfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "userName"){
			if(findStr == userList.userinfo[i].userName && userList.userinfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "nickName"){
			if(findStr == userList.userinfo[i].nickName && userList.userinfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "email"){
			if(findStr == userList.userinfo[i].email && userList.userinfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "phone"){
			if(findStr == userList.userinfo[i].phone && userList.userinfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "deptName"){
			if(findStr == userList.userinfo[i].deptName && userList.userinfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "deptId"){
			if(findStr == userList.userinfo[i].deptId && userList.userinfo[i].delFlag == false){
				index = i;
				break;
			}
		}
	}
	return index;
}

function findUserExceptId(proName, exceptId, findStr){
	var index = -1;
	for (var i = 0; i < userList.userinfo.length; i++) {
		if(userList.userinfo[i].userId == exceptId){
			continue;
		} else{
			if(proName == "userId"){
				if(Number.parseInt(findStr) == userList.userinfo[i].userId){
					index = i;
					break;
				}
			}else if(proName == "userName"){
				if(findStr == userList.userinfo[i].userName){
					index = i;
					break;
				}
			}else if(proName == "nickName"){
				if(findStr == userList.userinfo[i].nickName){
					index = i;
					break;
				}
			}else if(proName == "email"){
				if(findStr == userList.userinfo[i].email){
					index = i;
					break;
				}
			}else if(proName == "phone"){
				if(findStr == userList.userinfo[i].phone){
					index = i;
					break;
				}
			}else if(proName == "deptName"){
				if(findStr == userList.userinfo[i].deptName){
					break;
				}
			}
		}
	}
	return index;
}

function findDeptIdByName(target, findStr){
	var i = 0;
	var deptId = -1;
	for (i = 0; i < target.length; i++) {
		if(target[i].deptName != null){
			if(target[i].deptName == findStr){
				deptId = target[i].deptId;
				break;
			}else
			{
				if(target[i].children != null){
					deptId = findDeptIdByName(target[i].children, findStr);
					if(deptId > -1)
					{
						return deptId;
					}
				}
			}
		}
	}
	
    return deptId;
}

function findDeptNameById_(target, findStr){
	var i = 0;
	var deptName = "";
	for (i = 0; i < target.length; i++) {
		if(target[i].deptId != null){
			if(target[i].deptId == findStr){
				deptName = target[i].deptName;
				break;
			}else
			{
				if(target[i].children != null){
					deptName = findDeptNameById_(target[i].children, findStr);
					if(deptName != "")
					{
						return deptName;
					}
				}
			}
		}
	}
    return deptName;
}

function findDeptNameById(findStr){
	return findDeptNameById_(deptList.deptInfo, findStr);
}

function findDeptIdByDeptName_(target, findStr){
	var i = 0;
	var deptId = -1;
	for (i = 0; i < target.length; i++) {
		if(!target[i].delFlag){
			if(target[i].deptName == findStr){
				deptId = target[i].deptId;
				break;
			}else
			{
				if(target[i].children != null){
					deptId = findDeptIdByDeptName_(target[i].children, findStr);
					if(deptId > -1)
					{
						return deptId;
					}
				}
			}
		}
	}
    return deptId;
}

function findDeptIdByDeptName(findStr){
	return findDeptIdByDeptName_(deptList.deptInfo, findStr);
}


function findRole(proName, findStr){
	var index = -1;
	for (var i = 0; i < roleList.roleInfo.length; i++) { 
		if(proName == "roleId"){
			if(Number.parseInt(findStr) == roleList.roleInfo[i].roleId && roleList.roleInfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "roleName"){
			if(findStr == roleList.roleInfo[i].roleName && roleList.roleInfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "roleKey"){
			if(findStr == roleList.roleInfo[i].roleKey && roleList.roleInfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "orderNum"){
			if(Number.parseInt(findStr) == roleList.roleInfo[i].orderNum && roleList.roleInfo[i].delFlag == false){
				index = i;
				break;
			}
		}
	}
	return index;
}

function findRoleExceptId(proName, exceptId, findStr){
	var index = -1;
	for (var i = 0; i < roleList.roleInfo.length; i++) {
		if(roleList.roleInfo[i].roleId == exceptId){
			continue;
		} else{
			if(proName == "roleId"){
				if(Number.parseInt(findStr) == roleList.roleInfo[i].roleId && roleList.roleInfo[i].delFlag == false){
					index = i;
					break;
				}
			}else if(proName == "roleName"){
				if(findStr == roleList.roleInfo[i].roleName && roleList.roleInfo[i].delFlag == false){
					index = i;
					break;
				}
			}else if(proName == "roleKey"){
				if(findStr == roleList.roleInfo[i].roleKey && roleList.roleInfo[i].delFlag == false){
					index = i;
					break;
				}
			}else if(proName == "orderNum"){
				if(Number.parseInt(findStr) == roleList.roleInfo[i].orderNum && roleList.roleInfo[i].delFlag == false){
					index = i;
					break;
				}
			}
		}
	}
	return index;
}

function findRoleNameById(menuId){
	var menuNameEn = "";
	var menuNameZh = "";
	for(var i=0;i<menuList.menuInfo.length;i++){
		if(menuId == menuList.menuInfo[i].menuId){
			menuNameEn = menuList.menuInfo[i].menuNameEn;
			menuNameZh = menuList.menuInfo[i].menuNameZh;
			break;
		}
		for(var j=0;j<menuList.menuInfo[i].children.length;j++){
			if(menuId == menuList.menuInfo[i].children[j].menuId){
				menuNameEn = menuList.menuInfo[i].children[j].menuNameEn;
				menuNameZh = menuList.menuInfo[i].children[j].menuNameZh;
				break;
			}
		}
	}
	return{
		"menuNameEn": menuNameEn,
		"menuNameZh": menuNameZh
	}
}

function findUserIdByRoleId(roleId){
	var userIds = []
	for(var i=0;i<userList.userinfo.length;i++){
		for(var j=0;j<userList.userinfo[i].roleIds.length;j++){
			if(userList.userinfo[i].roleIds[j] == roleId){
				userIds.push(userList.userinfo[i].userId);
			}
		}
	}
	return userIds;
}

function findMenu(proName, findStr){
	var index = -1;
	for (var i = 0; i < menuList.menuInfo.length; i++) { 
		if(proName == "menuId" && menuList.menuInfo[i].delFlag == false){
			if(Number.parseInt(findStr) == menuList.menuInfo[i].menuId){
				index = i;
				break;
			}
		}else if(proName == "menuNameZh" && menuList.menuInfo[i].delFlag == false){
			if(findStr == menuList.menuInfo[i].menuNameZh){
				index = i;
				break;
			}
		}else if(proName == "menuNameEn" && menuList.menuInfo[i].delFlag == false){
			if(findStr == menuList.menuInfo[i].menuNameEn){
				index = i;
				break;
			}
		}
	}
	return index;
}

function findMenuExceptId(proName, exceptId, findStr){
	var index = -1;
	for (var i = 0; i < menuList.menuInfo.length; i++) { 
		if(menuList.menuInfo[i].menuId == exceptId){
			continue;
		} else{
			if(proName == "menuId" && menuList.menuInfo[i].delFlag == false){
				if(Number.parseInt(findStr) == menuList.menuInfo[i].menuId){
					index = i;
					break;
				}
			}else if(proName == "menuNameZh" && menuList.menuInfo[i].delFlag == false){
				if(findStr == menuList.menuInfo[i].menuNameZh){
					index = i;
					break;
				}
			}else if(proName == "menuNameEn" && menuList.menuInfo[i].delFlag == false){
				if(findStr == menuList.menuInfo[i].menuNameEn){
					index = i;
					break;
				}
			}
		}
	}
	return index;
}

function findSubMenu(proName, findStr){
	var index = -1;
	for (var i = 0; i < menuList.menuInfo.length; i++) { 
		for (var j = 0; j < menuList.menuInfo[i].children.length; j++){
			if(proName == "menuId" && menuList.menuInfo[i].children[j].delFlag == false){
				if(Number.parseInt(findStr) == menuList.menuInfo[i].children[j].menuId){
					index = j;
					break;
				}
			}else if(proName == "menuNameZh" && menuList.menuInfo[i].children[j].delFlag == false){
				if(findStr == menuList.menuInfo[i].children[j].menuNameZh){
					index = j;
					break;
				}
			}else if(proName == "menuNameEn" && menuList.menuInfo[i].children[j].delFlag == false){
				if(findStr == menuList.menuInfo[i].children[j].menuNameEn){
					index = j;
					break;
				}
			}else if(proName == "parentId" && menuList.menuInfo[i].children[j].delFlag == false){
				if(Number.parseInt(findStr) == menuList.menuInfo[i].children[j].parentId){
					index = j;
					break;
				}
			}else if(proName == "perm" && menuList.menuInfo[i].children[j].delFlag == false){
				if(findStr == menuList.menuInfo[i].children[j].perm){
					index = j;
					break;
				}
			}
		}
	}
	return index;
}

function findSubMenuExceptId(proName, exceptId, findStr){
	var index = -1;
	for (var i = 0; i < menuList.menuInfo.length; i++) { 
		for (var j = 0; j < menuList.menuInfo[i].children.length; j++){
			if(menuList.menuInfo[i].children[j].menuId == exceptId){
				continue;
			} else{
				if(proName == "menuId" && menuList.menuInfo[i].children[j].delFlag == false){
					if(Number.parseInt(findStr) == menuList.menuInfo[i].children[j].menuId){
						index = j;
						break;
					}
				}else if(proName == "menuNameZh" && menuList.menuInfo[i].children[j].delFlag == false){
					if(findStr == menuList.menuInfo[i].children[j].menuNameZh){
						index = j;
						break;
					}
				}else if(proName == "menuNameEn" && menuList.menuInfo[i].children[j].delFlag == false){
					if(findStr == menuList.menuInfo[i].children[j].menuNameEn){
						index = j;
						break;
					}
				}else if(proName == "parentId" && menuList.menuInfo[i].children[j].delFlag == false){
					if(Number.parseInt(findStr) == menuList.menuInfo[i].children[j].parentId){
						index = j;
						break;
					}
				}else if(proName == "perm" && menuList.menuInfo[i].children[j].delFlag == false){
					if(findStr == menuList.menuInfo[i].children[j].perm){
						index = j;
						break;
					}
				}
			}
		}
	}
	return index;
}

function findMenuMaxId(){
	let ids = [];
	for(var i=0;i<menuList.menuInfo.length;i++){
		ids.push(menuList.menuInfo[i].menuId);
		for(var j=0;j<menuList.menuInfo[i].children.length;j++){
			ids.push(menuList.menuInfo[i].children[j].menuId);
		}
	}
	let max = -1;
	for(var i=0;i<ids.length;i++){
		if(ids[i] > max){
			max = ids[i];
		}
	}
	return max;
}

function findMenuId(menuId){
	let ids = [];
	for(var i=0;i<menuList.menuInfo.length;i++){
		ids.push(menuList.menuInfo[i].menuId);
		for(var j=0;j<menuList.menuInfo[i].children.length;j++){
			ids.push(menuList.menuInfo[i].children[j].menuId);
		}
	}
	let index = -1;
	for(var i=0;i<ids.length;i++){
		if(ids[i] == menuId){
			index = i;
			break;
		}
	}
	return index;
}

function findMenuListByUserId(userId){
	var roleIds = [];
	var index = findUser("userId", userId);
	if(index == -1){
		return -1;
	}
	var menuIds = [];
	roleIds = userList.userinfo[index].roleIds;
	const macSet = new Set();
	for(var i=0;i<roleIds.length;i++){
		var tmpIndex = findRole("roleId", roleIds[i]);
		for(var j=0;j<roleList.roleInfo[tmpIndex].menuList.length;j++){
			macSet.add(roleList.roleInfo[tmpIndex].menuList[j].menuId);
			for(var k=0;k<roleList.roleInfo[tmpIndex].menuList[j].children.length;k++){
				macSet.add(roleList.roleInfo[tmpIndex].menuList[j].children[k].menuId);
			}
		}
	}
	macSet.forEach(t=>{
		menuIds.push(t);
	})
	var menuListInfo = [];
	for(var i=0;i<menuIds.length;i++){
		var menuInfo = {
			"menuId": -1,
			"icon": "",
			"component": "",
			"menuNameEn": "",
			"menuNameZh": "",
			"children": []
		};
		var topMenuIndex = findMenu("menuId",menuIds[i]);
		if(topMenuIndex != -1){
			menuIds.splice(i,1);
			menuInfo.menuId = menuList.menuInfo[topMenuIndex].menuId;
			menuInfo.icon = menuList.menuInfo[topMenuIndex].icon;
			menuInfo.component = menuList.menuInfo[topMenuIndex].component;
			menuInfo.menuNameEn = menuList.menuInfo[topMenuIndex].menuNameEn;
			menuInfo.menuNameZh = menuList.menuInfo[topMenuIndex].menuNameZh;
			menuListInfo.push(menuInfo);
		}
	}
	for(var i=0;i<menuListInfo.length;i++){
		var tmpId = 0;
		 tmpId = menuListInfo[i].menuId;
		 if(tmpId < 0)
		 {
			 continue;
		 }
		for(var j=0;j<menuIds.length;j++){
			var subMenuInfo = {
				"menuId": -1,
				"icon": "",
				"component": "",
				"menuNameEn": "",
				"menuNameZh": ""
			};
			var tmpIndex = findMenu("menuId",tmpId);
			var childrenLen = menuList.menuInfo[tmpIndex].children.length;
			for(var k=0;k<childrenLen;k++){
				if(menuIds[j] == menuList.menuInfo[tmpIndex].children[k].menuId){
					subMenuInfo.menuId = menuList.menuInfo[tmpIndex].children[k].menuId;
					subMenuInfo.icon = menuList.menuInfo[tmpIndex].children[k].icon;
					subMenuInfo.component = menuList.menuInfo[tmpIndex].children[k].component;
					subMenuInfo.menuNameEn = menuList.menuInfo[tmpIndex].children[k].menuNameEn;
					subMenuInfo.menuNameZh = menuList.menuInfo[tmpIndex].children[k].menuNameZh;
					menuListInfo[i].children.push(subMenuInfo);
				}
			}
		}
	}
	return menuListInfo;
}

function getMenuTreeByMenuIds(menuIds){
	var menuListInfo = [];
	for(var i=0;i<menuIds.length;i++){
		var menuInfo = {
			"menuId": -1,
			"menuNameEn": "",
			"menuNameZh": "",
			"children": []
		};
		var topMenuIndex = findMenu("menuId",menuIds[i]);
		if(topMenuIndex != -1){
			menuIds.splice(i,1);
			menuInfo.menuId = menuList.menuInfo[topMenuIndex].menuId;
			menuInfo.menuNameEn = menuList.menuInfo[topMenuIndex].menuNameEn;
			menuInfo.menuNameZh = menuList.menuInfo[topMenuIndex].menuNameZh;
			menuListInfo.push(menuInfo);
		}
	}
	for(var i=0;i<menuListInfo.length;i++){
		var tmpId = 0;
		 tmpId = menuListInfo[i].menuId;
		 if(tmpId < 0)
		 {
			 continue;
		 }
		for(var j=0;j<menuIds.length;j++){
			var subMenuInfo = {
				"menuId": -1,
				"menuNameEn": "",
				"menuNameZh": ""
			};
			var tmpIndex = findMenu("menuId",tmpId);
			var childrenLen = menuList.menuInfo[tmpIndex].children.length;
			for(var k=0;k<childrenLen;k++){
				if(menuIds[j] == menuList.menuInfo[tmpIndex].children[k].menuId){
					subMenuInfo.menuId = menuList.menuInfo[tmpIndex].children[k].menuId;
					subMenuInfo.menuNameEn = menuList.menuInfo[tmpIndex].children[k].menuNameEn;
					subMenuInfo.menuNameZh = menuList.menuInfo[tmpIndex].children[k].menuNameZh;
					menuListInfo[i].children.push(subMenuInfo);
				}
			}
		}
	}
	return menuListInfo;
}

function findLog(proName, findStr, logType){
	var index = -1;
	if(logType == 0){
		for (var i = 0; i < loginLogList.loginLog.length; i++) { 
			if(proName == "infoId"){
				if(Number.parseInt(findStr) == loginLogList.loginLog[i].infoId && loginLogList.loginLog[i].delFlag == false){
					index = i;
					break;
				}
			}
		}
	}else if(logType == 1){
		for (var i = 0; i < operationLogList.operationLogInfo.length; i++) { 
			if(proName == "operId"){
				if(Number.parseInt(findStr) == operationLogList.operationLogInfo[i].operId && operationLogList.operationLogInfo[i].delFlag == false){
					index = i;
					break;
				}
			}
		}
	}
	
	return index;
}

function findDeptInfo_(target, findId, is_root){
	var index = -1;
	var info = {};
	info.deptId = -1;
	for (var i = 0; i < target.length; i++) {
		if(target[i].deptId == findId){
			index = i;
			info = target[index];
			return info;
			//break;
		}else{
			if(target[i].children.length != 0){
				info = findDeptInfo_(target[i].children, findId,false);
				if(info.deptId != -1 && is_root == true)
				{
					return info;
				}
			}
		}
	}
    return info;
}

function findDeptInfo(findStr){
	return findDeptInfo_(deptList.deptInfo, findStr,true);
}

function findDeptId_(target, findId){
	var index = -1;
	for (var i = 0; i < target.length; i++) {
		if(target[i].deptId == findId){
			index = i;
			break;
		}else{
			if(target[i].children.length != 0){
				index = findDeptId_(target[i].children, findId);
				if(index > -1)
				{
					return index;
				}
			}
		}
	}
    return index;
}

function findDeptId(findStr){
	return findDeptId_(deptList.deptInfo, findStr);
}

function findDeptNameByExist_(target, findName){
	var flag = false;
	for (var i = 0; i < target.length; i++) {
		if(target[i].deptName == findName && target[i].delFlag == false){
			flag = true;
			break;
		}else{
			if(target[i].children.length != 0){
				flag = findDeptNameByExist_(target[i].children, findName);
				if(flag != false)
				{
					return flag;
				}
			}
		}
	}
    return flag;
}

function findDeptNameByExist(findStr){
	return findDeptNameByExist_(deptList.deptInfo, findStr);
}

function findDeptNameByExistExceptId_(target, findName, deptId){
	var flag = false;
	for (var i = 0; i < target.length; i++) {
		if(target[i].deptName == findName && target[i].deptId != deptId && target[i].delFlag == false){
			flag = true;
			break;
		}else{
			if(target[i].children.length != 0){
				flag = findDeptNameByExistExceptId_(target[i].children, findName, deptId);
				if(flag != false)
				{
					return flag;
				}
			}
		}
	}
    return flag;
}

function findDeptNameByExistExceptId(findStr, deptId){
	return findDeptNameByExistExceptId_(deptList.deptInfo, findStr, deptId);
}

function findSubDeptIds_(fromData,depIds){
	var i = 0;
	var ret = [];
	var ids = depIds;
	for (i = 0; i < fromData.length; i++) {
		var id = fromData[i].deptId;
		ids.push(id);
		if(fromData[i].children != null){
			var temps = findSubDeptIds_(fromData[i].children,ids);
			ids = temps;
		}else{
			return ids;
		}
	}
    return ids;
}

function findSubDeptIds(deptInfo){
	var deptIds = [];
	deptIds.push(deptInfo.deptId);
	return (findSubDeptIds_(deptInfo.children, deptIds));
}

function findDeptIdExist(deptId){
	var flag = false;
	var deptIds = [];
	for(var i=0;i<deptList.deptInfo.length;i++){
		deptIds.push(findSubDeptIds(deptList.deptInfo[i]))
	}
	for(var i=0;i<deptIds.length;i++){
		for(var j=0;j<deptIds[i].length;j++){
			if(deptIds[i][j] == deptId){
				flag = true;
				break;
			}
		}
	}
	return flag;
}

function findMaxDeptId(){
	var deptIds = [];
	for(var i=0;i<deptList.deptInfo.length;i++){
		deptIds.push(findSubDeptIds(deptList.deptInfo[i]))
	}
	var max = -1;
	for(var i=0;i<deptIds.length;i++){
		for(var j=0;j<deptIds[i].length;j++){
			if(deptIds[i][j] > max){
				max = deptIds[i][j];
			}
		}
	}
	return max;
}

function getUserInfoByDeptId(deptId){
	var deptInfo = findDeptInfo(deptId);
	var deptIds = findSubDeptIds(deptInfo);
	//提取所有的dept及下属部门ID
	var query = [];
	for(var i=0;i<deptIds.length;i++){
		for(var j=0;j<userList.userinfo.length;j++){
			if(userList.userinfo[j].deptId==deptIds[i] && userList.userinfo[j].delFlag == false){
				query.push(userList.userinfo[j]);
			}
		}
	}
	return query;
}

function findDictType(proName, findStr){
	var index = -1;
	for (var i = 0; i < dictList.dictInfo.length; i++) { 
		if(proName == "dictId"){
			if(Number.parseInt(findStr) == dictList.dictInfo[i].dictId && dictList.dictInfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "dictName"){
			if(findStr == dictList.dictInfo[i].dictName && dictList.dictInfo[i].delFlag == false){
				index = i;
				break;
			}
		}else if(proName == "dictType"){
			if(findStr == dictList.dictInfo[i].dictType && dictList.dictInfo[i].delFlag == false){
				index = i;
				break;
			}
		}
	}
	return index;
}

function findDictTypeExceptId(proName, exceptId, findStr){
	var index = -1;
	for (var i = 0; i < dictList.dictInfo.length; i++) { 
		if(proName == "dictId"){
			if(Number.parseInt(findStr) == dictList.dictInfo[i].dictId && dictList.dictInfo[i].delFlag == false && dictList.dictInfo[i].dictId != exceptId){
				index = i;
				break;
			}
		}else if(proName == "dictName"){
			if(findStr == dictList.dictInfo[i].dictName && dictList.dictInfo[i].delFlag == false && dictList.dictInfo[i].dictId != exceptId){
				index = i;
				break;
			}
		}else if(proName == "dictType"){
			if(findStr == dictList.dictInfo[i].dictType && dictList.dictInfo[i].delFlag == false && dictList.dictInfo[i].dictId != exceptId){
				index = i;
				break;
			}
		}
	}
	return index;
}

function findDictDataStatusByDictId(dictId){
	var ans = 0;
	var index = findDictType("dictId", dictId);
	if(index != -1){
		var dictData = dictList.dictInfo[index].dictData;
		if(dictData.length == 0){
			ans = 0;
		}else{
			for(var i=0;i<dictData.length;i++){
				if(dictData[i].status == true){
					ans = 1;
					break;
				}
			}
		}
	}
	return ans;
}

function findDictData(proName, findStr){
	var index = -1;
	for (var i = 0; i < dictList.dictInfo.length; i++) { 
		if(dictList.dictInfo[i].dictData.length != 0){
			for(var j=0;j<dictList.dictInfo[i].dictData.length;j++){
				if(proName == "dictCode"){
					if(Number.parseInt(findStr) == dictList.dictInfo[i].dictData[j].dictCode && dictList.dictInfo[i].dictData[j].delFlag == false){
						index = j;
						break;
					}
				}else if(proName == "dictLabelZh"){
					if(findStr == dictList.dictInfo[i].dictData[j].dictLabelZh && dictList.dictInfo[i].dictData[j].delFlag == false){
						index = j;
						break;
					}
				}else if(proName == "dictLabelEn"){
					if(findStr == dictList.dictInfo[i].dictData[j].dictLabelEn && dictList.dictInfo[i].dictData[j].delFlag == false){
						index = j;
						break;
					}
				}else if(proName == "dictValue"){
					if(findStr == dictList.dictInfo[i].dictData[j].dictValue && dictList.dictInfo[i].dictData[j].delFlag == false){
						index = j;
						break;
					}
				}
			}
		}	
	}
	return index;
}

function findDictDataExceptId(proName, exceptId, findStr){
	var index = -1;
	for (var i = 0; i < dictList.dictInfo.length; i++) { 
		if(dictList.dictInfo[i].dictData.length != 0){
			for(var j=0;j<dictList.dictInfo[i].dictData.length;j++){
				if(proName == "dictCode"){
					if(dictList.dictInfo[i].dictData[j].dictCode != exceptId && Number.parseInt(findStr) == dictList.dictInfo[i].dictData[j].dictCode && dictList.dictInfo[i].dictData[j].delFlag == false){
						index = j;
						break;
					}
				}else if(proName == "dictLabelZh"){
					if(dictList.dictInfo[i].dictData[j].dictCode != exceptId && findStr == dictList.dictInfo[i].dictData[j].dictLabelZh && dictList.dictInfo[i].dictData[j].delFlag == false){
						index = j;
						break;
					}
				}else if(proName == "dictLabelEn"){
					if(dictList.dictInfo[i].dictData[j].dictCode != exceptId && findStr == dictList.dictInfo[i].dictData[j].dictLabelEn && dictList.dictInfo[i].dictData[j].delFlag == false){
						index = j;
						break;
					}
				}else if(proName == "dictValue"){
					if(dictList.dictInfo[i].dictData[j].dictCode != exceptId && findStr == dictList.dictInfo[i].dictData[j].dictValue && dictList.dictInfo[i].dictData[j].delFlag == false){
						index = j;
						break;
					}
				}
			}
		}	
	}
	return index;
}

function getAllDictData(){
	var dictDatas = [];
	for(var i=0;i<dictList.dictInfo.length;i++){
		if(dictList.dictInfo[i].dictData.length != 0){
			for(var j=0;j<dictList.dictInfo[i].dictData.length;j++){
				dictDatas.push(dictList.dictInfo[i].dictData[j]);
			}
		}
	}
	return dictDatas;
}

function getDeptTree_(target, deptTree){
	for(var i=0;i<target.length;i++){
		if(!target[i].delFlag){
			var template = {
				"deptId": target[i].deptId,
				"deptName": target[i].deptName,
				"orderNum": target[i].orderNum,
				"children": []
			}
			if(target[i].children.length != 0){
				getDeptTree_(target[i].children, template.children);
			}
			deptTree.push(template);
		}
	}
}

function getDeptTreeInfo(){
	var deptTree = [];
	getDeptTree_(deptList.deptInfo, deptTree);
	return deptTree;
}

function getDeptDetails_(target, deptTree){
	for(var i=0;i<target.length;i++){
		if(!target[i].delFlag){
			var parentDeptId = -1;
			if(target[i].parentDeptName == ""){
				parentDeptId = 0;
			}else{
				parentDeptId = findDeptIdByDeptName(target[i].parentDeptName);
			}
			var template = {
				"deptId": target[i].deptId,
				"deptName": target[i].deptName,
				"createTime": target[i].createTime,
				"status": target[i].status,
				"parentDeptName": target[i].parentDeptName,
				"parentDeptId": parentDeptId,
				"orderNum": target[i].orderNum,
				"leader": target[i].leader,
				"phone": target[i].phone,
				"email": target[i].email,
				"children": []
			}
			if(target[i].children.length != 0){
				getDeptDetails_(target[i].children, template.children);
			}
			deptTree.push(template);
		}
	}
}

function getDeptDetails(){
	var deptTree = [];
	getDeptDetails_(deptList.deptInfo, deptTree);
	return deptTree;
}

//通过deptId找到其children
function findDeptChildren_(target, findId, insertData){
	var index = -1;
	for (var i = 0; i < target.length; i++) {
		if(target[i].deptId == findId){
			index = i;
			target[i].children.push(insertData);
			break;
		}else{
			if(target[i].children.length != 0){
				index = findDeptChildren_(target[i].children, findId, insertData);
				if(index > -1)
				{
					return index;
				}
			}
		}
	}
    return index;
}

function findDeptChildren(findStr, insertData){
	return findDeptChildren_(deptList.deptInfo, findStr, insertData);
}

function editDeptInfo_(target, deptId, editData){
	var index = -1;
	for (var i = 0; i < target.length; i++) {
		if(target[i].deptId == deptId){
			index = i;
			target[i].deptName = editData.deptName;
			target[i].orderNum = editData.orderNum;
			target[i].leader = editData.leader;
			target[i].phone = editData.phone;
			target[i].email = editData.email;
			break;
		}else{
			if(target[i].children.length != 0){
				index = editDeptInfo_(target[i].children, deptId, editData);
				if(index > -1)
				{
					return index;
				}
			}
		}
	}
    return index;
}

function editDeptInfo(deptId, editData){
	return editDeptInfo_(deptList.deptInfo, deptId, editData);
}

function editDeptStatus_(target, deptId, status){
	var index = -1;
	for (var i = 0; i < target.length; i++) {
		if(target[i].deptId == deptId){
			index = i;
			target[i].status = status;
			break;
		}else{
			if(target[i].children.length != 0){
				index = editDeptStatus_(target[i].children, deptId, status);
				if(index > -1)
				{
					return index;
				}
			}
		}
	}
    return index;
}

function editDeptStatus(deptId, status){
	return editDeptStatus_(deptList.deptInfo, deptId, status);
}

function editDeptDel_(target, deptId){
	var index = -1;
	for (var i = 0; i < target.length; i++) {
		if(target[i].deptId == deptId){
			index = i;
			target[i].delFlag = true;
			break;
		}else{
			if(target[i].children.length != 0){
				index = editDeptDel_(target[i].children, deptId);
				if(index > -1)
				{
					return index;
				}
			}
		}
	}
    return index;
}

function editDeptDel(deptId){
	return editDeptDel_(deptList.deptInfo, deptId);
}

export {
	findUser,
	findUserExceptId,
	findDeptIdByName,
	findDeptNameById,
	findDeptId,
	findRole,
	findRoleNameById,
	findRoleExceptId,
	findUserIdByRoleId,
	findMenuListByUserId,
	findMenu,
	findSubMenu,
	getMenuTreeByMenuIds,
	findLog,
	getUserInfoByDeptId,
	findDeptInfo,
	findDictType,
	findDictTypeExceptId,
	findDictDataStatusByDictId,
	findDictData,
	findDictDataExceptId,
	getAllDictData,
	getDeptTreeInfo,
	findMenuMaxId,
	findMenuId,
	findMenuExceptId,
	findSubMenuExceptId,
	getDeptDetails,
	findDeptNameByExist,
	findDeptChildren,
	findMaxDeptId,
	findDeptNameByExistExceptId,
	findDeptIdExist,
	editDeptInfo,
	editDeptStatus,
	editDeptDel,
	findDeptIdByDeptName
};