/***************** TestPlugin.m ********************/

#import "Skcoreplugin.h"
#import <Cordova/CDV.h>
#import "DCore.h"
@implementation Skcoreplugin
- (void)test:(CDVInvokedUrlCommand*)command
    {
	UIAlertView *alertview = [[UIAlertView alloc] initWithTitle:@"标题" message:@"你好世界！" delegate:self cancelButtonTitle:@"取消" otherButtonTitles:@"确定", nil];
        [alertview show];
     
 }

+(void)al:(CDVInvokedUrlCommand*)command{
    NSString* str = [command.arguments objectAtIndex:0];
    [DCore al:str];
    
} 
+(void)alint:(CDVInvokedUrlCommand*)command {
    NSString* str = [command.arguments objectAtIndex:0];
	 NSInteger i=[str integerValue];
    [DCore alint:i];
    
}

+(NSString *)getUserInfor:(CDVInvokedUrlCommand*)command {
    NSString* str = [command.arguments objectAtIndex:0];
    return [DCore getUserInfor:str];
}

+(void)loginsave:(CDVInvokedUrlCommand*)command  {
    NSString* str = [command.arguments objectAtIndex:0];
    NSUserDefaults *standardDefaults = [NSUserDefaults standardUserDefaults];
    [standardDefaults setObject:str forKey:loginToken];
    [standardDefaults synchronize];
    CDVPluginResult *result;
     result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:str];
	 CDVCommandDelegateImpl *commandDelegate;
     [commandDelegate sendPluginResult:result callbackId:command.callbackId];
}
+(void)getLoginToken:(CDVInvokedUrlCommand*)command{
    NSUserDefaults *standardDefaults = [NSUserDefaults standardUserDefaults];
    NSString *token = [standardDefaults stringForKey:loginToken];
    CDVPluginResult *result;
	CDVCommandDelegateImpl *commandDelegate;
    result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:token];
    [commandDelegate sendPluginResult:result callbackId:command.callbackId];
 
}
+(NSInteger)getUserId{
    
    NSUserDefaults *standardDefaults = [NSUserDefaults standardUserDefaults];
    NSDictionary *getDic=[standardDefaults dictionaryForKey:userNameKey];
    NSInteger userId=[[getDic objectForKey:@"UserId"] integerValue];
    [standardDefaults synchronize];
    return userId;
}
@end
