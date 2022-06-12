import * as dataUtils from '../../../utils/dataUtils.js'
import * as utils from '../../../utils/utils.js'
import * as data from '../../../data/data.js'
import * as reg from '../../../utils/reg.js'

function addDept(req){
    const {parentId,deptName,orderNum,leader,phone,email} = JSON.parse(req.body);
    //将parentId转换为parentName存储
    if(parentId != 0){
        var name = dataUtils.findDeptNameById(parentId);
        if(name == ""){
            return {
                "code": "100102",
                "msg": "上级部门不存在",
                "data": {}
            }
        }
    }
    if(deptName == ""){
        return {
            "code": "100001",
            "msg": "请输入部门名称",
            "data": {}
        }
    }
    if(orderNum == "" && orderNum == 0){
        return {
            "code": "100003",
            "msg": "请输入显示顺序",
            "data": {}
        }
    }
    if(!reg.deptNameReg.test(deptName)){
        return {
            "code": "100002",
            "msg": "部门名称格式有误",
            "data": {}
        }
    }
    if(!(orderNum>=1&&orderNum<=99)){
        return {
            "code": "100004",
            "msg": "显示顺序输入格式有误",
            "data": {}
        }
    }
    if(!reg.headNameReg.test(leader)){
        return {
            "code": "100005",
            "msg": "负责人输入格式有误",
            "data": {}
        }
    }
    if(!reg.phoneReg.test(phone) && phone!=""){
        return {
            "code": "100006",
            "msg": "负责人联系电话格式有误",
            "data": {}
        }
    }
    if(!reg.emailReg.test(email) && email!=""){
        return {
            "code": "100007",
            "msg": "邮箱格式有误",
            "data": {}
        }
    }
    if(dataUtils.findDeptNameByExist(deptName)){
        return {
            "code": "100101",
            "msg": "部门名称已存在",
            "data": {}
        }
    }
    var maxId = dataUtils.findMaxDeptId();
    if(parentId != 0){
        var name = dataUtils.findDeptNameById(parentId);
        var tmpData = {
            "deptId": maxId + 1,
            "deptName": deptName,
            "createTime": utils.getNowFormatDate(),
            "status": 1,
            "parentDeptName": name,
            "orderNum": orderNum,
            "leader": leader,
            "phone": phone,
            "email": email,
            "delFlag": false,
            "children": []
        }
        dataUtils.findDeptChildren(parentId, tmpData);
    }else{
        var name = dataUtils.findDeptNameById(parentId);
        var tmpData = {
            "deptId": maxId + 1,
            "deptName": deptName,
            "createTime": utils.getNowFormatDate(),
            "status": 1,
            "parentDeptName": "",
            "orderNum": orderNum,
            "leader": leader,
            "phone": phone,
            "email": email,
            "delFlag": false,
            "children": []
        }
        data.deptList.deptInfo.push(tmpData);
    }
    return {
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function editDept(req){
    const {deptId,parentId,deptName,orderNum,leader,phone,email} = JSON.parse(req.body);
    if(!dataUtils.findDeptIdExist(deptId)){
        return {
            "code": "不存在当前部门ID数据",
            "msg": "106601",
            "data": {}
        }
    }
    if(parentId != 0){
        var name = dataUtils.findDeptNameById(parentId);
        if(name == ""){
            return {
                "code": "100102",
                "msg": "上级部门不存在",
                "data": {}
            }
        }
    }
    if(deptName == ""){
        return {
            "code": "100001",
            "msg": "请输入部门名称",
            "data": {}
        }
    }
    if(orderNum == "" && orderNum == 0){
        return {
            "code": "100003",
            "msg": "请输入显示顺序",
            "data": {}
        }
    }
    if(!reg.deptNameReg.test(deptName)){
        return {
            "code": "100002",
            "msg": "部门名称格式有误",
            "data": {}
        }
    }
    if(!(orderNum>=1&&orderNum<=99)){
        return {
            "code": "100004",
            "msg": "显示顺序输入格式有误",
            "data": {}
        }
    }
    if(!reg.headNameReg.test(leader)){
        return {
            "code": "100005",
            "msg": "负责人输入格式有误",
            "data": {}
        }
    }
    if(!reg.phoneReg.test(phone) && phone!=""){
        return {
            "code": "100006",
            "msg": "负责人联系电话格式有误",
            "data": {}
        }
    }
    if(!reg.emailReg.test(email) && email!=""){
        return {
            "code": "100007",
            "msg": "邮箱格式有误",
            "data": {}
        }
    }
    if(dataUtils.findDeptNameByExistExceptId(deptName, deptId)){
        return {
            "code": "100101",
            "msg": "部门名称已存在",
            "data": {}
        }
    }
    var tmpData = {
        "deptName": deptName,
        "orderNum": orderNum,
        "leader": leader,
        "phone": phone,
        "email": email,
    }
    dataUtils.editDeptInfo(deptId, tmpData);
    return {
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function changeDeptStatus(req){
    const {deptId,status} = JSON.parse(req.body);
    if(!dataUtils.findDeptIdExist(deptId)){
        return {
            "code": "106601",
            "msg": "不存在当前部门ID数据",
            "data": {}
        }
    }

    var deptInfo = dataUtils.findDeptInfo(deptId);
    if(deptInfo.children.length != 0){
        return {
            "code": "103301",
            "msg": "部门下存在下属部门，停用失败",
            "data": {}
        }
    }

    var userFlag = false;
    for(var i=0;i<data.userList.userinfo.length;i++){
        if(data.userList.userinfo[i].deptId == deptId){
            userFlag = true;
            break;
        }
    }
    if(userFlag){
        return {
            "code": "109901",
            "msg": "部门下存在用户，停用失败",
            "data": {}
        }
    }
    dataUtils.editDeptStatus(deptId, status);
    return {
        "code": "200",
        "msg": "success response",
        "data": {}
    }

}

function removeDept(req){
    let deptId = Number.parseInt(utils.getQuery(req.url, 'deptId'));
    if(!dataUtils.findDeptIdExist(deptId)){
        return {
            "msg": "不存在当前部门ID数据",
            "code": "106601",
            "data": {}
        }
    }
    var deptInfo = dataUtils.findDeptInfo(deptId);
    if(deptInfo.status){
        return {
            "msg": "未停用部门不可删除",
            "code": "100103",
            "data": {}
        }
    }
    dataUtils.editDeptDel(deptId);
    return {
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function getDeptList(req){
    let deptName = utils.getQuery(req.url, 'deptName');
    let status = Number.parseInt(utils.getQuery(req.url, 'status'));
    let pageSize = Number.parseInt(utils.getQuery(req.url, 'pageSize'));
    let pageNum = Number.parseInt(utils.getQuery(req.url, 'pageNum'))-1;
    let query = dataUtils.getDeptDetails();
    var [index, size, total] = [pageNum, pageSize, query.length];
    //总页数
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    var newDataList = query.slice(index * size, (index + 1) * size);
    if(deptName==""&&status==2){
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

function getDeptTree(req){
    var info = dataUtils.getDeptTreeInfo();
    return{
        "code": "200",
        "msg": "success response",
        "data": info
    }
}

export {
    addDept,
    editDept,
    changeDeptStatus,
    removeDept,
    getDeptList,
    getDeptTree
};