import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreMain from '../../../screens/explore';

const Explore = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Explore.Navigator>
      <Explore.Screen name="ExploreMain" component={ExploreMain} />
    </Explore.Navigator>
  )
}

export default ExploreStack