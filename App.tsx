import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {FirstLoginProvider} from './src/context/FirstLoginContext';
import OpenScreen from './src/screens/openScreen/OpenScreen';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <FirstLoginProvider>
          <OpenScreen />
        </FirstLoginProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
