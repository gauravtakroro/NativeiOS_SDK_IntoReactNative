//
//  NativeSmartLightsSDKManager.m
//
//
//  Created by Gaurav Tak on 27/10/25.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "NativeSmartLightsSDKManager.h"
#import "NativeSmartLightsSDKExample-Swift.h"

@interface NativeSmartLightsSDKManager ()

@end

@implementation NativeSmartLightsSDKManager
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

- (instancetype)init {
  
  if (self = [super init]) {
    // ✅ Only setup variables here
  }
  return self;
}

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[];
}


RCT_EXPORT_METHOD(getOutputForTesting:(RCTResponseSenderBlock)callback) {
  printf("getOutputForTesting\n");
  NativeSmartLightsSDKManagerModule *module = [NativeSmartLightsSDKManagerModule new];
  [module getOutputForTesting];
  // first param is error, second is result
}

RCT_EXPORT_METHOD(getModuleName:(RCTResponseSenderBlock)callback)
{
  printf(@"getModuleName For Testing of SmartLights Communication");
  NativeSmartLightsSDKManagerModule *module = [NativeSmartLightsSDKManagerModule new];

  [module getModuleName:callback];
}

RCT_EXPORT_METHOD(scanAndConnectWithCenterPoint)
{
  printf(@"scanAndConnectWithCenterPoint Smart Lights Communication");
  NativeSmartLightsSDKManagerModule *module = [NativeSmartLightsSDKManagerModule new];
  [module performScanAndConnectWithCenterPoint];
}

RCT_EXPORT_METHOD(powerOnOrOff)
{
  printf(@"powerOnOrOff SmartLights Communication");
  NativeSmartLightsSDKManagerModule *module = [NativeSmartLightsSDKManagerModule new];
  [module performPowerOnOrOff];
}

RCT_EXPORT_METHOD(updateModeOfLights)
{
  printf(@"updateModeOfLights SmartLights Communication");
  NativeSmartLightsSDKManagerModule *module = [NativeSmartLightsSDKManagerModule new];
  [module performUpdateModeOfLights];
}

@end
