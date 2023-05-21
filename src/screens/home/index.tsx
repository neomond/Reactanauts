import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {FavoritesContext} from '../../context/FavoritesContext';
import Wheather from '../../components/Onboarding/Wheather';
import {Loc, Saat, Ulsuz} from '../../components/images';
import {DataContext} from '../../context/DataContext';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import {BookmarkIconActive} from '../../assets/generatedicons';

const ExploreMain = ({navigation}: any) => {
  const [selectedItemIds, setSelectedItemIds] = useState<any>([]);

  const [load, setload] = useState(false);
  const isFocused = useIsFocused();
  const [sections, setSections] = useState<any[]>([]);

  const {contextData, setContextData} = useContext(DataContext);
  const [favcategories, setfavCategorites] = useState([]);
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);
  const [isButtonPressed, setIsButtonPressed] = useState<any>(false);

  const getLocation = async () => {
    let granted = '';
    try {
      if (Platform.OS == 'ios') {
        granted = await Geolocation.requestAuthorization('whenInUse');
        if (granted === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            error => {
              console.log(error);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      } else {
        granted = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (granted === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            error => {
              console.log(error);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();

    AsyncStorage.getItem('userCategories').then(res => {
      console.log(res);

      const favcategories1 = JSON.parse(res ? res : '[]');
      setfavCategorites(favcategories1);
      console.log(favcategories1);

      const mappedData = favcategories1.map((category: any) => {
        const placesInCategory = contextData.filter(
          (place: any) => place.categoryId == category.id,
        );
        const mappedPlaces = placesInCategory.map((place: any) => ({
          id: place.id,
          name: place.name,
          categoryId: place.categoryId,
          rate: place.rate,
          lat: place.lat,
          long: place.long,
          imageUrl: place.imageUrl,
          openCloseTime: place.openCloseTime,
          adress: place.adress,
          phone: place.phone,
          isSaved: place.isSaved,
        }));

        return {
          title: category.name,
          data: mappedPlaces,
        };
      });
      console.log(mappedData);

      setSections(mappedData);

      setload(!load);
      console.log(favcategories);
    });
  }, []);

  let {favorites, setFavorites} = useContext(FavoritesContext);
  const [products, setproducts] = useState<any[]>([]);

  const favOperation = (item: any) => {
    let favControl = favorites.find(favItem => favItem.id === item.id);
    if (!favControl) {
      setFavorites([...favorites, item]);
    } else {
      let filteredFavorites = favorites.filter(q => q.id != item.id);
      setFavorites([...filteredFavorites]);
    }
  };
  // const Favorites = async (item: any) => {
  //   setIsButtonPressed(!isButtonPressed)
  //   try {
  //     const basketItems: any = await AsyncStorage.getItem('basket');
  //     let basket = [];

  //     if (basketItems !== null) {
  //       basket = JSON.parse(basketItems);

  //       const isItemInBasket = basket.some((basketItem: any) => basketItem.id === item.id);
  //       if (isItemInBasket) {
  //         // Item already exists in the basket, remove it
  //         const updatedBasket = basket.filter((basketItem: any) => basketItem.id !== item.id);
  //         await AsyncStorage.setItem('basket', JSON.stringify(updatedBasket));
  //         console.log('Item removed from basket:', item);
  //       } else {
  //         // Item doesn't exist in the basket, add it
  //         basket.push(item);
  //         await AsyncStorage.setItem('basket', JSON.stringify(basket));
  //         console.log('Item added to basket:', item);
  //       }
  //     } else {
  //       // No items in the basket, add the item
  //       basket.push(item);
  //       await AsyncStorage.setItem('basket', JSON.stringify(basket));
  //       console.log('Item added to basket:', item);
  //     }
  //   } catch (error) {
  //     console.error('Error adding/removing item to/from basket:', error);
  //   }
  // };
  const Favorites = async (item: any) => {
    setIsButtonPressed(!isButtonPressed);
    if (selectedItemIds.includes(item.id)) {
      const updatedItemIds = selectedItemIds.filter(
        (item: any) => item.id !== item.id,
      );
      setSelectedItemIds(updatedItemIds);
    } else {
      setSelectedItemIds([...selectedItemIds, item.id]);
    }

    try {
      const basketItems: any = await AsyncStorage.getItem('basket');
      let basket = [];

      if (basketItems !== null) {
        basket = JSON.parse(basketItems);

        const isItemInBasket = basket.some(
          (basketItem: any) => basketItem.id === item.id,
        );
        if (isItemInBasket) {
          // Item already exists in the basket, remove it
          const updatedBasket = basket.filter(
            (basketItem: any) => basketItem.id !== item.id,
          );
          await AsyncStorage.setItem('basket', JSON.stringify(updatedBasket));
          console.log('Item removed from basket:', item);
        } else {
          // Item doesn't exist in the basket, add it
          basket.push(item);
          await AsyncStorage.setItem('basket', JSON.stringify(basket));
          console.log('Item added to basket:', item);
        }
      } else {
        // No items in the basket, add the item
        basket.push(item);
        await AsyncStorage.setItem('basket', JSON.stringify(basket));
        console.log('Item added to basket:', item);
      }
    } catch (error) {
      console.error('Error adding/removing item to/from basket:', error);
    }
  };

  function toRadians(degrees: any) {
    return degrees * (Math.PI / 180);
  }

  function calculateDistance(lat1: any, lon1: any, lat2: any, lon2: any) {
    console.log(lat1, lon1, lat2, lon2);

    const R = 6371; // Earth's radius in kilometers
    const lat1Rad = toRadians(lat1);
    const lon1Rad = toRadians(lon1);
    const lat2Rad = toRadians(lat2);
    const lon2Rad = toRadians(lon2);

    const deltaLat = lat2Rad - lat1Rad;
    const deltaLon = lon2Rad - lon1Rad;

    const a =
      Math.sin(deltaLat / 2) ** 2 +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return Math.floor(distance / 1000);
  }

  const goToDetail = (item: any) => {
    navigation.navigate('ExploreDetail', {item: item});
  };
  // Example usage

  const renderItem = ({item}: any) => (
    <Pressable onPress={() => goToDetail(item)}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#262626',
          marginTop: 20,
          marginLeft: 10,
        }}>
        <View style={{flexDirection: 'column'}}>
          <View style={{position: 'relative'}}>
            <Image
              source={{uri: item.imageUrl}}
              style={{
                width: 280,
                height: 200,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 20,
                right: 10,
                backgroundColor: 'black',
                marginLeft: 10,
                padding: 10,
                borderRadius: 100,
              }}>
              <TouchableOpacity onPress={() => Favorites(item)}>
                <BookmarkIconActive
                  width="12"
                  height="20"
                  fill={selectedItemIds.includes(item.id) ? 'white' : 'black'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 12, marginLeft: 10}}>
            <Text style={{color: '#fff', fontSize: 16, marginLeft: 10}}>
              {item.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 8,
              gap: 25,
              marginLeft: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Loc
                width="12"
                height="12"
                style={{marginRight: 4, marginTop: 2}}
              />
              <Text style={{color: 'white'}}>
                {calculateDistance(latitude, longitude, item.lat, item.long)} KM
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Saat
                width="12"
                height="12"
                style={{marginRight: 4, marginTop: 2}}
              />
              <Text style={{color: 'white'}}>{item.openCloseTime}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ulsuz
                width="12"
                height="12"
                style={{marginRight: 4, marginTop: 2}}
              />
              <Text style={{fontSize: 14, color: 'white'}}>{item.rate}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1c1c1c'}}>
      <StatusBar barStyle="light-content" />
      <Wheather />
      <ScrollView>
        {sections.map((bolum, index) => (
          <View key={index}>
            <View style={{marginLeft: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 30,
                  color: 'white',
                }}>
                {bolum.title}
              </Text>
            </View>
            <FlatList
              data={bolum.data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              contentContainerStyle={{paddingHorizontal: 10, gap: 20}}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreMain;
