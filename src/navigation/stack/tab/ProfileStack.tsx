import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileMain from '../../../screens/profile';


const Profile = createNativeStackNavigator();

const ProfileStack = () => {
  return (<>
    <Profile.Navigator>
      <Profile.Screen name="ProfileMain" component={ProfileMain} />
    </Profile.Navigator>
  </>
  )
}

export default ProfileStack