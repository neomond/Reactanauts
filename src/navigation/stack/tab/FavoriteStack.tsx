import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesMain from '../../../screens/favorites';
import HomeDetails from '../../../screens/HomeStack/HomeDetails';

const Favorites = createNativeStackNavigator();


const FavoriteStack = () => {
  return (
    <Favorites.Navigator>
      <Favorites.Screen name="FavoritesMain" component={FavoritesMain} />

      <Favorites.Screen
      name="ExploreDetail"
        component={HomeDetails}
        options={{headerShown: false}} />
    </Favorites.Navigator>
  )
}

export default FavoriteStack