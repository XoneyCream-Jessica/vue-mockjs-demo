var getQuery = (url, name) => {
  const index = url.indexOf("?");
  if (index !== -1) {
      const queryStrArr = url.substr(index + 1).split("&");
      for (var i = 0; i < queryStrArr.length; i++) {
          const itemArr = queryStrArr[i].split("=");
          if (itemArr[0] === name) {
              return itemArr[1];
          }
      }
  }
  return null;
};

function splitStr(str){
    let str_ = str.split(',')
    for(let i=0;i<str_.length;i++){
        str_[i] = Number.parseInt(str_[i]);
    }
    return str_;
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if(month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if(strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + date.getHours() + seperator2 + date.getMinutes() +
        seperator2 + date.getSeconds();
    return currentdate;
}

/**
 * 使用spilt方法实现模糊查询
 * @param  {Array}  list     进行查询的数组
 * @param  {String} keyWord  查询的关键词
 * @return {Array}           查询的结果
 */
function fuzzyQuery(list, keyWord) {
    var arr = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].split(keyWord).length > 1) {
        arr.push(list[i]);
        }
    }
    return arr;
}

 function getLen(s, bUnicode255For1) {
    let len = s.length;
    if(!bUnicode255For1){
        for(let i = 0;i < len;i++){
            if(s.charCodeAt(i) > 255) len++;
        }
    }
    return len;
}

 function indexOf(arr, item) {
    return (arr.indexOf(item));
}

/**
 * @param  array arr1
 * @param  array  arr2
 * @return string  str   返回两个数组对比之后arr1比arr2多出的值以字符串的方式(以分号分隔)
 */
function diffArrFunc(arr1,arr2){
    var oneArr=arr1;
    var twoArr=arr2;
    var diffArr = [];
    for(var i=0;i<oneArr.length;i++) {
        var flag=true;
        for(var j=0;j<twoArr.length;j++){
            if(twoArr[j]==oneArr[i]) {
                flag=false;
                break;
            }
        }
        //找不到这个值就把它添加到差异数组中
        if(flag){
            diffArr.push(oneArr[i]);
        }
    }
    //将差异数组转换成字符串(当然你也可以不转成字符串,直接返回数组也可以)
    return diffArr.join(';');
}

const findUnion = (arr1 = [], arr2 = []) => {
    const map = {};
    const res = [];
    for (let i = arr1.length-1; i >= 0; -- i){
       map[arr1[i]] = arr1[i];
    };
    for (let i = arr2.length-1; i >= 0; -- i){
       map[arr2[i]] = arr2[i];
    };
    for (const n in map){
       if (map.hasOwnProperty(n)){
          res.push(map[n]);
       }
    }
    return res;
 };

 function removeDuplicate(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
  
       for (let j = i + 1; j < len; j++) {
         if (arr[i] === arr[j]) {
         arr.splice(j, 1)
         len-- // 减少循环次数提高性能
         j-- // 保证j的值自加后不变
       }
     }
   }
    return arr
 }

export {
	getQuery,
    getNowFormatDate,
    splitStr,
    fuzzyQuery,
    getLen,
    indexOf,
    diffArrFunc,
    findUnion,
    removeDuplicate
};
