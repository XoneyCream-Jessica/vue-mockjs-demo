import * as dataUtils from '../../../utils/dataUtils.js'
import * as utils from '../../../utils/utils.js'
import * as data from '../../../data/data.js'
import * as reg from '../../../utils/reg.js'

function getMenuList(req){
    let menuName = utils.getQuery(req.url, 'menuName');
    let status = Number.parseInt(utils.getQuery(req.url, 'status'));
    let pageSize = Number.parseInt(utils.getQuery(req.url, 'pageSize'));
    let pageNum = Number.parseInt(utils.getQuery(req.url, 'pageNum'))-1;
    let query = [];
    for(let i=0;i<data.menuList.menuInfo.length;i++){
        if(data.menuList.menuInfo[i].delFlag == false){
            let tmpData = {
                "icon": data.menuList.menuInfo[i].icon,
                "perm": data.menuList.menuInfo[i].perm,
                "status": data.menuList.menuInfo[i].status,
                "visible": data.menuList.menuInfo[i].visible,
                "isCache": data.menuList.menuInfo[i].isCache,
                "isFrame": data.menuList.menuInfo[i].isFrame,
                "query": data.menuList.menuInfo[i].query,
                "component": data.menuList.menuInfo[i].component,
                "menuId": data.menuList.menuInfo[i].menuId,
                "menuNameEn": data.menuList.menuInfo[i].menuNameEn,
                "menuNameZh": data.menuList.menuInfo[i].menuNameZh,
                "path": data.menuList.menuInfo[i].path,
                "orderNum": data.menuList.menuInfo[i].orderNum,
                "menuType": data.menuList.menuInfo[i].menuType,
                "parentId": data.menuList.menuInfo[i].parentId,
                "children": data.menuList.menuInfo[i].children,
                "createTime": data.menuList.menuInfo[i].createTime
            }
            query.push(tmpData);
        }
    }
    var [index, size, total] = [pageNum, pageSize, query.length]
    //总页数
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    var newDataList = query.slice(index * size, (index + 1) * size)
    if(menuName==""&&status==2){
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

function addMenu(req){
    const {menuType,path,parentId,orderNum,isFrame,menuNameZh,menuNameEn,component,perm,query,isCache,visible,status,icon} = JSON.parse(req.body);
    if(!(menuType == 0 || menuType == 1)){
        return {
            "code": "080001",
            "msg": "菜单类型错误",
            "data": {}
        }
    }
    if(path == ""){
        return {
            "code": "080002",
            "msg": "请输入路由地址",
            "data": {}
        }
    }
    //新增为目录
    if(menuType == 0){
        if(icon == ""){
            return {
                "code": "080014",
                "msg": "请选择菜单图标",
                "data": {}
            }
        }
        if(orderNum == ""){
            return {
                "code": "080005",
                "msg": "请设置显示排序值",
                "data": {}
            }
        }
        if(menuNameZh == ""){
            return {
                "code": "080007",
                "msg": "请输入中文名称",
                "data": {}
            }
        }
        if(menuNameEn == ""){
            return {
                "code": "080009",
                "msg": "请输入英文名称",
                "data": {}
            }
        }
        if(utils.getLen(path, false) > 200){
            return {
                "code": "080003",
                "msg": "路由地址不合法",
                "data": {}
            }
        }
        if(!(orderNum>=1&&orderNum<=9999)){
            return{
                "code": "080006",
                "msg": "显示顺序输入格式有误",
                "data": {}
            }
        }
        if(!reg.menuNameZhReg.test(menuNameZh)){
            return {
                "code": "080008",
                "msg": "中文名称格式错误",
                "data": {}
            }
        }
        if(!reg.menuNameEnReg.test(menuNameEn)){
            return {
                "code": "080010",
                "msg": "英文名称格式错误",
                "data": {}
            }
        }
        if(dataUtils.findMenu("menuNameZh", menuNameZh)!=-1){
            return {
                "code": "080101",
                "msg": "菜单中文名称已存在",
                "data": {}
            }
        }
        if(dataUtils.findMenu("menuNameEn", menuNameEn)!=-1){
            return {
                "code": "080102",
                "msg": "菜单英文名称已存在",
                "data": {}
            }
        }
        let tmpData = {
            "icon": icon,
            "perm": perm,
            "isCache": isCache,
            "query": query,
            "path": path,
            "status": status,
            "visible": visible,
            "isFrame":isFrame,
            "menuId": dataUtils.findMenuMaxId() + 1,
            "menuNameEn": menuNameEn,
            "menuNameZh": menuNameZh,
            "orderNum": orderNum,
            "menuType": menuType,
            "component": component,
            "delFlag": false,
		    "parentId": 0,
            "children": []
        }
        data.menuList.menuInfo.push(tmpData);
        console.log(data.menuList.menuInfo);
        return {
            "code": "200",
            "msg": "success response",
            "data": {}
        }
    }
    if(menuType == 1){
        if(parentId == ""){
            return {
                "code": "080004",
                "msg": "请选择上级菜单",
                "data": {}
            }
        }
        if(icon == ""){
            return {
                "code": "080014",
                "msg": "请选择菜单图标",
                "data": {}
            }
        }
        if(orderNum == ""){
            return {
                "code": "080005",
                "msg": "请设置显示排序值",
                "data": {}
            }
        }
        if(menuNameZh == ""){
            return {
                "code": "080007",
                "msg": "请输入中文名称",
                "data": {}
            }
        }
        if(menuNameEn == ""){
            return {
                "code": "080009",
                "msg": "请输入英文名称",
                "data": {}
            }
        }
        if(perm == ""){
            return {
                "code": "080012",
                "msg": "请输入权限字符",
                "data": {}
            }
        }
        if(utils.getLen(path, false) > 200){
            return {
                "code": "080003",
                "msg": "路由地址不合法",
                "data": {}
            }
        }
        if(!(orderNum>=1&&orderNum<=9999)){
            return{
                "code": "080006",
                "msg": "显示顺序输入格式有误",
                "data": {}
            }
        }        
        if(!reg.menuNameZhReg.test(menuNameZh)){
            return {
                "code": "080008",
                "msg": "中文名称格式错误",
                "data": {}
            }
        }
        if(!reg.menuNameEnReg.test(menuNameEn)){
            return {
                "code": "080010",
                "msg": "英文名称格式错误",
                "data": {}
            }
        }
        if(!reg.componentReg.test(component)){
            return {
                "code": "080011",
                "msg": "组件路径格式错误",
                "data": {}
            }
        }
        if(!reg.permReg.test(perm)){
            return {
                "code": "080013",
                "msg": "权限字符格式错误",
                "data": {}
            }
        }
        if(dataUtils.findSubMenu("menuNameZh", menuNameZh)!=-1){
            return {
                "code": "080101",
                "msg": "菜单中文名称已存在",
                "data": {}
            }
        }
        if(dataUtils.findSubMenu("menuNameEn", menuNameEn)!=-1){
            return {
                "code": "080102",
                "msg": "菜单英文名称已存在",
                "data": {}
            }
        }
        if(dataUtils.findSubMenu("perm", perm)!=-1){
            return {
                "code": "080103",
                "msg": "权限字符已存在",
                "data": {}
            }
        }
        if(dataUtils.findMenu("menuId", parentId)==-1){
            return {
                "code": "080104",
                "msg": "上级目录不存在",
                "data": {}
            }
        }
        let index = dataUtils.findMenu("menuId", parentId);
        let tmpData = {
            "icon": icon,
            "perm": perm,
            "isCache": isCache,
            "query": query,
            "path": path,
            "status": status,
            "visible": visible,
            "isFrame":isFrame,
            "menuId": dataUtils.findMenuMaxId() + 1,
            "menuNameEn": menuNameEn,
            "menuNameZh": menuNameZh,
            "orderNum": orderNum,
            "menuType": menuType,
            "component": component,
            "delFlag": false,
		    "parentId": parentId,
            "children": []
        }
        data.menuList.menuInfo[index].children.push(tmpData);
        console.log(data.menuList.menuInfo);
        return {
            "code": "200",
            "msg": "success response",
            "data": {}
        }
    }
}

function editMenu(req){
    const {menuId,menuType,path,parentId,orderNum,isFrame,menuNameZh,menuNameEn,component,perm,query,isCache,visible,status,icon} = JSON.parse(req.body);
    if(dataUtils.findMenuId(menuId) == -1){
        return {
            "code": "086601",
            "msg": "不存在当前菜单ID数据",
            "data": {}
        }
    }
    if(!(menuType == 0 || menuType == 1)){
        return {
            "code": "080001",
            "msg": "菜单类型错误",
            "data": {}
        }
    }
    if(path == ""){
        return {
            "code": "080002",
            "msg": "请输入路由地址",
            "data": {}
        }
    }
    //新增为目录
    if(menuType == 0){
        if(icon == ""){
            return {
                "code": "080014",
                "msg": "请选择菜单图标",
                "data": {}
            }
        }
        if(orderNum == ""){
            return {
                "code": "080005",
                "msg": "请设置显示排序值",
                "data": {}
            }
        }
        if(menuNameZh == ""){
            return {
                "code": "080007",
                "msg": "请输入中文名称",
                "data": {}
            }
        }
        if(menuNameEn == ""){
            return {
                "code": "080009",
                "msg": "请输入英文名称",
                "data": {}
            }
        }
        if(utils.getLen(path, false) > 200){
            return {
                "code": "080003",
                "msg": "路由地址不合法",
                "data": {}
            }
        }
        if(!(orderNum>=1&&orderNum<=9999)){
            return{
                "code": "080006",
                "msg": "显示顺序输入格式有误",
                "data": {}
            }
        }
        if(!reg.menuNameZhReg.test(menuNameZh)){
            return {
                "code": "080008",
                "msg": "中文名称格式错误",
                "data": {}
            }
        }
        if(!reg.menuNameEnReg.test(menuNameEn)){
            return {
                "code": "080010",
                "msg": "英文名称格式错误",
                "data": {}
            }
        }
        if(dataUtils.findMenuExceptId("menuNameZh", menuId, menuNameZh)!=-1){
            return {
                "code": "080101",
                "msg": "菜单中文名称已存在",
                "data": {}
            }
        }
        if(dataUtils.findMenuExceptId("menuNameEn", menuId, menuNameEn)!=-1){
            return {
                "code": "080102",
                "msg": "菜单英文名称已存在",
                "data": {}
            }
        }
        let index = dataUtils.findMenu("menuId", menuId);
        data.menuList.menuInfo[index].menuId = menuId;
        data.menuList.menuInfo[index].icon = icon;
        data.menuList.menuInfo[index].perm = perm;
        data.menuList.menuInfo[index].isCache = isCache;
        data.menuList.menuInfo[index].query = query;
        data.menuList.menuInfo[index].path = path;
        data.menuList.menuInfo[index].status = status;
        data.menuList.menuInfo[index].visible = visible;
        data.menuList.menuInfo[index].isFrame = isFrame;
        data.menuList.menuInfo[index].menuNameEn = menuNameEn;
        data.menuList.menuInfo[index].menuNameZh = menuNameZh;
        data.menuList.menuInfo[index].orderNum = orderNum;
        data.menuList.menuInfo[index].menuType = menuType;
        data.menuList.menuInfo[index].parentId = parentId;
        data.menuList.menuInfo[index].component = component;
        console.log(data.menuList.menuInfo);
        return {
            "code": "200",
            "msg": "success response",
            "data": {}
        }
    }
    if(menuType == 1){
        if(parentId == ""){
            return {
                "code": "080004",
                "msg": "请选择上级菜单",
                "data": {}
            }
        }
        if(icon == ""){
            return {
                "code": "080014",
                "msg": "请选择菜单图标",
                "data": {}
            }
        }
        if(orderNum == ""){
            return {
                "code": "080005",
                "msg": "请设置显示排序值",
                "data": {}
            }
        }
        if(menuNameZh == ""){
            return {
                "code": "080007",
                "msg": "请输入中文名称",
                "data": {}
            }
        }
        if(menuNameEn == ""){
            return {
                "code": "080009",
                "msg": "请输入英文名称",
                "data": {}
            }
        }
        if(perm == ""){
            return {
                "code": "080012",
                "msg": "请输入权限字符",
                "data": {}
            }
        }
        if(utils.getLen(path, false) > 200){
            return {
                "code": "080003",
                "msg": "路由地址不合法",
                "data": {}
            }
        }
        if(!(orderNum>=1&&orderNum<=9999)){
            return{
                "code": "080006",
                "msg": "显示顺序输入格式有误",
                "data": {}
            }
        }        
        if(!reg.menuNameZhReg.test(menuNameZh)){
            return {
                "code": "080008",
                "msg": "中文名称格式错误",
                "data": {}
            }
        }
        if(!reg.menuNameEnReg.test(menuNameEn)){
            return {
                "code": "080010",
                "msg": "英文名称格式错误",
                "data": {}
            }
        }
        if(!reg.componentReg.test(component)){
            return {
                "code": "080011",
                "msg": "组件路径格式错误",
                "data": {}
            }
        }
        if(!reg.permReg.test(perm)){
            return {
                "code": "080013",
                "msg": "权限字符格式错误",
                "data": {}
            }
        }
        if(dataUtils.findSubMenuExceptId("menuNameZh", menuId, menuNameZh)!=-1){
            return {
                "code": "080101",
                "msg": "菜单中文名称已存在",
                "data": {}
            }
        }
        if(dataUtils.findSubMenuExceptId("menuNameEn", menuId, menuNameEn)!=-1){
            return {
                "code": "080102",
                "msg": "菜单英文名称已存在",
                "data": {}
            }
        }
        if(dataUtils.findSubMenuExceptId("perm", menuId, perm)!=-1){
            return {
                "code": "080103",
                "msg": "权限字符已存在",
                "data": {}
            }
        }
        if(dataUtils.findMenu("menuId", parentId)==-1){
            return {
                "code": "080104",
                "msg": "上级目录不存在",
                "data": {}
            }
        }
        let parentIndex = dataUtils.findMenu("menuId", parentId);
        let subIndex = dataUtils.findSubMenu("menuId", menuId);
        data.menuList.menuInfo[parentIndex].children[subIndex].menuId = menuId;
        data.menuList.menuInfo[parentIndex].children[subIndex].icon = icon;
        data.menuList.menuInfo[parentIndex].children[subIndex].perm = perm;
        data.menuList.menuInfo[parentIndex].children[subIndex].isCache = isCache;
        data.menuList.menuInfo[parentIndex].children[subIndex].query = query;
        data.menuList.menuInfo[parentIndex].children[subIndex].path = path;
        data.menuList.menuInfo[parentIndex].children[subIndex].status = status;
        data.menuList.menuInfo[parentIndex].children[subIndex].visible = visible;
        data.menuList.menuInfo[parentIndex].children[subIndex].isFrame = isFrame;
        data.menuList.menuInfo[parentIndex].children[subIndex].menuNameEn = menuNameEn;
        data.menuList.menuInfo[parentIndex].children[subIndex].menuNameZh = menuNameZh;
        data.menuList.menuInfo[parentIndex].children[subIndex].orderNum = orderNum;
        data.menuList.menuInfo[parentIndex].children[subIndex].menuType = menuType;
        data.menuList.menuInfo[parentIndex].children[subIndex].parentId = parentId;
        data.menuList.menuInfo[parentIndex].children[subIndex].component = component;

        console.log(data.menuList.menuInfo);
        return {
            "code": "200",
            "msg": "success response",
            "data": {}
        }
    }
}

function changeStatus(req){
    const {menuId, status} = JSON.parse(req.body);
    if(dataUtils.findMenu("menuId", menuId) == -1 && dataUtils.findSubMenu("menuId", menuId) == -1){
        return {
            "code": "086601",
            "msg": "不存在当前菜单ID数据",
            "data": {}
        }
    }
    var parentIndex = dataUtils.findMenu("menuId", menuId);
    if(parentIndex != -1){
        if(data.menuList.menuInfo[parentIndex].children.length != 0){
            return {
                "code": "083301",
                "msg": "目录下包含菜单，停用失败",
                "data": {}
            }
        }
        data.menuList.menuInfo[parentIndex].status = status;
        return {
            "code": "200",
            "msg": "success response",
            "data":  {}
        }
    }else{
        var menuIds = [];
        const macSet = new Set();
        for(var i=0;i<data.roleList.roleInfo.length;i++){
            for(var j=0;j<data.roleList.roleInfo[i].menuList.length;j++){
                macSet.add(data.roleList.roleInfo[i].menuList[j].menuId);
                for(var k=0;k<data.roleList.roleInfo[i].menuList[j].children.length;k++){
                    macSet.add(data.roleList.roleInfo[i].menuList[j].children[k].menuId);
                }
            }
        }
        macSet.forEach(t=>{
            menuIds.push(t);
        })
        var flag = false;
        for(var i=0;i<menuIds.length;i++){
            if(menuId == menuIds[i]){
                flag = true;
                break;
            }
        }
        if(flag == true){
            return {
                "code": "089901",
                "msg": "菜单使用中，停用失败",
                "data": {}
            }
        }
        for(var i=0;i<data.menuList.menuInfo.length;i++){
            for(var j=0;j<data.menuList.menuInfo[i].children.length;j++){
                if(data.menuList.menuInfo[i].children[j].menuId == menuId){
                    data.menuList.menuInfo[i].children[j].status = status;
                    return {
                        "code": "200",
                        "msg": "success response",
                        "data":  {}
                    }
                }
            }
        }
    }
}

function remove(req){
    let menuId = utils.getQuery(req.url, 'menuId');
    if(dataUtils.findMenu("menuId", menuId) == -1 && dataUtils.findSubMenu("menuId", menuId) == -1){
        return {
            "code": "086601",
            "msg": "不存在当前菜单ID数据",
            "data": {}
        }
    }
    var parentIndex = dataUtils.findMenu("menuId", menuId);
    if(parentIndex != -1){
        if(data.menuList.menuInfo[parentIndex].status == true){
            return {
                "code": "080105",
                "msg": "未停用菜单不可删除",
                "data": {}
            }
        }
        data.menuList.menuInfo[parentIndex].delFlag = true;
        return {
            "code": "200",
            "msg": "success response",
            "data":  {}
        }
    }else{
        for(var i=0;i<data.menuList.menuInfo.length;i++){
            for(var j=0;j<data.menuList.menuInfo[i].children.length;j++){
                if(data.menuList.menuInfo[i].children[j].menuId == menuId){
                    if(data.menuList.menuInfo[i].children[j].status == true){
                        return {
                            "code": "080105",
                            "msg": "未停用菜单不可删除",
                            "data": {}
                        }
                    }
                    data.menuList.menuInfo[i].children[j].delFlag = true;
                    return {
                        "code": "200",
                        "msg": "success response",
                        "data":  {}
                    }
                }
            }
        }
    }
}

function getParentList(req){
    let parentData = [];
    for(var i=0;i<data.menuList.menuInfo.length;i++){
        let tmpData = {
            "menuId": data.menuList.menuInfo[i].menuId,
            "menuNameEn": data.menuList.menuInfo[i].menuNameEn,
            "menuNameZh": data.menuList.menuInfo[i].menuNameZh,
        }
        parentData.push(tmpData);
    }
    return {
        "code": "200",
        "msg": "success response",
        "data": parentData
    }
}

export {
    getMenuList,
    addMenu,
    editMenu,
    changeStatus,
    remove,
    getParentList
};