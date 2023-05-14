import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen1 from '../../../screens/start/OnboardingScreen1';
import OnboardingScreen2 from '../../../screens/start/OnboardingScreen2';
import CategoryListScren from '../../../screens/start/CategoryListScren';
import GeoScreen from '../../../screens/start/GeoScreen';

const Start = createNativeStackNavigator();

const StartStack = () => {
  return (
    <Start.Navigator screenOptions={{
      headerShown: false
    }}>
      <Start.Screen name="Onboarding1" component={OnboardingScreen1} />
      <Start.Screen name="CategoryList" options={{
        gestureEnabled: false
      }} component={CategoryListScren} />
      <Start.Screen name="GeoLocation" component={GeoScreen} />

    </Start.Navigator>
  )
}

export default StartStack