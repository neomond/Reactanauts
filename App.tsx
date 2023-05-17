import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FirstLoginProvider} from './src/context/FirstLoginContext';
import OpenScreen from './src/screens/openScreen/OpenScreen';
import {DataProvider} from './src/context/DataContext';
import {CategoryProvider} from './src/context/CategoriesContext';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
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