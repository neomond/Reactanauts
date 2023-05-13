import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesMain from '../../../screens/favorites';

const Favorites = createNativeStackNavigator();


const FavoriteStack = () => {
  return (
    <Favorites.Navigator>
      <Favorites.Screen name="FavoritesMain" component={FavoritesMain} />
    </Favorites.Navigator>
  )
}

export default FavoriteStack