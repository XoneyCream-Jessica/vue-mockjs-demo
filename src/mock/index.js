import Mock from 'mockjs'
//将mock数据文件引入
import * as loginInterface from './api/login/login'
import * as userInterface from './api/sys/user/user.js'
import * as roleInterface from './api/sys/role/role.js'
import * as logInterface from './api/sys/log/log.js'
import * as dictInterface from './api/sys/dict/dict.js'
import * as menuInterface from './api/sys/menu/menu.js'
import * as configInterface from './api/config/config.js'
import * as deptInterface from './api/sys/dept/dept.js'

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
});

// 此处不加/，用后面的匹配,baseApi 后必修加 /
let mock_url = "http://127.0.0.1:9999/ivics/mock"

Mock.mock(mock_url + '/auth/doLogin','post',loginInterface.doLogin);
Mock.mock(RegExp(mock_url + '/auth/getSmsCode' + '.*'),'get',loginInterface.getSmsCode);
Mock.mock(mock_url + '/auth/resetPwd','put',loginInterface.resetPwd);
Mock.mock(mock_url + '/auth/loginOut','put',loginInterface.loginOut);

Mock.mock(mock_url + '/system/user/uploadAvatar','post',userInterface.uploadAvatar);
Mock.mock(mock_url + '/system/user/editAccount','put',userInterface.editAccount);
Mock.mock(mock_url + '/system/user/updatePhone','put',userInterface.updatePhone);
Mock.mock(mock_url + '/system/user/modifyPwd','put',userInterface.modifyPwd);
Mock.mock(mock_url + '/system/user/addUser','post',userInterface.addUser);
Mock.mock(mock_url + '/system/user/editUser','put',userInterface.editUser);
Mock.mock(mock_url + '/system/user/changeStatus','put',userInterface.changeStatus);
Mock.mock(mock_url + '/system/user/updatePwd','put',userInterface.updatePwd);
Mock.mock(RegExp(mock_url + '/system/user/remove' + '.*'),'delete',userInterface.removeUser);
Mock.mock(RegExp(mock_url + '/system/user/list' + '.*'),'get',userInterface.getUserList);
Mock.mock(RegExp(mock_url + '/system/user/getDeptTree' + '.*'),'get',userInterface.getDeptTree);
Mock.mock(RegExp(mock_url + '/system/user/getRoleNameList' + '.*'),'get',userInterface.getRoleNameList);
Mock.mock(mock_url + '/system/user/assignRoles','post',userInterface.assignRoles);
Mock.mock(RegExp(mock_url + '/system/user/getMenuTree' + '.*'),'get',userInterface.getMenuTree);
Mock.mock(RegExp(mock_url +'/system/user/getUserInfo' + '.*'),'get',userInterface.getUserInfo);
Mock.mock(RegExp(mock_url +'/system/user/getSmsCode' + '.*'),'get',userInterface.getSmsCode);

Mock.mock(mock_url + '/system/role/addRole','post',roleInterface.addRole);
Mock.mock(mock_url + '/system/role/editRole','put',roleInterface.editRole);
Mock.mock(mock_url + '/system/role/changeStatus','put',roleInterface.changeStatus);
Mock.mock(RegExp(mock_url + '/system/role/remove' + '.*'),'delete',roleInterface.removeRole);
Mock.mock(RegExp(mock_url + '/system/role/list' + '.*'),'get',roleInterface.getRoleList);
Mock.mock(RegExp(mock_url + '/system/role/getUsersByRoleId' + '.*'),'get',roleInterface.getUsersByRoleId);

Mock.mock(RegExp(mock_url + '/system/logs/login/list' + '.*'),'get',logInterface.getLoginLogList);
Mock.mock(RegExp(mock_url + '/system/logs/oper/list' + '.*'),'get',logInterface.getOperationList);
Mock.mock(RegExp(mock_url + '/system/logs/remove' + '.*'),'delete',logInterface.remove);

Mock.mock(RegExp(mock_url + '/system/dict/type/list' + '.*'),'get',dictInterface.getDictTypyList);
Mock.mock(mock_url + '/system/dict/type/addDict','post',dictInterface.addDictType);
Mock.mock(mock_url + '/system/dict/type/editDict','put',dictInterface.editDictType);
Mock.mock(mock_url + '/system/dict/type/changeStatus','put',dictInterface.changeDictTypeStatus);
Mock.mock(RegExp(mock_url + '/system/dict/type/remove' + '.*'),'delete',dictInterface.removeDictType);
Mock.mock(RegExp(mock_url + '/system/dict/type/refreshCache' + '.*'),'get',dictInterface.refreshCache);
Mock.mock(RegExp(mock_url + '/system/dict/data/list' + '.*'),'get',dictInterface.getDictDataList);
Mock.mock(RegExp(mock_url + '/system/dict/data/dictNameList' + '.*'),'get',dictInterface.getDictNameList);
Mock.mock(mock_url + '/system/dict/data/addData','post',dictInterface.addData);
Mock.mock(mock_url + '/system/dict/data/editData','put',dictInterface.editData);
Mock.mock(mock_url + '/system/dict/data/changeStatus','put',dictInterface.changeDictDataStatus);
Mock.mock(RegExp(mock_url + '/system/dict/data/remove' + '.*'),'delete',dictInterface.removeDictData);

Mock.mock(RegExp(mock_url + '/system/menu/list' + '.*'),'get',menuInterface.getMenuList);
Mock.mock(mock_url + '/system/menu/addMenu','post',menuInterface.addMenu);
Mock.mock(mock_url + '/system/menu/editMenu','put',menuInterface.editMenu);
Mock.mock(mock_url + '/system/menu/changeStatus','put',menuInterface.changeStatus);
Mock.mock(RegExp(mock_url + '/system/menu/remove' + '.*'),'delete',menuInterface.remove);
Mock.mock(RegExp(mock_url + '/system/menu/getParentList' + '.*'),'get',menuInterface.getParentList);

Mock.mock(RegExp(mock_url + '/config/dict/list' + '.*'),'get',configInterface.getDictConfig);

Mock.mock(RegExp(mock_url + '/system/dept/list' + '.*'),'get',deptInterface.getDeptList);
Mock.mock(mock_url + '/system/dept/addDept','post',deptInterface.addDept);
Mock.mock(mock_url + '/system/dept/editDept','put',deptInterface.editDept);
Mock.mock(mock_url + '/system/dept/changeStatus','put',deptInterface.changeDeptStatus);
Mock.mock(RegExp(mock_url + '/system/dept/remove' + '.*'),'delete',deptInterface.removeDept);
Mock.mock(RegExp(mock_url + '/system/dept/getDeptTree' + '.*'),'get',deptInterface.getDeptTree);

export default Mock

