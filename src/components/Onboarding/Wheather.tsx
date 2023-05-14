import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geocoder from 'react-native-geocoding';
import axios from 'axios';
import { Loc } from '../images';

const API_KEY = 'YOUR_WEATHER_API_KEY';  // Replace 'YOUR_API_KEY' with your Google Maps Geocoding API key

const App = () => {
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);
  const [location, setlocation] = useState<any>([]);
  const [weatherData, setWeatherData] = useState<any>('');

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

  const getLocationName = async (latitude: number, longitude: number) => {
    try {
      const response = await Geocoder.from(latitude, longitude);
      
     
    } catch (error) {
      console.log(error);
    }
    axios.get('http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=40.4110586&longitude=49.9410588&localityLanguage=en')
    .then(function (response) {
      setlocation(response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => {
      setWeatherData(response.data.main.temp)
      // Hava durumu verilerini kullanarak istediğiniz işlemleri yapabilirsiniz
    })
    .catch(error => {
      console.log(error);
    });
  
    
  };

  useEffect(() => {
    getLocation();
    
  }, []);


  return (
   <View style={{flexDirection:"row",marginTop:40}}>
   
     <View style={{ backgroundColor:"#262626" ,flexDirection:"row",padding:10,width:250,marginLeft:20,borderRadius:10}}>
        <Loc/>
          <Text style={{color:"white",fontSize:15}}> {location.city}</Text>
          <Text style={{color:"white",fontSize:15}}> {location.countryName}</Text>
          
    </View>
     <View style={{ backgroundColor:"#262626" ,flexDirection:"row",padding:10,width:80,marginLeft:15,borderRadius:10}}>
     <Text style={{color:"white",fontSize:15}}> +3</Text>

     
</View>
   </View>
  );
};

export default App;
