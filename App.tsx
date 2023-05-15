import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { FirstLoginProvider } from './src/context/FirstLoginContext';
import OpenScreen from './src/screens/openScreen/OpenScreen';
import { DataProvider } from './src/context/DataContext';
import { CategoryProvider } from './src/context/CategoriesContext';

const App = () => {
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
