import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FirstLoginProvider} from './src/context/FirstLoginContext';
import OpenScreen from './src/screens/openScreen/OpenScreen';
import {DataProvider} from './src/context/DataContext';
import {CategoryProvider} from './src/context/CategoriesContext';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './src/locales/i18n'
import { useTranslation } from "react-i18next";
const App = () => {
  
  const [currentLanguageMain, setcurrentLanguageMain] = useState('')

  const { t, i18n } = useTranslation();
  useEffect(() => {
    SplashScreen.hide();
    AsyncStorage.getItem("language").then(res=>{
      if (res) {
        i18n.changeLanguage(res).then(() => {
          // this.props.close();
          i18n.options.lng = res;
          setcurrentLanguageMain(res)
      });
      }
    })
  }, []);

  return (
    <>
      <NavigationContainer>
        <CategoryProvider>
          <DataProvider>
            <FirstLoginProvider>
              <OpenScreen />
            </FirstLoginProvider>
          </DataProvider>
        </CategoryProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
// import React,{useEffect, useState} from 'react';
// import './src/locales/index';
// import {View, Text,Pressable} from 'react-native';
// import {useTranslation} from 'react-i18next';
// import SplashScreen from 'react-native-splash-screen';
  
// const App = () => {

//     useEffect(() => {
      
    
//     SplashScreen.hide()
//     }, [])
    
//   const {t, i18n} = useTranslation();
 
// useEffect(() => {
//   i18n.changeLanguage('az')
// })
//   return (
//    <View
//         style={{
//           flex: 1,
     
      
//         }}>
//         <Text style={{fontWeight: 'bold', fontSize: 25, color: 'red'}}>
//           {t('information')}
//         </Text>
//         <Text style={{fontWeight: 'bold', fontSize: 25, color: 'red'}}>
//           {t('information')}
//         </Text>
       
//       </View>
//   );
// };
  
// export default App;