
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStack from '../stack/tab/ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoriteStack from '../stack/tab/FavoriteStack';
import ExploreStack from '../stack/tab/ExploreStack';


const Tab = createBottomTabNavigator();

const TabMain = () => {
  return (<>



    <Tab.Navigator screenOptions={{ headerShown: false }}>


    <Tab.Screen
      name="Explore"
      component={ExploreStack}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />
      }}
    />

    
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoriteStack}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="star" size={26} />
        }}
      />


    </Tab.Navigator>
  </>
  )
}

export default TabMain