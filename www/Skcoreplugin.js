 var exec = require('cordova/exec');
 window.ac = function(action,str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Skcoreplugin", "test", [action,str]);
 };
 window.al = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Skcoreplugin", "test", ["al",token]);
 };
 window.loginapp = function(token, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Skcoreplugin", "test", ["loginsave",token]);
 };
 window.gettoken = function(callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Skcoreplugin", "test", ["getLoginToken",""]);
 };
/*window.ac("al", "测试", function(echoValue) {
       alert(echoValue == "echome"); // should alert true.
});

 window.ac("loginsave", "2222222222222222", function(echoValue) {});
window.ac("getLoginToken", "2222222222222222", function(echoValue) {
	if(echoValue==null||echoValue==""){alert("没有登录");}
});
*/
/* cmd
sudo cordova plugin rm cordova-plugin-Skcoreplugin;
sudo cordova plugin add https://github.com/skaih/coreplugin.git
*/
/*
cordova.define("cordova-plugin-Skcoreplugin", function(require, exports, module) { //第一个字符串表示你的插件的id，在cordova_plugins.js中需要用到
var exec = require('cordova/exec');
var locateCore =  {
               ac:function(action,str,callback){ //js调用的方法
			        if(action!=null){action="login";}
                    exec(callback, function(err){
                    alert("网络异常");
                    }, "Skcoreplugin", "test", [action,str]);
					
		 }
               };

module.exports = locateCore;

});
*/

//window.Skcoreplugin.login();
//window.Skcoreplugin.login("al", "",function(echoValue) {
//       alert(echoValue == "echome"); // should alert true.
//   });