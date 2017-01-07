/********* TestPlugin.h Cordova Plugin Header *******/

#import <Cordova/CDV.h>
#define loginToken @"loginToken"
@interface Skcoreplugin : CDVPlugin
- (void)test:(CDVInvokedUrlCommand*)command;
+(void)al:(NSString *) str;
+(void)alstr:(NSString *) str iv:(UIView *)v;
+(void)alint:(NSInteger ) i;

 
+(NSString *)getUserInfor:(NSString* )str;
+(NSString *)loginsave:(NSString* )str;
+(NSString *)getLoginToken;
    @end
