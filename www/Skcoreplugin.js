 var exec = require('cordova/exec');
 window.ac = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Skcoreplugin", "test", [action,str]);
 };
 
/*window.ac("al", "", function(echoValue) {
       alert(echoValue == "echome"); // should alert true.
});
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