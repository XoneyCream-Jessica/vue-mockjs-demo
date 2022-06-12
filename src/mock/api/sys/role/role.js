import * as dataUtils from '../../../utils/dataUtils.js'
import * as utils from '../../../utils/utils.js'
import * as data from '../../../data/data.js'
import * as reg from '../../../utils/reg.js'

function addRole(req){ 
    const {roleName,roleKey,orderNum,menuIds,remark} = JSON.parse(req.body);
    if(roleName == ""){
        return{
            "code": "090001",
            "msg": "请输入角色名称",
            "data": {}
        }
    }
    if(roleKey == ""){
        return{
            "code": "090003",
            "msg": "请输入权限字符",
            "data": {}
        }
    }
    if(orderNum == ""){
        return{
            "code": "090005",
            "msg": "请输入显示顺序",
            "data": {}
        }
    }
    if(reg.rolenameReg.test(roleName)==false){
        return{
            "code": "090002",
            "msg": "角色名称格式有误",
            "data": {}
        }
    }    
    if(reg.roleKeyReg.test(roleKey)==false){
        return{
            "code": "090004",
            "msg": "权限字符格式有误",
            "data": {}
        }
    }
    if(!(orderNum>=1&&orderNum<=9999)){
        return{
            "code": "090006",
            "msg": "显示数据格式有误",
            "data": {}
        }
    }
    if(utils.getLen(remark, false) > 500){
        return{
            "code": "090103",
            "msg": "备注超过长度限制",
            "data": {}
        }
    }
    if(dataUtils.findRole("roleName",roleName)!=-1){
        return{
            "code": "090101",
            "msg": "角色名称已存在",
            "data": {}
        }
    }
    if(dataUtils.findRole("roleKey",roleKey)!=-1){
        return{
            "code": "090102",
            "msg": "权限字符已存在",
            "data": {}
        }
    }
    let menuData = dataUtils.getMenuTreeByMenuIds(menuIds);

    let role={
        "roleId": data.roleList.roleInfo.length+1,
        "roleName": roleName,
        "roleKey": roleKey,
        "orderNum": orderNum,
        "status": true,
        "createTime": utils.getNowFormatDate(),
        "remark": remark,
        "menuList": menuData,
        "delFlag": false
    }
    data.roleList.roleInfo.push(role);
    console.log(data.roleList.roleInfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function editRole(req){
    const {roleId, roleName,roleKey,orderNum,menuIds,remark} = JSON.parse(req.body);
    if(dataUtils.findRole("roleId",roleId) == -1){
        return{
            "code": "096601",
            "msg": "不存当前角色ID数据",
            "data": {}
        }
    }if(roleKey == ""){
        return{
            "code": "090003",
            "msg": "请输入权限字符",
            "data": {}
        }
    }
    if(orderNum == ""){
        return{
            "code": "090005",
            "msg": "请输入显示顺序",
            "data": {}
        }
    }
    if(reg.rolenameReg.test(roleName)==false){
        return{
            "code": "090002",
            "msg": "角色名称格式有误",
            "data": {}
        }
    }    
    if(reg.roleKeyReg.test(roleKey)==false){
        return{
            "code": "090004",
            "msg": "权限字符格式有误",
            "data": {}
        }
    }
    if(!(orderNum>=1&&orderNum<=9999)){
        return{
            "code": "090006",
            "msg": "显示数据格式有误",
            "data": {}
        }
    }
    if(utils.getLen(remark, false) > 500){
        return{
            "code": "090103",
            "msg": "备注超过长度限制",
            "data": {}
        }
    }
    if(dataUtils.findRoleExceptId("roleName", roleId, roleName)!=-1){
        return{
            "code": "090101",
            "msg": "角色名称已存在",
            "data": {}
        }
    }
    if(dataUtils.findRoleExceptId("roleKey", roleId, roleKey)!=-1){
        return{
            "code": "090102",
            "msg": "权限字符已存在",
            "data": {}
        }
    }
    let menuData = dataUtils.getMenuTreeByMenuIds(menuIds);
    let index = dataUtils.findRole("roleId",roleId);
    data.roleList.roleInfo[index].roleName = roleName;
    data.roleList.roleInfo[index].roleKey = roleKey;
    data.roleList.roleInfo[index].orderNum = orderNum;
    data.roleList.roleInfo[index].menuList = menuData;
    data.roleList.roleInfo[index].remark = remark;
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function changeStatus(req){
    const {roleId, status} = JSON.parse(req.body); //将传递进来的数据保存
    if(dataUtils.findRole("roleId",roleId)==-1){
        return{
            "code": "096601",
	        "msg": "不存在当前角色ID数据",
	        "data": {}
        }
    }
    if(dataUtils.findUserIdByRoleId(roleId).length>0){
        return{
            "code": "099901",
	        "msg": "角色下存在用户，停用失败",
	        "data": {}
        }
    }
    let index = dataUtils.findRole("roleId",roleId);
    data.roleList.roleInfo[index].status = status;
    console.log(data.roleList.roleInfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function removeRole(req){
    let roleIds_ = utils.getQuery(req.url, 'roleIds');
    const roleId = utils.splitStr(roleIds_);
    let idFlag = true;
    for(let i=0;i<roleId.length;i++){
        if(dataUtils.findRole("roleId",roleId[i])==-1){
            idFlag = false;
            break;
        }
    }
    if(idFlag == false){
        return{
            "code": "096601",
            "msg": "不存在当前角色ID数据",
            "data": {}    
        }
    }
    let statusFlag = true;
    for(let i=0;i<roleId.length;i++){
        let index = dataUtils.findRole("roleId",roleId[i]);
        if(data.roleList.roleInfo[index].status == true){
            statusFlag = false;
        }
    }
    if(statusFlag == false){
        return{
            "code": "090104",
            "msg": "未停用角色不可删除",
            "data": {}    
        }
    }
    //删除
    for(let i=0;i<roleId.length;i++){
        let index = dataUtils.findRole("roleId",roleId[i]);
        data.roleList.roleInfo[index].delFlag = true;
    }
    console.log(data.roleList.roleInfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function getRoleList(req){
    console.log(req.url);
    let roleName = utils.getQuery(req.url, 'roleName');
    let roleKey = utils.getQuery(req.url, 'roleKey');
    let status = Number.parseInt(utils.getQuery(req.url, 'status'));
    let createDate = utils.getQuery(req.url, 'createStartTime');
    let endDate = utils.getQuery(req.url, 'createEndTime');
    let pageSize = Number.parseInt(utils.getQuery(req.url, 'pageSize'));
    let pageNum = Number.parseInt(utils.getQuery(req.url, 'pageNum'))-1;
    let query = [];
    for(let i=0;i<data.roleList.roleInfo.length;i++){
        if(data.roleList.roleInfo[i].delFlag == false){
            let tmpData = {
                "roleId": data.roleList.roleInfo[i].roleId,
                "roleName": data.roleList.roleInfo[i].roleName,
                "status": data.roleList.roleInfo[i].status,
                "roleKey": data.roleList.roleInfo[i].roleKey,
                "orderNum": data.roleList.roleInfo[i].orderNum,
                "createTime": data.roleList.roleInfo[i].createTime,
                "remark": data.roleList.roleInfo[i].remark,
                "menuList": data.roleList.roleInfo[i].menuList
            }
            query.push(tmpData);
        }
    }
    var [index, size, total] = [pageNum, pageSize, query.length]
    //总页数
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    var newDataList = query.slice(index * size, (index + 1) * size)
    if(roleName==""&&roleKey==""&&status==2&&createDate==""&&endDate==""){
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

function getUsersByRoleId(req){
    let responseData = [];
    let roleId = utils.getQuery(req.url, 'roleId');
    if(dataUtils.findRole("roleId",roleId)==-1){
        return{
            "code": "096601",
            "msg": "不存在当前角色ID数据",
            "data": {}
        }
    }
    let userIds = dataUtils.findUserIdByRoleId(roleId);
    for(let i=0;i<userIds.length;i++){
        let index = dataUtils.findUser('userId',userIds[i]);
        let tmpName = data.userList.userinfo[index].userName;
        let tmpData = {
            "userId": userIds[i],
            "userName": tmpName
        }
        responseData.push(tmpData);
    }

    return{
        "code": "200",
        "msg": "success response",
        "data": responseData
    }
}


export {
    addRole,
    editRole,
    changeStatus,
    removeRole,
    getRoleList,
    getUsersByRoleId
};