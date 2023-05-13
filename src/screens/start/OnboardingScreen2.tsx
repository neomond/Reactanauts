import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const OnboardingScreen2 = ({navigation}: any) => {
  return (
    <View>
      <Text>Onboarding1 Onboarding2Screen</Text>
      <Button onPress={() => navigation.navigate('CategoryList')}>Go to Category Screen</Button>
    </View>
  )
}

export default OnboardingScreen2