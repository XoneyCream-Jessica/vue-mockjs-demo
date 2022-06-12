import * as dataUtils from '../../../utils/dataUtils.js'
import * as utils from '../../../utils/utils.js'
import * as data from '../../../data/data.js'
import * as reg from '../../../utils/reg.js'

function getDictTypyList(req){
    var dictName = utils.getQuery(req.url, 'dictName');
    var dictType = utils.getQuery(req.url, 'dictType');
    var status = Number.parseInt(utils.getQuery(req.url, 'status'));
    var createStartTime = utils.getQuery(req.url, 'createStartTime');
    var createEndTime = utils.getQuery(req.url, 'createEndTime');
    var pageSize = Number.parseInt(utils.getQuery(req.url, 'pageSize'));
    var pageNum = Number.parseInt(utils.getQuery(req.url, 'pageNum'))-1;
    var query = [];
    for(var i=0;i<data.dictList.dictInfo.length;i++){
        if(data.dictList.dictInfo[i].delFlag == false){
            var tmpData = {
                "dictId": data.dictList.dictInfo[i].dictId,
                "dictName": data.dictList.dictInfo[i].dictName,
                "dictType": data.dictList.dictInfo[i].dictType,
                "status": data.dictList.dictInfo[i].status,
                "createTime": data.dictList.dictInfo[i].createTime,
                "remark": data.dictList.dictInfo[i].remark
            }
            query.push(tmpData);
        }
    }
    var [index, size, total] = [pageNum, pageSize, query.length]
    //总页数
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    var newDataList = query.slice(index * size, (index + 1) * size)
    if(dictName==""&&dictType==""&&status==2&&createStartTime==""&&createEndTime==""){
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

function addDictType(req){
    const {dictName,dictType,remark} = JSON.parse(req.body);
    if(dictName == ""){
        return{
            "code": "060001",
            "msg": "请输入字典名称",
            "data": {}
        }
    }
    if(dictType == ""){
        return{
            "code": "060002",
            "msg": "请输入字典类型",
            "data": {}
        }
    }
    if(reg.dictNameReg.test(dictName)==false){
        return{
            "code": "060003",
            "msg": "字典名称格式有误",
            "data": {}
        }
    }
    if(reg.dictTypeReg.test(dictType)==false){
        return{
            "code": "060004",
            "msg": "字典类型格式有误",
            "data": {}
        }
    }
    if(dataUtils.findDictType("dictName", dictName)!=-1){
        return{
            "code": "060101",
            "msg": "字典名称已存在",
            "data": {}
        }
    }
    if(dataUtils.findDictType("dictType", dictType)!=-1){
        return{
            "code": "060102",
            "msg": "字典类型已存在",
            "data": {}
        }
    }
    if(utils.getLen(remark) >= 500){
        return{
            "code": "060103",
            "msg": "备注长度超出限制",
            "data": {}
        }
    }
    var dictTypeInfo = {
        "dictId": data.dictList.dictInfo.length+1,
        "dictName": dictName,
        "dictType": dictType,
        "status": true,
        "createTime": utils.getNowFormatDate(),
        "remark": remark,
        "delFlag": false,
        "dictData": []
    }
    data.dictList.dictInfo.push(dictTypeInfo);
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function editDictType(req){
    const {dictId,dictName,dictType,remark} = JSON.parse(req.body);
    if(dataUtils.findDictType("dictId", dictId)==-1){
        return{
            "code": "066601",
            "msg": "不存在当前字典类型ID数据",
            "data": {}
        }
    }
    if(dictName == ""){
        return{
            "code": "060001",
            "msg": "请输入字典名称",
            "data": {}
        }
    }
    if(dictType == ""){
        return{
            "code": "060002",
            "msg": "请输入字典类型",
            "data": {}
        }
    }
    if(reg.dictNameReg.test(dictName)==false){
        return{
            "code": "060003",
            "msg": "字典名称格式有误",
            "data": {}
        }
    }
    if(reg.dictTypeReg.test(dictType)==false){
        return{
            "code": "060004",
            "msg": "字典类型格式有误",
            "data": {}
        }
    }
    if(dataUtils.findDictTypeExceptId("dictName", dictId, dictName)!=-1){
        return{
            "code": "060101",
            "msg": "字典名称已存在",
            "data": {}
        }
    }
    if(dataUtils.findDictTypeExceptId("dictType", dictId, dictType)!=-1){
        return{
            "code": "060102",
            "msg": "字典类型已存在",
            "data": {}
        }
    }
    if(utils.getLen(remark) >= 500){
        return{
            "code": "060103",
            "msg": "备注长度超出限制",
            "data": {}
        }
    }
    var index = dataUtils.findDictType("dictId", dictId);
    var dictTypeInfo = {
        "dictId": dictId,
        "dictName": dictName,
        "dictType": dictType,
        "status": true,
        "createTime": utils.getNowFormatDate(),
        "remark": remark,
        "delFlag": false,
        "dictData": []
    }
    data.dictList.dictInfo[index] = dictTypeInfo;
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function changeDictTypeStatus(req){
    const {dictId, status} = JSON.parse(req.body); //将传递进来的数据保存
    if(dataUtils.findDictType("dictId",dictId)==-1){
        return{
            "code": "066601",
	        "msg": "不存在此字典类型ID数据",
	        "data": {}
        }
    }
    if(dataUtils.findDictDataStatusByDictId(dictId) == 1){
        return{
            "code": "063301",
	        "msg": "字典类型下包含未停用的字典数据，停用失败",
	        "data": {}
        }
    }
    let index = dataUtils.findDictType("dictId",dictId);
    data.dictList.dictInfo[index].status = status;
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function removeDictType(req){
    let dictIds_ = utils.getQuery(req.url, 'dictIds');
    const dictIds = utils.splitStr(dictIds_);
    let idFlag = true;
    for(let i=0;i<dictIds.length;i++){
        if(dataUtils.findDictType("dictId",dictIds[i])==-1){
            idFlag = false;
            break;
        }
    }
    if(idFlag == false){
        return{
            "code": "066601",
            "msg": "不存在此字典类型ID数据",
            "data": {}    
        }
    }
    let statusFlag = true;
    for(let i=0;i<dictIds.length;i++){
        let index = dataUtils.findDictType("dictId",dictIds[i]);
        if(data.dictList.dictInfo[index].status == true){
            statusFlag = false;
        }
    }
    if(statusFlag == false){
        return{
            "code": "060104",
            "msg": "未停用字典不可删除",
            "data": {}    
        }
    }
    //删除
    for(let i=0;i<dictIds.length;i++){
        let index = dataUtils.findDictType("dictId",dictIds[i]);
        data.dictList.dictInfo[index].delFlag = true;
    }
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function refreshCache(req){
    return{
        "code": "200",
        "msg": "success response",
        "data":  {}
    }
}

function getDictDataList(req){
    var dictId = Number.parseInt(utils.getQuery(req.url, 'dictId'));
    var dictLabel = utils.getQuery(req.url, 'dictLabel');
    var status = Number.parseInt(utils.getQuery(req.url, 'status'));
    var pageSize = Number.parseInt(utils.getQuery(req.url, 'pageSize'));
    var pageNum = Number.parseInt(utils.getQuery(req.url, 'pageNum'))-1;
    var query = [];
    var dictTypeIndex = dataUtils.findDictType("dictId", dictId);
    for(var i=0;i<data.dictList.dictInfo[dictTypeIndex].dictData.length;i++){
        if(data.dictList.dictInfo[dictTypeIndex].dictData[i].delFlag == false){
            var tmpData = {
                "dictCode": data.dictList.dictInfo[dictTypeIndex].dictData[i].dictCode,
                "dictName": data.dictList.dictInfo[dictTypeIndex].dictData[i].dictName,
                "dictLabelZh": data.dictList.dictInfo[dictTypeIndex].dictData[i].dictLabelZh,
                "dictLabelEn": data.dictList.dictInfo[dictTypeIndex].dictData[i].dictLabelEn,
                "dictValue": data.dictList.dictInfo[dictTypeIndex].dictData[i].dictValue,
                "cssClass": data.dictList.dictInfo[dictTypeIndex].dictData[i].cssClass,
                "orderNum": data.dictList.dictInfo[dictTypeIndex].dictData[i].orderNum,
                "remark": data.dictList.dictInfo[dictTypeIndex].dictData[i].remark,
                "status": data.dictList.dictInfo[dictTypeIndex].dictData[i].status,
                "createTime": data.dictList.dictInfo[dictTypeIndex].dictData[i].createTime
            }
            query.push(tmpData);
        }
    }
    var [index, size, total] = [pageNum, pageSize, query.length]
    //总页数
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    var newDataList = query.slice(index * size, (index + 1) * size)
    if(dictLabel==""&&status==2){
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

function getDictNameList(req){
    var query = [];
    for(var i=0;i<data.dictList.dictInfo.length;i++){
        if(data.dictList.dictInfo[i].delFlag == false){
            var tmpData = {
                "dictId": data.dictList.dictInfo[i].dictId,
                "dictName": data.dictList.dictInfo[i].dictName
            };
            query.push(tmpData);
        } 
    }
    return{
        "code": "200",
        "msg": "success response",
        "data": query
    }
}

function addData(req){
    const {dictId,dictLabelZh,dictLabelEn,dictValue,cssClass,orderNum,remark} = JSON.parse(req.body);
    if(dataUtils.findDictType("dictId", dictId)==-1){
        return{
            "code": "074402",
            "msg": "不存在当前字典类型ID数据",
            "data": {}
        }
    }
    if(dictLabelZh == ""){
        return{
            "code": "070001",
            "msg": "请输入中文标签",
            "data": {}
        }
    }
    if(dictLabelEn == ""){
        return{
            "code": "070002",
            "msg": "请输入英文标签",
            "data": {}
        }
    }
    if(orderNum == ""){
        return{
            "code": "070004",
            "msg": "请输入显示顺序",
            "data": {}
        }
    }
    if(reg.dictDataLabelZn.test(dictLabelZh) == false){
        return{
            "code": "070006",
            "msg": "中文标签格式有误",
            "data": {}
        }
    }
    if(reg.dictDataLabelEn.test(dictLabelEn) == false){
        return{
            "code": "070007",
            "msg": "英文标签格式有误",
            "data": {}
        }
    }
    if(!(dictValue>=0&&dictValue<=99)){
        return{
            "code": "070009",
            "msg": "数据键值格式有误",
            "data": {}
        }
    }
    if(reg.cssClass.test(cssClass) == false){
        return{
            "code": "070008",
            "msg": "样式属性格式有误",
            "data": {}
        }
    }
    if(orderNum<1 || orderNum>9999){
        return{
            "code": "070005",
            "msg": "显示顺序输入格式有误",
            "data": {}
        }
    }
    if(utils.getLen(remark) >= 500){
        return{
            "code": "070104",
            "msg": "备注长度超出限制",
            "data": {}
        }
    }
    if(dataUtils.findDictData("dictLabelZh",dictLabelZh) != -1){
        return{
            "code": "070101",
            "msg": "中文标签已存在",
            "data": {}
        }
    }
    if(dataUtils.findDictData("dictLabelEn", dictLabelEn) != -1){
        return{
            "code": "070102",
            "msg": "英文标签已存在",
            "data": {}
        }
    }
    var index = dataUtils.findDictType("dictId", dictId);
    var ans = -1;
    for(var i=0;i<data.dictList.dictInfo[index].dictData.length;i++){
        if(data.dictList.dictInfo[index].dictData[i].dictValue == dictValue && data.dictList.dictInfo[index].dictData[i].delFlag == false){
            ans = i;
            break;
        }
    }
    if(ans != -1){
        return{
            "code": "070103",
            "msg": "数据键值已存在",
            "data": {}
        }
    }
    var dictDatas = dataUtils.getAllDictData();
    var tmpData = {
        "dictCode": dictDatas[dictDatas.length-1].dictCode+1,
        "dictName": data.dictList.dictInfo[index].dictName,
        "dictLabelZh": dictLabelZh,
        "dictLabelEn": dictLabelEn,
        "dictValue": dictValue,
        "cssClass": cssClass,
        "orderNum": orderNum,
        "remark": remark,
        "status": true,
        "createTime": utils.getNowFormatDate(),
        "delFlag": false
    }
    data.dictList.dictInfo[index].dictData.push(tmpData);
    return {
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function editData(req){
    const {dictCode,dictLabelZh,dictLabelEn,dictValue,cssClass,orderNum,remark} = JSON.parse(req.body);
    var dictDatas = dataUtils.getAllDictData();
    var codeIndex = -1;
    for(var i=0;i<dictDatas.length;i++){
        if(dictDatas[i].dictCode == dictCode){
            codeIndex = i;
            break;
        }
    }
    if(codeIndex == -1){
        return{
            "code": "076601",
            "msg": "不存在当前字典code数据",
            "data": {}
        }
    }
    if(dictLabelZh == ""){
        return{
            "code": "070001",
            "msg": "请输入中文标签",
            "data": {}
        }
    }
    if(dictLabelEn == ""){
        return{
            "code": "070002",
            "msg": "请输入英文标签",
            "data": {}
        }
    }
    if(orderNum == ""){
        return{
            "code": "070004",
            "msg": "请输入显示顺序",
            "data": {}
        }
    }
    if(reg.dictDataLabelZn.test(dictLabelZh) == false){
        return{
            "code": "070006",
            "msg": "中文标签格式有误",
            "data": {}
        }
    }
    if(reg.dictDataLabelEn.test(dictLabelEn) == false){
        return{
            "code": "070007",
            "msg": "英文标签格式有误",
            "data": {}
        }
    }
    if(!(dictValue>=0&&dictValue<=99)){
        return{
            "code": "070009",
            "msg": "数据键值格式有误",
            "data": {}
        }
    }
    if(reg.cssClass.test(cssClass) == false){
        return{
            "code": "070008",
            "msg": "样式属性格式有误",
            "data": {}
        }
    }
    if(orderNum<1 || orderNum>9999){
        return{
            "code": "070005",
            "msg": "显示顺序输入格式有误",
            "data": {}
        }
    }
    if(utils.getLen(remark) >= 500){
        return{
            "code": "070104",
            "msg": "备注长度超出限制",
            "data": {}
        }
    }
    if(dataUtils.findDictDataExceptId("dictLabelZh", dictCode, dictLabelZh) != -1){
        return{
            "code": "070101",
            "msg": "中文标签已存在",
            "data": {}
        }
    }
    if(dataUtils.findDictDataExceptId("dictLabelEn", dictCode, dictLabelEn) != -1){
        return{
            "code": "070102",
            "msg": "英文标签已存在",
            "data": {}
        }
    }
    var dataIndex = dataUtils.findDictData("dictCode", dictCode);
    var dictName = "";
    for(var i=0;i<dictDatas.length;i++){
        if(dictDatas[i].dictCode == dictCode){
            dictName = dictDatas[i].dictName;
        }
    }
    var index = dataUtils.findDictType("dictName", dictName);
    var ans = -1;
    for(var i=0;i<data.dictList.dictInfo[index].dictData.length;i++){
        if(data.dictList.dictInfo[index].dictData[i].dictValue == dictValue){
            if(data.dictList.dictInfo[index].dictData[i].dictCode == dictCode){
                continue;
            }else{
                ans = i;
                break;
            }
        }
    }
    if(ans != -1){
        return{
            "code": "070103",
            "msg": "数据键值已存在",
            "data": {}
        }
    }
    data.dictList.dictInfo[index].dictData[dataIndex].dictLabelZh = dictLabelZh;
    data.dictList.dictInfo[index].dictData[dataIndex].dictLabelEn = dictLabelEn;
    data.dictList.dictInfo[index].dictData[dataIndex].dictValue = dictValue;
    data.dictList.dictInfo[index].dictData[dataIndex].cssClass = cssClass;
    data.dictList.dictInfo[index].dictData[dataIndex].orderNum = orderNum;
    data.dictList.dictInfo[index].dictData[dataIndex].remark = remark;
    return {
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function changeDictDataStatus(req){
    const {dictCode, status} = JSON.parse(req.body);
    var dictDatas = dataUtils.getAllDictData();
    var codeIndex = -1;
    for(var i=0;i<dictDatas.length;i++){
        if(dictDatas[i].dictCode == dictCode){
            codeIndex = i;
            break;
        }
    }
    if(codeIndex == -1){
        return{
            "code": "076601",
            "msg": "不存在当前字典code数据",
            "data": {}
        }
    }
    var dataIndex = dataUtils.findDictData("dictCode", dictCode);
    var dictName = "";
    for(var i=0;i<dictDatas.length;i++){
        if(dictDatas[i].dictCode == dictCode){
            dictName = dictDatas[i].dictName;
        }
    }
    var index = dataUtils.findDictType("dictName", dictName);
    data.dictList.dictInfo[index].dictData[dataIndex].status = status;
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

function removeDictData(req){
    let dictCodes_ = utils.getQuery(req.url, 'dictCodes');
    const dictCodes = utils.splitStr(dictCodes_);
    var dictDatas = dataUtils.getAllDictData();
    for(var i=0;i<dictCodes.length;i++){
        var dataIndex = dataUtils.findDictData("dictCode", dictCodes[i]);
        for(var j=0;j<dictDatas.length;j++){
            if(dictDatas[j].dictCode == dictCodes[i]){
                var dictName = dictDatas[j].dictName;
            }
        }
        var index = dataUtils.findDictType("dictName", dictName);
        if(data.dictList.dictInfo[index].dictData[dataIndex].status == true){
            return{
                "code": "070105",
                "msg": "未停用字典数据不可删除",
                "data": {}
            }
        }
        data.dictList.dictInfo[index].dictData[dataIndex].delFlag = true;  
    }
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

export {
    getDictTypyList,
    addDictType,
    editDictType,
    changeDictTypeStatus,
    removeDictType,
    refreshCache,
    getDictDataList,
    getDictNameList,
    addData,
    editData,
    changeDictDataStatus,
    removeDictData
};