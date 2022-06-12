import * as dataUtils from '../../utils/dataUtils.js'
import * as utils from '../../utils/utils.js'
import * as data from '../../data/data.js'
import * as reg from '../../utils/reg.js'

function getDictConfig(req){
    var templateType = utils.getQuery(req.url, 'templateType');
    var index = dataUtils.findDictType("dictType", templateType);
    if(index == -1){
        return {
            "code": "046601",
            "msg": "不存在该字典类型",
            "data": {}
        }
    }
    var dataList = [];
    for(var i=0;i<data.dictList.dictInfo[index].dictData.length;i++){
        var tmpData = {
            "dictCode": data.dictList.dictInfo[index].dictData[i].dictCode, 
            "dictLabelZn": data.dictList.dictInfo[index].dictData[i].dictLabelZh, 
            "dictLabelEn": data.dictList.dictInfo[index].dictData[i].dictLabelEn,
            "dictValue": data.dictList.dictInfo[index].dictData[i].dictValue
        };
        dataList.push(tmpData);
    }
    return {
        "code": "200",
        "msg": "success response",
        "data": dataList
    }
}

export {
    getDictConfig
};