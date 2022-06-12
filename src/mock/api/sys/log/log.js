import * as dataUtils from '../../../utils/dataUtils.js'
import * as utils from '../../../utils/utils.js'
import * as data from '../../../data/data.js'
import * as reg from '../../../utils/reg.js'

function getLoginLogList(req){
    console.log(req.url);
    var userName = utils.getQuery(req.url, 'userName');
    var status = Number.parseInt(utils.getQuery(req.url, 'status'));
    var loginIp = utils.getQuery(req.url, 'loginIp');
    var acceseStartTime = utils.getQuery(req.url, 'acceseStartTime');
    var accessEndTime = utils.getQuery(req.url, 'accessEndTime');
    var pageSize = Number.parseInt(utils.getQuery(req.url, 'pageSize'));
    var pageNum = Number.parseInt(utils.getQuery(req.url, 'pageNum'))-1;
    var query = [];
    for(var i=0;i<data.loginLogList.loginLog.length;i++){
        if(data.loginLogList.loginLog[i].delFlag == false){
            var userIndex = dataUtils.findUser("userId", data.loginLogList.loginLog[i].userId);
            var tmpData = {
                "userName": data.userList.userinfo[userIndex].userName,
                "infoId": data.loginLogList.loginLog[i].infoId,
                "userId": data.loginLogList.loginLog[i].userId,
                "ipAddr": data.loginLogList.loginLog[i].ipAddr,
                "ipLocation": data.loginLogList.loginLog[i].ipLocation,
                "osName": data.loginLogList.loginLog[i].osName,
                "browser": data.loginLogList.loginLog[i].browser,
                "status": data.loginLogList.loginLog[i].status,
                "msg": data.loginLogList.loginLog[i].msg,
                "accessTime":data.loginLogList.loginLog[i].accessTime
            }
            query.push(tmpData);
        }
    }
    var [index, size, total] = [pageNum, pageSize, query.length]
    //总页数
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    var newDataList = query.slice(index * size, (index + 1) * size)
    if(userName==""&&loginIp==""&&status==2&&acceseStartTime==""&&accessEndTime==""){
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

function getOperationList(req){
    console.log(req.url);
    var title = utils.getQuery(req.url, 'title');
    var status = Number.parseInt(utils.getQuery(req.url, 'status'));
    var businessType = Number.parseInt(utils.getQuery(req.url, 'businessType'));
    var operStartTime = utils.getQuery(req.url, 'operStartTime');
    var operEndTime = utils.getQuery(req.url, 'operEndTime');
    var pageSize = Number.parseInt(utils.getQuery(req.url, 'pageSize'));
    var pageNum = Number.parseInt(utils.getQuery(req.url, 'pageNum'))-1;
    var query = [];
    for(var i=0;i<data.operationLogList.operationLogInfo.length;i++){
        if(data.operationLogList.operationLogInfo[i].delFlag == false){
            var tmpData = {
                "operId": data.operationLogList.operationLogInfo[i].operId,
                "title": data.operationLogList.operationLogInfo[i].title,
                "businessType": data.operationLogList.operationLogInfo[i].businessType,
                "requestMethod": data.operationLogList.operationLogInfo[i].requestMethod,
                "operName": data.operationLogList.operationLogInfo[i].operName,
                "operIp": data.operationLogList.operationLogInfo[i].operIp,
                "operLocation": data.operationLogList.operationLogInfo[i].operLocation,
                "status": data.operationLogList.operationLogInfo[i].status,
                "operTime":data.operationLogList.operationLogInfo[i].operTime
            }
            query.push(tmpData);
        }
    }
    var [index, size, total] = [pageNum, pageSize, query.length]
    //总页数
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    var newDataList = query.slice(index * size, (index + 1) * size)
    if(title==""&&businessType==0&&status==2&&operStartTime==""&&operEndTime==""){
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

function remove(req){
    var logType = Number.parseInt(utils.getQuery(req.url, 'logType'));
    var logIds_ = utils.getQuery(req.url, 'ids');
    var logId;
    if(logIds_ == ""){
        logId = [];
    }else{
        logId = utils.splitStr(logIds_);
    }
    var idFlag = true;
    if(logId.length != 0){
        for(var i=0;i<logId.length;i++){
            if(logType == 0){
                if(dataUtils.findLog("infoId",logId[i], 0)==-1){
                    idFlag = false;
                    break;
                }
            }else if(logType == 1){
                if(dataUtils.findLog("operId",logId[i], 1)==-1){
                    idFlag = false;
                    break;
                }
            }
        }
        if(idFlag == false){
            return{
                "code": "056601",
                "msg": "不存在当前日志ID数据",
                "data": {}    
            }
        }
    }
    if(logType == 0){
        if(logId.length == 0){
            for(var i=0;i<data.loginLogList.loginLog.length;i++){
                data.loginLogList.loginLog[i].delFlag = true;
            }
        }else{
            for(var i=0;i<logId.length;i++){
                var index = dataUtils.findLog("infoId", logId[i], 0);
                data.loginLogList.loginLog[index].delFlag = true;
            }
        } 
    }else if(logType == 1){
        if(logId.length == 0){
            for(var i=0;i<data.operationLogList.operationLogInfo.length;i++){
                data.operationLogList.operationLogInfo[i].delFlag = true;
            }
        }else{
            for(var i=0;i<logId.length;i++){
                var index = dataUtils.findLog("operId", logId[i], 1);
                data.operationLogList.operationLogInfo[index].delFlag = true;
            }
        } 
    }

    if(logType == 0){
        console.log(data.loginLogList.loginLog);
    }else{
        console.log(data.operationLogList.operationLogInfo);
    }
    
    return{
        "code": "200",
        "msg": "success response",
        "data": {}
    }
}

export {
    getLoginLogList,
    getOperationList,
    remove
};