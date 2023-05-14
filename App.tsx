import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {FirstLoginProvider} from './src/context/FirstLoginContext';
import OpenScreen from './src/screens/openScreen/OpenScreen';
import { DataProvider } from './src/context/DataContext';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <DataProvider>
        <FirstLoginProvider>
          <OpenScreen />
        </FirstLoginProvider>
        </DataProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
