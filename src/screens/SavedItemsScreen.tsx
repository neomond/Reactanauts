import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const SavedItemsScreen = () => {
  return (
    <SafeAreaView style={styles.rootCont}>
      <ScrollView>
        <View style={styles.secondaryCont}>
          <View>
            <Text style={styles.textStylePrimary}>Saved</Text>
          </View>
        </View>

        <View>
          <View style={styles.detailsImg}>
            <Image
              style={{width: 340, height: 253}}
              source={require('../assets/images/testimg.png')}
            />
          </View>
          <View style={styles.secondaryCintainer}>
            <Text style={styles.textStylePrimaryThird}>Museum in</Text>
            <View style={styles.thirdContainer}>
              <View>
                <Text style={styles.textLabel}>13 km</Text>
              </View>
              <View>
                <Text style={styles.textLabel}>08:00 - 23:00</Text>
              </View>
              <View>
                <Text style={styles.textLabel}>4.3</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedItemsScreen;

const styles = StyleSheet.create({
  rootCont: {
    backgroundColor: '#1C1C1C',
    flex: 1,
    justifyContent: 'center',
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
  detailsImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  secondaryCintainer: {
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  textStylePrimaryThird: {
    color: '#E8E8E8',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 4,
  },
  thirdContainer: {
    flexDirection: 'row',
    columnGap: 18,
    paddingVertical: 4,
  },
  textLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#E8E8E8',
  },
});
