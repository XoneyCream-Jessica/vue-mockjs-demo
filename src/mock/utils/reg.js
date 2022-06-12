const phoneReg=/^1[3|4|5|7|8][0-9]{9}$/;
const pwdReg=/^[a-zA-Z0-9_()`~!@#$%^*\-+={}[\]:;,.?/]{8,20}$/;
const usernameReg=/^[a-zA-Z0-9]{6,20}$/;
const nicknameReg=/^[a-zA-Z0-9\u4E00-\u9FA5\_()`~!@#$%^*\-+={}[\]:;,.?/]{1,20}$/;
const emailReg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
const rolenameReg=/^[a-zA-Z0-9\u4E00-\u9FA5]{2,20}$/;
const roleKeyReg=/^[a-zA-Z]{1,100}$/;

const dictNameReg=/^[0-9a-zA-Z\u4e00-\u9fa5]{2,20}$/;
const dictTypeReg=/^[a-zA-Z_]{1,64}$/;
const dictDataLabelZn=/^[\u4E00-\u9FA5]{1,20}$/;
const dictDataLabelEn=/^[a-zA-Z]{1,20}$/;
const cssClass=/^[a-zA-Z0-9\_()`~!@#$%^*\-+={}[\]:;,.?/]{0,100}$/;

const menuNameZhReg = /^[\u4E00-\u9FA5]{2,20}$/;
const menuNameEnReg = /^(([A-Za-z]+(\s?))*[A-Za-z]+){2,20}$/;
const componentReg = /^[a-zA-Z/]{0,100}$/;
const permReg = /^[a-zA-Z/]{1,100}$/;

const deptNameReg = /^[a-zA-Z0-9_\u4E00-\u9FA5]{1,64}$/;
const headNameReg = /^(([A-Za-z\u4E00-\u9FA5]+(\s?))*[A-Za-z\u4E00-\u9FA5]+){0,20}$/;

export {
	phoneReg,
	pwdReg,
	usernameReg,
	nicknameReg,
	emailReg,
	rolenameReg,
	roleKeyReg,
	dictNameReg,
	dictTypeReg,
	dictDataLabelZn,
	dictDataLabelEn,
	cssClass,
	menuNameZhReg,
	menuNameEnReg,
	componentReg,
	permReg,
	deptNameReg,
	headNameReg
};