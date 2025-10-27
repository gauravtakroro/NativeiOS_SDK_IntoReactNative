//
//  NativeSmartLightsSDKManagerModule.swift
//
//
//  Created by Gaurav Tak on 27/10/25.
//


import Foundation
import React

@objc(NativeSmartLightsSDKManagerModule)
class NativeSmartLightsSDKManagerModule: NSObject, RCTBridgeModule {
 
  override init() {
    super.init()
    print("init super.init() called")
    print("Do NOT call doSomething() here")
  }
  
  static func moduleName() -> String! {
    return "NativeSmartLightsSDKManagerModule"
  }
  
  private static var nativeSmartLightsSDKCommunicationHelper: NativeSmartLightsSDKCommunicationHelper? = nil
 
  static func getInstance() -> NativeSmartLightsSDKCommunicationHelper {
    print("getInstance called")
    if nativeSmartLightsSDKCommunicationHelper != nil {
    } else {
      nativeSmartLightsSDKCommunicationHelper = NativeSmartLightsSDKCommunicationHelper()
    }
    nativeSmartLightsSDKCommunicationHelper?.getInitConfiguration()
    return nativeSmartLightsSDKCommunicationHelper!
  }
  
  @objc
  func getModuleName(_ callback: @escaping  RCTResponseSenderBlock) {
    print("getModuleName called")
    let result = "NativeSmartLightsSDKManagerModule"
    DispatchQueue.main.async {
      callback([NSNull(), result])
    }
  }
  
  @objc
  func getOutputForTesting() {
    print("getOutputForTesting called")
    print("NativeSmartLightsSDKManagerModule getOutputForTesting for SmartLights iOS Swift Communcation")
  }

  @objc
  func getInitConfiguration() {
    print("getInitConfiguration called")
    NativeSmartLightsSDKManagerModule.getInstance().getInitConfiguration()
  }
  
  @objc
  func performScanAndConnectWithCenterPoint() {
    print("performScanAndConnectWithCenterPoint called")
    NativeSmartLightsSDKManagerModule.getInstance().performScanAndConnectWithCenterPoint()
  }
  
  @objc
  func performPowerOnOrOff() {
    print("performPowerOnOrOff called")
    NativeSmartLightsSDKManagerModule.getInstance().performPowerOnOrOff()
  }
  
  @objc
  func performUpdateModeOfLights() {
    print("performUpdateModeOfLights called")
    NativeSmartLightsSDKManagerModule.getInstance().performUpdateModeOfLights()
  }
}
