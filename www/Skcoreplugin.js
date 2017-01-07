/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/* global cordova 

var exec = require('cordova/exec');
 window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Sktest", "test", [str]);
 };
 window.echo("echome", function(echoValue) {
        alert(echoValue == "echome"); // should alert true.
    });
*/
cordova.define("cordova-plugin-Skcoreplugin", function(require, exports, module) { //第一个字符串表示你的插件的id，在cordova_plugins.js中需要用到
var exec = require('cordova/exec');
var locateCore =  {
               ac:function(action,str,callback){ //js调用的方法
			        if(action!=null){action="login";}
                    exec(callback, function(err){
                    alert("网络异常");
                    }, "Skcoreplugin", action, [str]);
					
		 }
               };

module.exports = locateCore;

});

//window.Skcoreplugin.login();
//window.Skcoreplugin.login("al", "",function(echoValue) {
//       alert(echoValue == "echome"); // should alert true.
//   });