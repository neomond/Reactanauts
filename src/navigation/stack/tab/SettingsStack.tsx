import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingsMain from '../../../screens/settings/SettingsMain'
import LanguageSelect from '../../../screens/settings/LanguageSelect'
const Settings = createNativeStackNavigator()
const SettingsStack = () => {
  return (
  <Settings.Navigator initialRouteName='SettingsMain'>
  <Settings.Screen
        name="SettingsMain"
        component={SettingsMain}
        options={{headerShown: false}}
      />
      <Settings.Screen
        name="LanguageSelect"
        component={LanguageSelect}
        options={{headerShown: false}}
      />
  </Settings.Navigator>
  )
}

export default SettingsStack

const styles = StyleSheet.create({})