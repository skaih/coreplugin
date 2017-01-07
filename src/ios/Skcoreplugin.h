/********* TestPlugin.h Cordova Plugin Header *******/

#import <Cordova/CDV.h>
#import <Cordova/CDVCommandDelegateImpl.h>
#define loginToken @"loginToken"
@interface Skcoreplugin : CDVPlugin
{
    CDVCommandDelegateImpl *commandDelegate;
}
- (void)test:(CDVInvokedUrlCommand*)command;
+(void)al:(CDVInvokedUrlCommand*)command; 
+(void)alint:(CDVInvokedUrlCommand*)command;

 
+(NSString *)getUserInfor:(CDVInvokedUrlCommand*)command;
+(void)loginsave:(CDVInvokedUrlCommand*)command;
+(void)getLoginToken:(CDVInvokedUrlCommand*)command;
    @end
