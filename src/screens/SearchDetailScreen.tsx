// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const SearchDetailScreen = () => {
//   return (
//     <View>
//       <Text>SearchDetailScreen</Text>
//     </View>
//   )
// }

// export default SearchDetailScreen

// const styles = StyleSheet.create({})
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
import {
  LocationIcon,
  StarIcon,
  ClockIcon,
  TelephoneIcon,
} from '../assets/generatedicons';

const SearchDetailScreen = ({navigation, route}: any) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.mainCont}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.detailsImg}>
         

          <Image
            source={{uri: item.imageUrl}}
            style={{
              width: '90%',
              height: 253,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />
          <View></View>
        </View>
        <View style={styles.secondaryCont}>
          <View>
            <Text style={styles.textStylePrimary}>{item.name}</Text>
          </View>
          <View style={[styles.iconstack, {columnGap: 3}]}>
            <StarIcon width="15" />
            <Text style={styles.textStyleSecondary}>{item.rate}</Text>
          </View>
        </View>
        <View style={styles.thirdCont}>
          <Text style={styles.textStylePrimaryThird}>Information</Text>
          <View style={{rowGap: 8}}>
            <View style={styles.iconstack}>
              <ClockIcon width="15" />
              <Text style={styles.textStyleThird}>{item.openCloseTime}</Text>
            </View>
            <View style={styles.iconstack}>
              <TelephoneIcon width="14" />
              <Text style={styles.textStyleThird}>{item.phone}</Text>
            </View>
            <View style={styles.iconstack}>
              <LocationIcon width="14" />
              <Text style={styles.textStyleThird}>{item.adress}</Text>
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

export default SearchDetailScreen;

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
    width: '100%',
    height: 160,
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
  iconstack: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
});
