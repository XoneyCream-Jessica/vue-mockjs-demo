<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-button @click="doLogin()" type="text" size="small">doLogin</el-button>
    <el-button @click="getSmsCode()" type="text" size="small">getSmsCode</el-button>
    <el-button @click="resetPwd()" type="text" size="small">resetPwd</el-button>
    <el-button @click="loginOut()" type="text" size="small">loginOut</el-button>
    <el-button @click="uploadAvatar()" type="text" size="small">uploadAvatar</el-button>
    <el-button @click="editAccount()" type="text" size="small">editAccount</el-button>
    <el-button @click="updatePhone()" type="text" size="small">updatePhone</el-button>
    <el-button @click="modifyPwd()" type="text" size="small">modifyPwd</el-button>
    <el-button @click="addUser()" type="text" size="small">addUser</el-button>
    <el-button @click="editUser()" type="text" size="small">editUser</el-button>
    <el-button @click="changeUserStatus()" type="text" size="small">changeUserStatus</el-button>
    <el-button @click="updatePwd()" type="text" size="small">updatePwd</el-button>
    <el-button @click="removeUser()" type="text" size="small">removeUser</el-button>
    <el-button @click="userList()" type="text" size="small">userList</el-button>
    <el-button @click="getDeptTree()" type="text" size="small">getDeptTree</el-button>
    <el-button @click="getRoleNameList()" type="text" size="small">getRoleNameList</el-button>
    <el-button @click="assignRoles()" type="text" size="small">assignRoles</el-button>
    <el-button @click="addRole()" type="text" size="small">addRole</el-button>
    <el-button @click="editRole()" type="text" size="small">editRole</el-button>
    <el-button @click="changeRoleStatus()" type="text" size="small">changeRoleStatus</el-button>
    <el-button @click="removeRole()" type="text" size="small">removeRole</el-button>
    <el-button @click="roleList()" type="text" size="small">roleList</el-button>
    <el-button @click="getUsersByRoleId()" type="text" size="small">getUsersByRoleId</el-button>
    <el-button @click="getMenuTree()" type="text" size="small">getMenuTree</el-button>
    <el-button @click="getLoginLogList()" type="text" size="small">getLoginLogList</el-button>
    <el-button @click="getOperationList()" type="text" size="small">getOperationList</el-button>
    <el-button @click="removeLog()" type="text" size="small">removeLog</el-button>
    <el-button @click="getDictTypyList()" type="text" size="small">getDictTypyList</el-button>
    <el-button @click="addDictType()" type="text" size="small">addDictType</el-button>
    <el-button @click="editDictType()" type="text" size="small">editDictType</el-button>
    <el-button @click="changeDictTypeStatus()" type="text" size="small">changeDictTypeStatus</el-button>
    <el-button @click="removeDictType()" type="text" size="small">removeDictType</el-button>
    <el-button @click="refreshCache()" type="text" size="small">refreshCache</el-button>
    <el-button @click="getDictDataList()" type="text" size="small">getDictDataList</el-button>
    <el-button @click="getDictNameList()" type="text" size="small">getDictNameList</el-button>
    <el-button @click="addData()" type="text" size="small">addData</el-button>
    <el-button @click="editData()" type="text" size="small">editData</el-button>
    <el-button @click="changeDictDataStatus()" type="text" size="small">changeDictDataStatus</el-button>
    <el-button @click="removeDictData()" type="text" size="small">removeDictData</el-button>
    <el-button @click="getUserInfo()" type="text" size="small">getUserInfo</el-button>
    <el-button @click="getSmsCode()" type="text" size="small">getSmsCode</el-button>

    <el-button @click="getMenuList()" type="text" size="small">getMenuList</el-button>
    <el-button @click="addMenu()" type="text" size="small">addMenu</el-button>
    <el-button @click="editMenu()" type="text" size="small">editMenu</el-button>
    <el-button @click="changeMenuSatatus()" type="text" size="small">changeMenuSatatus</el-button>
    <el-button @click="removeMenu()" type="text" size="small">removeMenu</el-button>
    <el-button @click="getParentList()" type="text" size="small">getParentList</el-button>

    <el-button @click="getDictConfig()" type="text" size="small">getDictConfig</el-button>

    <el-button @click="addDept()" type="text" size="small">addDept</el-button>
    <el-button @click="editDept()" type="text" size="small">editDept</el-button>
    <el-button @click="changeDeptStatus()" type="text" size="small">changeDeptStatus</el-button>
    <el-button @click="removeDept()" type="text" size="small">removeDept</el-button>
    <el-button @click="getDeptList()" type="text" size="small">getDeptList</el-button>
    <el-button @click="getDeptTree()" type="text" size="small">getDeptTree</el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    doLogin(){
      axios({
        method: 'post',
        url: 'http://127.0.0.1:9999/ivics/mock/auth/doLogin',
        data: {
          userName: 'admin4',
          password: 'admin123'
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getSmsCode(){
      axios.get("/auth/getSmsCode",{
        params: {
          areaCode: "86",
          phone: "13812341115"
        }
      }).then(function({data}){
        console.log(data);
      }).catch(error=>{
 	      console.log(error)
 	    });
    },
    resetPwd(){
      axios({
        method: 'put',
        url: '/auth/resetPwd',
        data: {
          phone: "13812341111",
          areaCode: "86",
          uuid: "9af6c19c-6b1e-4b95-8eae-c4d77711959d",
          verificationCode: "1234",
          newPassword: "admin123", 
          confirmPassword: "admin123"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    loginOut(){
      axios({
        method: 'put',
        url: '/auth/loginOut',
        data: {
          userId: 7
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    uploadAvatar(){
      axios({
        method: 'post',
        url: '/system/user/uploadAvatar',
        data: {}
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    editAccount(){
      axios({
        method: 'put',
        url: '/system/user/editAccount',
        data: {
          "userId":1,
          "userName":"superadmin",
          "nickName":"superadmin",
          "email":"superadmin@163.com",
          "sex":0,
          "avatar":""
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    updatePhone(){
      axios({
        method: 'put',
        url: '/system/user/updatePhone',
        data: {
          "userId": 1,
          "phone": "13812341111",
          "uuid": "9af6c19c-6b1e-4b95-8eae-c4d77711959d",
          "verificationCode": "1234"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    modifyPwd(){
      axios({
        method: 'put',
        url: '/system/user/modifyPwd',
        data: {
          "userId": 1,
          "areaCode": "86",
          "oldPassword":"admin123",
          "newPassword":"admin123",
          "confirmPassword":"admin123"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    addUser(){
       axios({
        method: 'post',
        url: '/system/user/addUser',
        data: {
           "userName":"admin5",
           "nickName":"admin5",
           "email":"admin5@123.com",
           "phone":"13812341115",
           "areaCode": "86",
           "sex":0,
           "deptId":106
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    editUser(){
      axios({
        method: 'put',
        url: 'http://127.0.0.1:9999/ivics/mock/system/user/editUser',
        data: {
           "userId":3,
           "userName":"admin4",
           "nickName":"admin4",
           "email":"admin4@123.com",
           "phone":"13812341115",
           "areaCode": "86",
           "sex":0,
           "deptId":106
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    changeUserStatus(){
      axios({
        method: 'put',
        url: '/system/user/changeStatus',
        data: {
          "userId": 4,
          "status": true
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    updatePwd(){
      axios({
        method: 'put',
        url: '/system/user/updatePwd',
        data: {
          "userId": 1,
          "newPassword": "admin123",
          "adminPassword": "admin123"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    removeUser(){
      axios({
        method: 'delete',
        url: '/system/user/remove',
        params: {
          "userIds": "4"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    userList(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/system/user/list',
        params: {
          "userName":"",
          "areaCode":"86",
          "phone":"",
          "status":2,
          "createStartTime":"",
          "createEndTime":"",
          "deptId":101,
          "pageSize":10,
          "pageNum":1
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getDeptTree(){
      axios.get("http://127.0.0.1:9999/ivics/mock/system/user/getDeptTree",{
        params: {}
      }).then(function({data}){
        console.log(data);
      }).catch(error=>{
 	      console.log(error)
 	    });
    },
    getRoleNameList(){
      axios.get("http://127.0.0.1:9999/ivics/mock/system/user/getRoleNameList",{
        params: {
          "userId": 2
        }
      }).then(function({data}){
        console.log(data);
      }).catch(error=>{
 	      console.log(error)
 	    });
    },
    assignRoles(){
      axios({
        method: 'post',
        url: 'http://127.0.0.1:9999/ivics/mock/system/user/assignRoles',
        data: {
          	"userId": 2,
	          "roleIds": [1,2]
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    addRole(){
      axios({
        method: 'post',
        url: '/system/role/addRole',
        data: {
          "roleName":"测试角色2",
          "roleKey":"testRoleb",
          "orderNum": 4,
          "menuIds":[1,2],
          "remark":"角色备注信息"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    editRole(){
      axios({
        method: 'put',
        url: 'http://127.0.0.1:9999/ivics/mock/system/role/editRole',
        data: {
          "roleId":2,
          "roleName":"测试角色1",
          "roleKey":"testusera",
          "orderNum": 3,
          "menuIds":[1,2,3,4],
          "remark": "beizhu"          
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    changeRoleStatus(){
      axios({
        method: 'put',
        url: 'http://127.0.0.1:9999/ivics/mock/system/role/changeStatus',
        data: {
          "roleId":2,
          "status":false
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    removeRole(){
      axios({
        method: 'delete',
        url: '/system/role/remove',
        params: {
          "roleIds": "3"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    roleList(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/system/role/list',
        params: {
          "roleName":"",
          "roleKey":"",
          "status":2,
          "createStartTime":"",
          "createEndTime":"",
          "pageSize":10,
          "pageNum":1
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getUsersByRoleId(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/system/role/getUsersByRoleId',
        params: {
          "roleId":"2",
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getMenuTree(){
      axios({
        method: 'get',
        url: '/system/user/getMenuTree',
        params: {
          "userId":"1",
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getLoginLogList(){
      axios({
        method: 'get',
        url: '/system/logs/login/list',
        params: {
          "userName":"",
          "status": 2,
          "loginIp": "",
          "acceseStartTime": "",
          "accessEndTime": "",
          "pageSize":10,
          "pageNum":1
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getOperationList(){
       axios({
        method: 'get',
        url: '/system/logs/oper/list',
        params: {
          "title":"",
          "status": 2,
          "businessType": 0,
          "operStartTime": "",
          "operEndTime": "",
          "pageSize":10,
          "pageNum":1
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    removeLog(){
      axios({
        method: 'delete',
        url: '/system/logs/remove',
        params: {
          "logType": 1,
          "ids": "1"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getDictTypyList(){
      axios({
        method: 'get',
        url: '/system/dict/type/list',
        params: {
          "dictName":"",
          "dictType":"",
          "status": 2,
          "createStartTime": "",
          "createEndTime": "",
          "pageSize":10,
          "pageNum":1
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    addDictType(){
      axios({
        method: 'post',
        url: '/system/dict/type/addDict',
        data: {
          "dictName":"测试字典",
          "dictType":"testDict",
          "remark":"测试字典备注"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    editDictType(){
      axios({
        method: 'put',
        url: '/system/dict/type/editDict',
        data: {
          "dictId":1,
          "dictName":"状态筛选",
          "dictType":"testDict",
          "remark":"测试字典备注"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    changeDictTypeStatus(){
      axios({
        method: 'put',
        url: '/system/dict/type/changeStatus',
        data: {
          "dictId":11,
          "status":false
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    removeDictType(){
      axios({
        method: 'delete',
        url: '/system/dict/type/remove',
        params: {
          "dictIds": "11"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    refreshCache(){
       axios({
        method: 'get',
        url: '/system/dict/type/refreshCache',
        params: {}
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    getDictDataList(){
      axios({
        method: 'get',
        url: '/system/dict/data/list',
        params: {
          "dictId":"11",
          "dictLabel":"",
          "status": 2,
          "pageSize":10,
          "pageNum":1
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    getDictNameList(){
      axios({
        method: 'get',
        url: '/system/dict/data/dictNameList',
        params: {}
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    addData(){
      axios({
        method: 'post',
        url: '/system/dict/data/addData',
        data: {
	        "dictId": 11,
	        "dictLabelZh": "测试数据",
	        "dictLabelEn": "testData",
          "dictValue": 0,
          "cssClass": "",
          "orderNum": 1,
          "remark": "测试数据"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    editData(){
      axios({
        method: 'put',
        url: '/system/dict/data/editData',
        data: {
	        "dictCode": 32,
        	"dictLabelZh": "测试数据哈哈哈",
	        "dictLabelEn": "testData",
          "dictValue": 0,
          "cssClass": "",
          "orderNum": 1,
          "remark": "测试数据"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    changeDictDataStatus(){
      axios({
        method: 'put',
        url: '/system/dict/data/changeStatus',
        data: {
	        "dictCode": 32,
	        "status": false
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    removeDictData(){
      axios({
        method: 'delete',
        url: '/system/dict/data/remove',
        params: {
          "dictCodes": "32"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getUserInfo(){
      axios({
        method: 'get',
        url: '/system/user/getUserInfo',
        params: {
          "userId":"1"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    getSmsCode(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/system/user/getSmsCode',
        params: {
          "areacode": "086",
          "phone":"13812341110"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    getMenuList(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/system/menu/list',
        params: {
          "menuName":"",
          "status":2,
          "pageSize":10,
          "pageNum":1
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    addMenu(){
      axios({
        method: 'post',
        url: 'http://127.0.0.1:9999/ivics/mock/system/menu/addMenu',
        data: {
          "menuType": 1,
          "path": "/",
          "parentId": 1,
          "orderNum": 1,
          "isFrame": false,
          "menuNameZh": "菜单测试",
          "menuNameEn": "Menu Test",
          "component": "a",
          "perm": "a",
          "query": "a",
          "isCache": false,
          "visible": true,
          "status": true,
          "icon": "home"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    editMenu(){
      axios({
        method: 'put',
        url: 'http://127.0.0.1:9999/ivics/mock/system/menu/editMenu',
        data: {
          "menuId": 8,
          "menuType": 1,
          "path": "/",
          "parentId": 1,
          "orderNum": 1,
          "isFrame": false,
          "menuNameZh": "菜单管理",
          "menuNameEn": "Menu Test",
          "component": "a",
          "perm": "a",
          "query": "a",
          "isCache": false,
          "visible": true,
          "status": true,
          "icon": "home"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    changeMenuSatatus(){
      axios({
        method: 'put',
        url: 'http://127.0.0.1:9999/ivics/mock/system/menu/changeStatus',
        data: {
          "menuId":8,
          "status":false
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    removeMenu(){
      axios({
        method: 'delete',
        url: 'http://127.0.0.1:9999/ivics/mock/system/menu/remove',
        params: {
          "menuId": "8"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getParentList(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/system/menu/getParentList',
        params: {}
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getDictConfig(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/config/dict/list',
        params: {
          "templateType": "sys_status_select"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },    
    addDept(){
      axios({
        method: 'post',
        url: 'http://127.0.0.1:9999/ivics/mock/system/dept/addDept',
        data: {
          	"parentId": 101,
	          "deptName": "测试部门",
	          "orderNum": 2,
	          "leader": "董事长",
	          "phone": "18873390096",
	          "email": "1231@qq.com"
          }     
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    editDept(){
      axios({
        method: 'put',
        url: 'http://127.0.0.1:9999/ivics/mock/system/dept/editDept',
        data: {
            "deptId": 114,
          	"parentId": 0,
	          "deptName": "测试部门1",
	          "orderNum": 2,
	          "leader": "董事长",
	          "phone": "18873390096",
	          "email": "1231@qq.com"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      }); 
    },
    changeDeptStatus(){
      axios({
        method: 'put',
        url: 'http://127.0.0.1:9999/ivics/mock/system/dept/changeStatus',
        data: {
          "deptId": 106,
          "status": false
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    removeDept(){
      axios({
        method: 'delete',
        url: 'http://127.0.0.1:9999/ivics/mock/system/dept/remove',
        params: {
          "deptId": "106"
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getDeptList(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/system/dept/list',
        params: {
          "deptName": "",
          "status": 2,
          "pageSize": 10,
          "pageNum": 1
        }
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    },
    getDeptTree(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:9999/ivics/mock/system/dept/getDeptTree',
        params: {}
        }).then(res=>{
          console.log(res)
        }).catch(error=>{
 	        console.log(error)
 	      });
    }
  }

}
</script>
