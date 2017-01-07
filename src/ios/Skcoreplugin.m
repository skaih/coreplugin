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

+(void)al:(NSString *) str{
    [DCore al:str];
    
}
+(void)alstr:(NSString *) str iv:(UIView *)v{
    
    [DCore alstr:str iv:v];
    
}
+(void)alint:(NSInteger ) i{
    [DCore alint:i];
    
}

+(NSString *)getUserInfor:(NSString* )str{
    
    return [DCore getUserInfor:str];
}

+(NSString *)loginsave:(NSString* )str{
    NSUserDefaults *standardDefaults = [NSUserDefaults standardUserDefaults];
    [standardDefaults setObject:str forKey:loginToken];
    [standardDefaults synchronize];
    return @"";
}
+(NSString *)getLoginToken{
    NSUserDefaults *standardDefaults = [NSUserDefaults standardUserDefaults];
    NSString *token = [standardDefaults stringForKey:loginToken];
    
    return token;
}
+(NSInteger)getUserId{
    
    NSUserDefaults *standardDefaults = [NSUserDefaults standardUserDefaults];
    NSDictionary *getDic=[standardDefaults dictionaryForKey:userNameKey];
    NSInteger userId=[[getDic objectForKey:@"UserId"] integerValue];
    [standardDefaults synchronize];
    return userId;
}
@end
