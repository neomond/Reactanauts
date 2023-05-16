import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {BaseNetwork} from '../../network/api';
import {FavoritesContext} from '../../context/FavoritesContext';
import {ActivityIndicator, Button} from 'react-native-paper';
import Wheather from '../../components/Onboarding/Wheather';
import {Kayd, Loc, Saat, Ulsuz} from '../../components/images';
import {getAllData} from '../../utils/network/api';
import {DataContext} from '../../context/DataContext';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geocoder from 'react-native-geocoding';

//  [{
//   title: 'Restourants',
//   data: [
//     { id: 1, name: 'Restoran 1', photo: 'https://example.com/restoran1.jpg', rating: 4.5 },
//     { id: 2, name: 'Restoran 2', photo: 'https://example.com/restoran2.jpg', rating: 3.8 },
//     // Restoran verilerini buraya ekleyin
//   ],
// },
// {
//   title: 'Hospital',
//   data: [
//     { id: 1, name: 'Hastane 1', photo: 'https://example.com/hastane1.jpg', rating: 4.2 },
//     { id: 2, name: 'Hastane 2', photo: 'https://example.com/hastane2.jpg', rating: 4.7 },
//     // Hastane verilerini buraya ekleyin
//   ],
// }]

const ExploreMain = () => {
  const [load, setload] = useState(false);
  const isFocused = useIsFocused();
  const [sections, setSections] = useState<any[]>([]);

  const {contextData, setContextData} = useContext(DataContext);
  const [favcategories, setfavCategorites] = useState([]);
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);

  const getLocation = async () => {
    try {
      const permission = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      // const permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (permission === 'granted') {
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

  // Example usage

  const renderItem = ({item}: any) => (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        marginTop: 20,
      }}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{position: 'relative', marginLeft: 10, marginTop: 10}}>
          <Image
            source={{uri: item.imageUrl}}
            style={{width: 280, height: 200}}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              marginLeft: 220,
              backgroundColor: 'black',
              padding: 10,
              borderRadius: 100,
              marginTop: 10,
            }}>
            <Kayd />
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'white', fontSize: 18}}>{item.name}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, gap: 25}}>
          <View style={{flexDirection: 'row'}}>
            <Loc />
            <Text style={{color: 'white'}}>
              {calculateDistance(latitude, longitude, item.lat, item.long)} KM
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Saat />
            <Text style={{color: 'white'}}>{item.openCloseTime}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ulsuz />
            <Text style={{fontSize: 14, color: 'white'}}>{item.rate}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#1C1C1C'}}>
      <Wheather />
      <ScrollView>
        {sections.map((bolum, index) => (
          <View key={index} style={{marginTop: 10}}>
            <View style={{marginLeft: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 10,
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
    </View>
  );
};

export default ExploreMain;
