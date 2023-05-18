import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState} from 'react';

import {LocationIcon, StarIcon, ClockIcon} from '../assets/generatedicons';
import {DataContext} from '../context/DataContext';
import SvgBookmarkIconActive from '../assets/generatedicons/BookmarkIconActive';
import { useTranslation } from 'react-i18next';

const SearchScreen = ({navigation}: any) => {
  const {contextData, setContextData} = useContext(DataContext);
  const [filteredData, setFilteredData] = useState<any[]>(contextData);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentLanguage, setcurrentLanguage] = useState('az')

  const { t, i18n } = useTranslation();

 const changeLang = (lang: string) => {

    i18n.changeLanguage(lang).then(() => {
        // this.props.close(); 
        i18n.options.lng = lang;
        setcurrentLanguage(lang)
    });

  }
  console.log(contextData);
  const goToDetail = (item: any) => {
    navigation.navigate('ExploreDetail', {item: item});
  };

  const handleSearch = (text: any): any => {
    setSearchText(text);
    setLoading(true);
    const filtered = contextData.filter((item: any) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    console.log(filteredData);
    setFilteredData(filtered);
    setLoading(false);
  };

  const [dataToShow, setDataToShow] = useState(contextData);
  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => goToDetail(item)}>
      <View style={styles.detailsImg}>
        <View style={styles.bookmarkIcon}>
          <SvgBookmarkIconActive width="12" height="12" stroke="#fff" />
        </View>
        <Image
          source={{uri: item.imageUrl}}
          style={{
            width: '90%',
            height: 253,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
      </View>
      <View style={styles.secondaryCintainer}>
        <Text style={styles.textStylePrimaryThird}>{item.name}</Text>
        <View style={styles.thirdContainer}>
          <View style={styles.iconstack}>
            <LocationIcon width="13" />
            <Text style={styles.textLabel}>13 km</Text>
          </View>
          <View style={styles.iconstack}>
            <ClockIcon width="13" />
            <Text style={styles.textLabel}>{item.openCloseTime}</Text>
          </View>
          <View style={styles.iconstack}>
            <StarIcon width="13" />
            <Text style={styles.textLabel}>{item.rate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderNoResults = () => (
    <View style={{flex: 1, alignItems: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Text style={{color: '#fff', fontSize: 18}}>No products found.</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.rootCont}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.rooCont1}>
        <View style={styles.secondaryCont}>
          {/* <SearchIconNormal /> */}
          <Text style={styles.iconsearch}>🔍</Text>
          <TextInput
            style={styles.input}
            placeholder={t("search").toString()}
            placeholderTextColor="#B9B9B9"
            onChangeText={handleSearch}
          />
        </View>
        <ScrollView
          horizontal={true}
          style={styles.categoriesItems}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🍽️ Restaurant</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🏛️ Sight</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🛍️ Shop</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🖼️️ Museum</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🛏️ Hotel</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🪩 Club</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🛝 Park</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🏨 Hospital</Text>
          </View>
        </ScrollView>
        {filteredData.length === 0 && searchText !== '' ? (
          renderNoResults()
        ) : loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

// id: place.id,
// name: place.name,
// categoryId: place.categoryId,
// rate: place.rate,
// lat: place.lat,
// long: place.long,
// imageUrl: place.imageUrl,
// openCloseTime: place.openCloseTime,
// adress: place.adress,
// phone: place.phone,
// isSaved: place.isSaved,
const styles = StyleSheet.create({
  rootCont: {
    backgroundColor: '#1C1C1C',
  },
  rooCont1: {
    height: '100%',
    backgroundColor: '#1C1C1C',
  },
  secondaryCont: {
    marginHorizontal: 18,
    marginVertical: 12,
    paddingTop: 10,
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
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    marginHorizontal: 18,
    borderColor: '#262626',
    paddingBottom: 12,
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
  iconstack: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  bookmarkIcon: {
    position: 'absolute',
    zIndex: 9999,
    top: 15,
    right: 35,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#1C1C1C',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#262626',
    borderColor: '#262626',
    fontSize: 14,
    fontWeight: '400',
    padding: 10,
    paddingHorizontal: 45,
    width: '100%',
    color: '#fff',
  },
  iconsearch: {
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 9999,
    fontSize: 13,
  },
  categoriesItems: {
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 5,
    height: 28,
  },
  categoriesItem: {
    paddingHorizontal: 12,
    paddingVertical: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#262626',
    marginRight: 8,
    height: 25,
  },
  textCategories: {
    color: '#fff',
    fontSize: 14,
  },
});
