
function findData(fromFile,attr,dst){

    var index = -1;
    var obj = JSON.parse(fromFile);
    for(var key in obj.userInfo) {
        index ++;
        if(obj.userInfo[key][attr] == dst){
            return index;
        }
    }
    return -1;
}

function appendData(fromFile,dst){

    var obj = JSON.parse(fromFile);
    obj.userInfo.push(dst);
    return JSON.stringify(obj);
}

function modifyData(fromFile,attr,dst,toDst){

    var obj = JSON.parse(fromFile);
    for(var key in obj.userInfo) {
        if(obj.userInfo[key][attr] == dst){
            obj.userInfo[key][attr] = toDst;
            break ;
        }
    }
    return JSON.stringify(obj);
}

function delData(fromFile,attr,dst){

    var obj = JSON.parse(fromFile);
    for(var key in obj.userInfo) {
        index ++;
        if(obj.userInfo[key][attr] == dst){
            obj.userInfo.splice(index,1);
            break ;
        }
    }
    return JSON.stringify(obj);
}

module.exports = {
    findData,
    appendData,
    modifyData,
    delData
};