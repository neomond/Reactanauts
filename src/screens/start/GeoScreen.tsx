import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const GeoScreen = () => {
  return (
    <SafeAreaView style={styles.rootCont}>
      <StatusBar barStyle="light-content" />
      <View style={styles.secondaryCont}>
        <View>
          <Text style={styles.textStylePrimary}>Geolocation disabled</Text>
        </View>
        <View>
          <Text style={styles.textStyleSecondary}>
            To improve the application, enable geolocation in the settings.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnStyleText}>Open settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GeoScreen;

const styles = StyleSheet.create({
  rootCont: {
    backgroundColor: '#1C1C1C',
    flex: 1,
    justifyContent: 'center',
  },
  secondaryCont: {
    margin: 18,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 16,
  },
  textStylePrimary: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  textStyleSecondary: {
    color: '#fff',
    fontSize: 16,
    rowGap: 8,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 25,
  },
  btnStyle: {
    backgroundColor: '#018CF1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 18,
  },
  btnStyleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
