import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {
  LocationIcon,
  StarIcon,
  ClockIcon,
  BookmarkIconActive,
} from '../assets/generatedicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import '../locales/i18n';
const SavedItemsScreen = () => {
  const [currentLanguage, setcurrentLanguage] = useState('az');

  const {t, i18n} = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      // this.props.close();
      i18n.options.lng = lang;
      setcurrentLanguage(lang);
    });
  };

  const [savedItems, setSavedItems] = useState<string[]>([]);
  const loadSavedItems = async () => {
    try {
      const savedItemsJson = await AsyncStorage.getItem('basket');
      if (savedItemsJson) {
        const savedItemsArray = JSON.parse(savedItemsJson);
        setSavedItems(savedItemsArray);
      }
    } catch (error) {
      console.log('Error loading saved items:', error);
    }
  };

  useFocusEffect(() => {
    loadSavedItems();
  });
  const handleRemoveItem = async (item: string) => {
    const updatedItems = savedItems.filter(savedItem => savedItem !== item);
    setSavedItems(updatedItems);
    try {
      await AsyncStorage.setItem('basket', JSON.stringify(updatedItems));
    } catch (error) {
      console.log('Error removing item:', error);
    }
  };
  const renderItem = ({item}: any) => (
    <View>
      <View style={styles.detailsImg}>
        <View style={styles.bookmarkIcon}>
          <TouchableOpacity onPress={() => handleRemoveItem(item)}>
            <BookmarkIconActive
              width="12"
              height="12"
              fill="#fff"
              stroke="#fff"
            />
          </TouchableOpacity>
        </View>

        <Image
          style={{
            width: '90%',
            height: 253,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          source={{uri: item.imageUrl}}
        />
      </View>
      <View style={styles.secondaryCintainer}>
        <Text style={styles.textStylePrimaryThird}>{item.name}</Text>
        <View style={styles.thirdContainer}>
          <View style={styles.iconstack}>
            <LocationIcon width="13" />
            <Text style={styles.textLabel}>6 km</Text>
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
    </View>
  );
  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>{t('noSavedItems')}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.rootCont}>
      <View style={styles.secondaryCont}>
        <View>
          <Text style={styles.textStylePrimary}>{t('saved')}</Text>
        </View>
      </View>
      {savedItems.length === 0 ? (
        renderEmptyList()
      ) : (
        <FlatList
          data={savedItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
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
    marginHorizontal: 18,
    marginVertical: 12,
    paddingTop: 10,
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
    textAlign: 'center',
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
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});
