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
