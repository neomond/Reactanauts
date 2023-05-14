import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const HomeDetails = () => {
  return (
    <SafeAreaView style={styles.mainCont}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.detailsImg}>
          <Image
            style={{width: 340, height: 253}}
            source={require('../../assets/images/testimg.png')}
          />
        </View>
        <View style={styles.secondaryCont}>
          <View>
            <Text style={styles.textStylePrimary}>HomeDetails</Text>
          </View>
          <View>
            <Text style={styles.textStyleSecondary}>4.3</Text>
          </View>
        </View>
        <View style={styles.thirdCont}>
          <Text style={styles.textStylePrimaryThird}>Information</Text>
          <View style={{rowGap: 8}}>
            <View>
              <Text style={styles.textStyleThird}>
                Mon - Fri, 08:00 - 23:00
              </Text>
            </View>
            <View>
              <Text style={styles.textStyleThird}>+994 01 234 56 78</Text>
            </View>
            <View>
              <Text style={styles.textStyleThird}>Nizami küçəsi, 203B</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdCont}>
          <Text style={styles.textStylePrimaryThird}>Map</Text>
          <View style={styles.mapStyle}></View>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnStyleText}>Go to map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDetails;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: '#1C1C1C',
    flex: 1,
  },
  detailsImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  secondaryCont: {
    margin: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStylePrimary: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  textStyleSecondary: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  thirdCont: {
    marginHorizontal: 18,
    marginBottom: 18,
    rowGap: 10,
  },
  textStylePrimaryThird: {
    color: '#E8E8E8',
    fontSize: 16,
    fontWeight: '600',
  },
  textStyleThird: {
    color: '#B9B9B9',
    fontSize: 14,
    fontWeight: '400',
  },
  mapStyle: {
    marginTop: 8,
    width: 343,
    height: 157,
    backgroundColor: '#B9B9B9',
    borderRadius: 12,
  },
  btnStyle: {
    backgroundColor: '#018CF1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 12,
  },
  btnStyleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
