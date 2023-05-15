import React, { useEffect, useState } from 'react';
import { View, Text, Button ,Image} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geocoder from 'react-native-geocoding';
import axios from 'axios';
import { Loc } from '../images';

<<<<<<< HEAD

const API_KEY = '729cf7aad0a46677bbf6c8da49f416b5'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
=======
const API_KEY = 'daac4b59547b857ad8e0869083c4d642';  // Replace 'YOUR_API_KEY' with your Google Maps Geocoding API key
>>>>>>> cf0bc52bbd66d6890360a7d30be532789dc5cccd

const App = () => {
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [konum, setkonum] = useState<any>([])

  const getLocation = async () => {
    try {
      const permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (permission === 'granted') {
        Geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            getLocationName(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getLocationName = async (latitude:any, longitude:any) => {
    try {
      const response = await Geocoder.from(latitude, longitude);
      const address = response.results[0].formatted_address;
      setLocation(address);
    } catch (error) {
      console.log(error);
    }
    axios
    .get('http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=40.4010583&longitude=49.9410572&localityLanguage=en')
    .then((response) => {
      setkonum(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
<<<<<<< HEAD

=======
    axios.get(`https:// /data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => {
      setWeatherData(response.data.main.temp)
      // Hava durumu verilerini kullanarak istediğiniz işlemleri yapabilirsiniz
    })
    .catch(error => {
      console.log(error);
    });
  
>>>>>>> cf0bc52bbd66d6890360a7d30be532789dc5cccd
    
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={{ flexDirection: 'row', marginTop: 40 }}>
      <View
        style={{
          backgroundColor: '#262626',
          flexDirection: 'row',
          padding: 10,
          width: 250,
          marginLeft: 20,
          borderRadius: 10,
        }}
      >
        <Loc />
    <View style={{flexDirection:"row",gap:10}}>

    <Text style={{ color: 'white', fontSize: 15 }}>{konum.city}</Text>
        <Text style={{ color: 'white', fontSize: 15 }}>{konum.countryName}</Text>
    </View>
      </View>
      {weatherData && (
        <View
          style={{
            backgroundColor: '#262626',
            flexDirection: 'row',
            padding: 10,
            width: 80,
            marginLeft: 15,
            borderRadius: 10,
            gap:5
          }}
          
        >
          <Text style={{ color: 'white', fontSize: 15 }}>{Math.round(weatherData.main.temp)-273} °C</Text>
          <Image style={{width:30,height:20}}  source={{
                            uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
                          }}/>
        </View>
      )}
    </View>
  );
};

export default App;
