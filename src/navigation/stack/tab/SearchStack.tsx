import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../../../screens/SearchScreen';
import SearchDetailScreen from '../../../screens/SearchDetailScreen';
import HomeDetails from '../../../screens/HomeStack/HomeDetails';

const Search = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Search.Navigator>
      <Search.Screen
        name="SearchMain"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Search.Screen
        name="SearchDetail"
        component={HomeDetails}
        options={{headerShown: false}}
      />
    </Search.Navigator>
  );
};

export default SearchStack;
