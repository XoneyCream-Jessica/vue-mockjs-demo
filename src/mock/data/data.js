const userList = {  //定义用户数据
	userinfo: [{
		"userId": 1,
		"createTime": "2022-5-10 17:00:00",
		"userName": "admin1",
		"nickName": "admin1",
		"email": "admin1@123.com",
		"phone": "13812341111",
		"sex": 1,
		"avatar": "",
		"status": true,
		"deptName": "EAS",
		"password": "admin123",
		"verificationCode": "1234",
		"deptId":103,
		"delFlag":false,
		"roleIds":[1,2]
	},
	{
		"userId": 2,
		"createTime": "2022-5-11 17:00:00",
		"userName": "admin2",
		"nickName": "admin2",
		"email": "admin2@123.com",
		"phone": "13812341112",
		"sex": 1,
		"avatar": "",
		"status": true,
		"deptName": "EAS",
		"password": "admin123",
		"verificationCode": "1234",
		"deptId":103,
		"delFlag":false,
		"roleIds":[1]
	},
	{
		"userId": 3,
		"createTime": "2022-5-13 17:00:00",
		"userName": "admin3",
		"nickName": "admin3",
		"email": "admin3@123.com",
		"phone": "13812341113",
		"sex": 1,
		"avatar": "",
		"status": true,
		"deptName": "IVI",
		"password": "admin123",
		"verificationCode": "1234",
		"deptId":104,
		"delFlag":false,
		"roleIds":[1]
	},
	{
		"userId": 4,
		"createTime": "2022-5-16 17:00:00",
		"userName": "admin4",
		"nickName": "admin4",
		"email": "admin4@123.com",
		"phone": "13812341114",
		"sex": 1,
		"avatar": "",
		"status": false,
		"deptName": "EAS1",
		"password": "admin123",
		"verificationCode": "1234",
		"deptId":110,
		"delFlag":false,
		"roleIds":[1]
	}]
};

const deptList = {
	deptInfo: [{
        "deptId": 100,
        "deptName": "中电金信",
        "createTime": "2021-12-17 18:31:05",
        "status": true,
        "parentDeptName": "",
        "orderNum": 1,
        "leader": "董事长",
        "phone": "18873390095",
        "email": "123@qq.com",
		"delFlag": false,
        "children": [
			{
				"deptId": 101,
				"deptName": "OPS",
				"createTime": "2021-12-17 18:31:05",
				"status": true,
				"parentDeptName": "中电金信",
				"orderNum": 1,
				"leader": "负责人",
				"phone": "18873390095",
				"email": "123@qq.com",
				"delFlag": false,
				"children": [
					{
						"deptId": 102,
						"deptName": "Auto",
						"createTime": "2021-12-17 18:31:05",
						"status": true,
						"parentDeptName": "OPS",
						"orderNum": 1,
						"leader": "负责人",
						"phone": "18873390095",
						"email": "123@qq.com",
						"delFlag": false,
						"children": [
							{
								"deptId": 103,
								"deptName": "EAS",
								"createTime": "2021-12-17 18:31:05",
								"status": true,
								"parentDeptName": "Auto",
								"orderNum": 1,
								"leader": "负责人",
								"phone": "18873390095",
								"email": "123@qq.com",
								"delFlag": false,
								"children": []
							},{
								"deptId": 104,
								"deptName": "IVI",
								"createTime": "2021-12-17 18:31:05",
								"status": true,
								"parentDeptName": "Auto",
								"orderNum": 2,
								"leader": "负责人",
								"phone": "18873390095",
								"email": "123@qq.com",
								"delFlag": false,
								"children": []
							},{
								"deptId": 105,
								"deptName": "TSP",
								"createTime": "2021-12-17 18:31:05",
								"status": true,
								"parentDeptName": "Auto",
								"orderNum": 3,
								"leader": "负责人",
								"phone": "18873390095",
								"email": "123@qq.com",
								"delFlag": false,
								"children": []
							},{
								"deptId": 106,
								"deptName": "Solution",
								"createTime": "2021-12-17 18:31:05",
								"status": true,
								"parentDeptName": "Auto",
								"orderNum": 4,
								"leader": "负责人",
								"phone": "18873390095",
								"email": "123@qq.com",
								"delFlag": false,
								"children": []
							}
						]
					}
				]
			}
        ]
    },{
        "deptId": 107,
        "deptName": "中电金信1",
        "createTime": "2021-12-17 18:31:05",
        "status": true,
        "parentDeptName": "",
        "orderNum": 2,
        "leader": "董事长",
        "phone": "18873390095",
        "email": "123@qq.com",
		"delFlag": false,
        "children": [
			{
				"deptId": 108,
				"deptName": "OPS1",
				"createTime": "2021-12-17 18:31:05",
				"status": true,
				"parentDeptName": "中电金信1",
				"orderNum": 1,
				"leader": "负责人",
				"phone": "18873390095",
				"email": "123@qq.com",
				"delFlag": false,
				"children": [
					{
						"deptId": 109,
						"deptName": "Auto1",
						"createTime": "2021-12-17 18:31:05",
						"status": true,
						"parentDeptName": "OPS1",
						"orderNum": 1,
						"leader": "负责人",
						"phone": "18873390095",
						"email": "123@qq.com",
						"delFlag": false,
						"children": [
							{
								"deptId": 110,
								"deptName": "EAS1",
								"createTime": "2021-12-17 18:31:05",
								"status": true,
								"parentDeptName": "Auto1",
								"orderNum": 1,
								"leader": "负责人",
								"phone": "18873390095",
								"email": "123@qq.com",
								"delFlag": false,
								"children": []
							},{
								"deptId": 111,
								"deptName": "IVI1",
								"createTime": "2021-12-17 18:31:05",
								"status": true,
								"parentDeptName": "Auto1",
								"orderNum": 2,
								"leader": "负责人",
								"phone": "18873390095",
								"email": "123@qq.com",
								"delFlag": false,
								"children": []
							},{
								"deptId": 112,
								"deptName": "TSP1",
								"createTime": "2021-12-17 18:31:05",
								"status": true,
								"parentDeptName": "Auto1",
								"orderNum": 1,
								"leader": "负责人",
								"phone": "18873390095",
								"email": "123@qq.com",
								"delFlag": false,
								"children": []
							},{
								"deptId": 113,
								"deptName": "Solution1",
								"createTime": "2021-12-17 18:31:05",
								"status": true,
								"parentDeptName": "Auto1",
								"orderNum": 4,
								"leader": "负责人",
								"phone": "18873390095",
								"email": "123@qq.com",
								"delFlag": false,
								"children": []
							}
						]
					}
				]
			}
        ]
    }]
};

const roleList = {
	roleInfo: [
		{
			"roleId": 1,
			"roleName": "admin",
			"roleKey": "admin",
			"orderNum": 1,
			"status": true,
			"createTime": "2022-01-01 11:11:11",
			"remark": "角色列表",
			"menuList": [
				{
					"menuId": 1,
					"menuNameEn": "System Management",
					"menuNameZh": "系统管理",
					"children":[
						{
							"menuId": 2,
							"menuNameEn": "User Management",
							"menuNameZh": "用户管理"
						},
						{
							"menuId": 3,
							"menuNameEn": "Role Management",
							"menuNameZh": "角色管理"
						},
						{
							"menuId": 4,
							"menuNameEn": "Menu Management",
							"menuNameZh": "菜单管理"
						},
						{
							"menuId": 5,
							"menuNameEn": "Department Management",
							"menuNameZh": "部门管理"
						},
						{
							"menuId": 6,
							"menuNameEn": "Dictionary Management",
							"menuNameZh": "字典管理"
						},
						{
							"menuId": 7,
							"menuNameEn": "Log Management",
							"menuNameZh": "日志管理"
						}
					]
				}
			],
			"delFlag": false
		},
		{
			"roleId": 2,
			"roleName": "普通用户",
			"roleKey": "user",
			"orderNum": 2,
			"status": true,
			"createTime": "2022-01-01 11:11:11",
			"remark": "普通用户",
			"menuList": [
				{
					"menuId": 1,
					"menuNameEn": "System Management",
					"menuNameZh": "系统管理",
					"children":[
						{
							"menuId": 2,
							"menuNameEn": "User Management",
							"menuNameZh": "用户管理"
						},
						{
							"menuId": 3,
							"menuNameEn": "Role Management",
							"menuNameZh": "角色管理"
						}
					]
				}
			],
			"delFlag": false
		}
	]
}

const menuList = {
	menuInfo:[
		{
		  "createTime": "2021-12-17 18:31:05",
		  "icon": "home",
		  "perm": "",
		  "isCache": true,
		  "query": "",
		  "path": "",
		  "status": true,
		  "visible": true,
		  "isFrame": true,
		  "menuId": 1,
		  "menuNameEn": "System Management",
		  "menuNameZh": "系统管理",
		  "orderNum": 1,
		  "menuType": 0,
		  "component": "NoData",
		  "delFlag": false,
		  "parentId": 0,
		  "children":[
				{
					"createTime": "2021-12-17 18:31:05",
					"icon": "user",
					"perm": "system:user:list",
					"status": true,
					"visible": true,
					"isCache": true,
					"isFrame": true,
					"query": "?userId=3",
					"component": "/system/user",
					"menuId": 2,
					"menuNameEn": "User Management",
					"menuNameZh": "用户管理",
					"path": "/menu",
					"orderNum": 1,
					"menuType": 1,
					"parentId": 1,
					"delFlag": false,
					"children":[]
				},
				{
					"createTime": "2021-12-17 18:31:05",
					"icon": "user",
					"perm": "system:role:list",
					"status": true,
					"visible": true,
					"isCache": true,
					"isFrame": true,
					"query": "?roleId=3",
					"component": "/system/role",
					"menuId": 3,
					"menuNameEn": "Role Management",
					"menuNameZh": "角色管理",
					"path": "/menu",
					"orderNum": 2,
					"menuType": 1,
					"parentId": 1,
					"delFlag": false,
					"children":[]
				},
				{
					"createTime": "2021-12-17 18:31:05",
					"icon": "user",
					"perm": "system:menu:list",
					"status": true,
					"visible": true,
					"isCache": true,
					"isFrame": true,
					"query": "?menuId=3",
					"component": "/system/menu",
					"menuId": 4,
					"menuNameEn": "Menu Management",
					"menuNameZh": "菜单管理",
					"path": "/menu",
					"orderNum": 3,
					"menuType": 1,
					"parentId": 1,
					"delFlag": false,
					"children":[]
				},
				{
					"createTime": "2021-12-17 18:31:05",
					"icon": "user",
					"perm": "system:department:list",
					"status": true,
					"visible": true,
					"isCache": true,
					"isFrame": true,
					"query": "?deptId=3",
					"component": "/system/department",
					"menuId": 5,
					"menuNameEn": "Department Management",
					"menuNameZh": "部门管理",
					"path": "/menu",
					"orderNum": 4,
					"menuType": 1,
					"parentId": 1,
					"delFlag": false,
					"children":[]
				},
				{
					"createTime": "2021-12-17 18:31:05",
					"icon": "user",
					"perm": "system:dictionary:list",
					"status": true,
					"visible": true,
					"isCache": true,
					"isFrame": true,
					"query": "?dictionaryId=3",
					"component": "/system/dictionary",
					"menuId": 6,
					"menuNameEn": "Dictionary Management",
					"menuNameZh": "字典管理",
					"path": "/menu",
					"orderNum": 5,
					"menuType": 1,
					"parentId": 1,
					"delFlag": false,
					"children":[]
				},
				{
					"createTime": "2021-12-17 18:31:05",
					"icon": "user",
					"perm": "system:log:list",
					"status": true,
					"visible": true,
					"isCache": true,
					"isFrame": true,
					"query": "?logId=3",
					"component": "/system/log",
					"menuId": 7,
					"menuNameEn": "Log Management",
					"menuNameZh": "日志管理",
					"path": "/menu",
					"orderNum": 6,
					"menuType": 1,
					"parentId": 1,
					"delFlag": false,
					"children":[]
				}
		  	]
		}
	]
}

const loginLogList = {
	loginLog:[
		{
			"infoId": 1,
			"userId": 1,
			"ipAddr": "127.0.0.1",
			"ipLocation": "上海市",
			"osName": "windows 10",
			"browser": "chrome",
			"status": true,
			"msg": "登录成功",
			"accessTime": "2018-8-20 17:00:00",
			"delFlag": false
		},
		{
			"infoId": 2,
			"userId": 1,
			"ipAddr": "127.0.0.1",
			"ipLocation": "上海市",
			"osName": "windows 10",
			"browser": "chrome",
			"status": true,
			"msg": "登录成功",
			"accessTime": "2018-8-20 17:00:00",
			"delFlag": false
		},
		{
			"infoId": 3,
			"userId": 1,
			"ipAddr": "127.0.0.1",
			"ipLocation": "上海市",
			"osName": "windows 10",
			"browser": "chrome",
			"status": false,
			"msg": "登录成功",
			"accessTime": "2018-8-20 17:00:00",
			"delFlag": false
		}	
	]
}

const operationLogList = {
	operationLogInfo : [
		{
			"operId": 1,
			"title": "用户管理",
			"businessType": 1,
			"requestMethod": "POST",
			"operName": "admin",
			"operIp": "127.0.0.1",
			"operLocation": "上海市",
			"status": true,
			"operTime": "2018-8-20 17:00:00",
			"delFlag": false
		},
		{
			"operId": 2,
			"title": "系统管理",
			"businessType": 1,
			"requestMethod": "POST",
			"operName": "admin",
			"operIp": "127.0.0.1",
			"operLocation": "上海市",
			"status": true,
			"operTime": "2018-8-20 17:00:00",
			"delFlag": false
		},		
		{
			"operId": 3,
			"title": "系统管理",
			"businessType": 1,
			"requestMethod": "POST",
			"operName": "admin",
			"operIp": "127.0.0.1",
			"operLocation": "上海市",
			"status": true,
			"operTime": "2018-8-20 17:00:00",
			"delFlag": false
		}
	]
}

const dictList = {
	dictInfo:[
		{
			"dictId": 1,
			"dictName": "状态筛选",
			"dictType": "sys_status_select",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "状态筛选",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 1,
					"dictName": "状态筛选",
					"dictLabelZh": "停用",
					"dictLabelEn": "Disabled",
					"dictValue": 0,
					"cssClass": "",
					"orderNum": 1,
					"remark": "状态筛选-停用",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 2,
					"dictName": "状态筛选",
					"dictLabelZh": "正常",
					"dictLabelEn": "Enabled",
					"dictValue": 1,
					"cssClass": "",
					"orderNum": 2,
					"remark": "状态筛选-正常",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 3,
					"dictName": "状态筛选",
					"dictLabelZh": "全部",
					"dictLabelEn": "All",
					"dictValue": 2,
					"cssClass": "",
					"orderNum": 3,
					"remark": "状态筛选-全部",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},
		{
			"dictId": 2,
			"dictName": "性别",
			"dictType": "sys_user_sex",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "性别",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 4,
					"dictName": "性别",
					"dictLabelZh": "男",
					"dictLabelEn": "man",
					"dictValue": 0,
					"cssClass": "<aaa/>",
					"orderNum": 1,
					"remark": "性别-男",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 5,
					"dictName": "性别",
					"dictLabelZh": "女",
					"dictLabelEn": "women",
					"dictValue": 1,
					"cssClass": "<aaa/>",
					"orderNum": 2,
					"remark": "性别-女",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 3,
					"dictName": "性别",
					"dictLabelZh": "未知",
					"dictLabelEn": "unknown",
					"dictValue": 2,
					"cssClass": "<aaa/>",
					"orderNum": 3,
					"remark": "性别-位置",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},
		{
			"dictId": 3,
			"dictName": "状态是否",
			"dictType": "sys_yes_no",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "状态是否",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 6,
					"dictName": "状态是否",
					"dictLabelZh": "否",
					"dictLabelEn": "No",
					"dictValue": 0,
					"cssClass": "<aaa/>",
					"orderNum": 1,
					"remark": "状态是否-否",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 7,
					"dictName": "状态是否",
					"dictLabelZh": "是",
					"dictLabelEn": "Yes",
					"dictValue": 1,
					"cssClass": "<aaa/>",
					"orderNum": 2,
					"remark": "状态是否-是",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},
		{
			"dictId": 4,
			"dictName": "菜单类型",
			"dictType": "sys_menu_type",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "菜单类型",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 8,
					"dictName": "菜单类型",
					"dictLabelZh": "目录",
					"dictLabelEn": "Catalogue",
					"dictValue": 0,
					"cssClass": "<aaa/>",
					"orderNum": 1,
					"remark": "菜单类型-目录",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 9,
					"dictName": "菜单类型",
					"dictLabelZh": "菜单",
					"dictLabelEn": "Menu",
					"dictValue": 1,
					"cssClass": "<aaa/>",
					"orderNum": 2,
					"remark": "菜单类型-菜单",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},
		{
			"dictId": 5,
			"dictName": "菜单可见",
			"dictType": "sys_menu_visible",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "菜单类型",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 10,
					"dictName": "菜单可见",
					"dictLabelZh": "否",
					"dictLabelEn": "No",
					"dictValue": 0,
					"cssClass": "<aaa/>",
					"orderNum": 1,
					"remark": "菜单可见-否",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 11,
					"dictName": "菜单可见",
					"dictLabelZh": "是",
					"dictLabelEn": "Yes",
					"dictValue": 1,
					"cssClass": "<aaa/>",
					"orderNum": 2,
					"remark": "菜单可见-是",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},		
		{
			"dictId": 6,
			"dictName": "菜单状态",
			"dictType": "sys_menu_status",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "菜单状态",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 12,
					"dictName": "菜单状态",
					"dictLabelZh": "停用",
					"dictLabelEn": "Disabled",
					"dictValue": 0,
					"cssClass": "",
					"orderNum": 1,
					"remark": "菜单状态-停用",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 13,
					"dictName": "菜单状态",
					"dictLabelZh": "正常",
					"dictLabelEn": "Enabled",
					"dictValue": 1,
					"cssClass": "",
					"orderNum": 2,
					"remark": "菜单状态-正常",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},
		{
			"dictId": 7,
			"dictName": "菜单是否缓存",
			"dictType": "sys_menu_cache",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "菜单是否缓存",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 14,
					"dictName": "菜单是否缓存",
					"dictLabelZh": "否",
					"dictLabelEn": "No",
					"dictValue": 0,
					"cssClass": "<aaa/>",
					"orderNum": 1,
					"remark": "菜单是否缓存-否",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 15,
					"dictName": "菜单是否缓存",
					"dictLabelZh": "是",
					"dictLabelEn": "Yes",
					"dictValue": 1,
					"cssClass": "<aaa/>",
					"orderNum": 2,
					"remark": "菜单是否缓存-是",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},	
		{
			"dictId": 8,
			"dictName": "日志类型",
			"dictType": "sys_log_type",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "日志类型",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 16,
					"dictName": "日志类型",
					"dictLabelZh": "登录日志",
					"dictLabelEn": "Login Log",
					"dictValue": 0,
					"cssClass": "<aaa/>",
					"orderNum": 1,
					"remark": "日志类型-登录日志",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 17,
					"dictName": "日志类型",
					"dictLabelZh": "操作日志",
					"dictLabelEn": "Operation Log",
					"dictValue": 1,
					"cssClass": "<aaa/>",
					"orderNum": 2,
					"remark": "日志类型-操作日志",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},
		{
			"dictId": 9,
			"dictName": "登录操作状态",
			"dictType": "sys_log_status",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "登录/操作状态",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 18,
					"dictName": "登录/操作状态",
					"dictLabelZh": "失败",
					"dictLabelEn": "Fail",
					"dictValue": 0,
					"cssClass": "",
					"orderNum": 1,
					"remark": "登录/操作状态-停用",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 19,
					"dictName": "登录/操作状态",
					"dictLabelZh": "成功",
					"dictLabelEn": "Success",
					"dictValue": 1,
					"cssClass": "",
					"orderNum": 2,
					"remark": "登录/操作状态-正常",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 20,
					"dictName": "状态筛选",
					"dictLabelZh": "全部",
					"dictLabelEn": "All",
					"dictValue": 2,
					"cssClass": "",
					"orderNum": 3,
					"remark": "状态筛选-全部",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		},
		{
			"dictId": 10,
			"dictName": "操作类型",
			"dictType": "sys_operation_type",
			"status": true,
			"createTime": "2018-8-20 17:00:00",
			"remark": "操作类型",
			"delFlag": false,
			"dictData": [
				{
					"dictCode": 21,
					"dictName": "操作类型",
					"dictLabelZh": "全部",
					"dictLabelEn": "All",
					"dictValue": 0,
					"cssClass": "",
					"orderNum": 1,
					"remark": "操作类型-全部",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 22,
					"dictName": "操作类型",
					"dictLabelZh": "新增",
					"dictLabelEn": "Add",
					"dictValue": 1,
					"cssClass": "",
					"orderNum": 2,
					"remark": "操作类型-新增",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 23,
					"dictName": "状态筛选",
					"dictLabelZh": "修改",
					"dictLabelEn": "Edit",
					"dictValue": 2,
					"cssClass": "",
					"orderNum": 3,
					"remark": "操作类型-修改",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 24,
					"dictName": "操作类型",
					"dictLabelZh": "删除",
					"dictLabelEn": "Delete",
					"dictValue": 3,
					"cssClass": "",
					"orderNum": 4,
					"remark": "操作类型-删除",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 25,
					"dictName": "操作类型",
					"dictLabelZh": "查看详情",
					"dictLabelEn": "Details",
					"dictValue": 4,
					"cssClass": "",
					"orderNum": 5,
					"remark": "操作类型-查看详情",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 26,
					"dictName": "状态筛选",
					"dictLabelZh": "导入",
					"dictLabelEn": "Import",
					"dictValue": 5,
					"cssClass": "",
					"orderNum": 6,
					"remark": "操作类型-导入",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 27,
					"dictName": "操作类型",
					"dictLabelZh": "导出",
					"dictLabelEn": "Export",
					"dictValue": 6,
					"cssClass": "",
					"orderNum": 7,
					"remark": "操作类型-导出",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 28,
					"dictName": "操作类型",
					"dictLabelZh": "授权",
					"dictLabelEn": "Authorize",
					"dictValue": 7,
					"cssClass": "",
					"orderNum": 8,
					"remark": "操作类型-授权",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 29,
					"dictName": "状态筛选",
					"dictLabelZh": "下载",
					"dictLabelEn": "Download",
					"dictValue": 8,
					"cssClass": "",
					"orderNum": 9,
					"remark": "操作类型-下载",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 30,
					"dictName": "操作类型",
					"dictLabelZh": "清空",
					"dictLabelEn": "Clear",
					"dictValue": 9,
					"cssClass": "",
					"orderNum": 10,
					"remark": "操作类型-清空",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				},
				{
					"dictCode": 31,
					"dictName": "操作类型",
					"dictLabelZh": "强退",
					"dictLabelEn": "Retreat",
					"dictValue": 10,
					"cssClass": "",
					"orderNum": 11,
					"remark": "操作类型-强退",
					"status": true,
					"createTime": "2018-8-20 17:00:00",
					"delFlag": false
				}
			]
		}
	]
}

export {
	userList,
	deptList,
	roleList,
	menuList,
	loginLogList,
	operationLogList,
	dictList
};
