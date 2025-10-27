/**
 * OjmarSDK Demo App
 * Demonstrates the usage of OCS Smart Lock SDK
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { NativeModules } from 'react-native';


console.log("NativeModules>>>", NativeModules); // check if MySwiftModule exists

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
    </SafeAreaProvider>
  );
}

 function testSwiftModule() {
  try {
    NativeModules.NativeSmartLightsSDKManager.getOutputForTesting()
    console.log('Swift response: from getOutputForTesting');
  } catch (err) {
    console.error('Swift module error:', err);
  }
}

 function getSwiftModuleName() {
  try {
    NativeModules.NativeSmartLightsSDKManager.getModuleName((err: any, result: any) => {
          console.log(result); // "Hello from Objective-C"
          console.log('Swift response: from getSwiftModuleName');
    });
  } catch (err) {
    console.error('Swift module error:', err);
  }
}

testSwiftModule()


getSwiftModuleName();
function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();


  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>NativeSmartLightsSdk Demo</Text>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Smart Lights Scan and Connect</Text>
          <TouchableOpacity
          style={[styles.button, false]}
              onPress={() => {
            NativeModules.NativeSmartLightsSDKManager.scanAndConnectWithCenterPoint();
         }}
          >
            <Text style={styles.buttonText}>
              {'Start Scan & Connect'}
            </Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Power On/Off Smart Lights</Text>
          <TouchableOpacity
            style={[styles.button, false]}
            onPress={() => {
             NativeModules.NativeSmartLightsSDKManager.powerOnOrOff();
           }}
          >
           <Text style={styles.buttonText}>
              {'Power On/Off Smart Lights'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Update Mode Of Smart Lights</Text>
          <TouchableOpacity
            style={[styles.button, false]}
            onPress={() => {
             NativeModules.NativeSmartLightsSDKManager.updateModeOfLights();
           }}
          >
           <Text style={styles.buttonText}>
              {'Update Mode Of Smart Lights'}
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonActive: {
    backgroundColor: '#FF3B30',
  },
  smallButton: {
    backgroundColor: '#007AFF',
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },
  info: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  lockItem: {
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  lockText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  permissionInfo: {
    fontSize: 14,
    marginBottom: 8,
    paddingLeft: 4,
  },
  granted: {
    color: '#28a745',
  },
  denied: {
    color: '#dc3545',
  },
  permissionButton: {
    backgroundColor: '#28a745',
    marginTop: 8,
  },
});

export default App;
