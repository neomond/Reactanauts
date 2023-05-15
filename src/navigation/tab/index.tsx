import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStack from '../stack/tab/ProfileStack';
import FavoriteStack from '../stack/tab/FavoriteStack';
import ExploreStack from '../stack/tab/ExploreStack';
import HomeDetails from '../../screens/HomeStack/HomeDetails';
import GeoScreen from '../../screens/start/GeoScreen';
import SavedItemsScreen from '../../screens/SavedItemsScreen';
import { BookmarkIconNormal, HomeIcon, HomeIconActive, SearchIconNormal } from '../../assets/generatedicons';
import SearchScreen from '../../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const TabMain = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{ headerShown: false, title: "" ,headerBackgroundContainerStyle:{borderStartColor:"black"}}}>
        <Tab.Screen

          name="HomeStack"
          component={ExploreStack}
          options={{tabBarIcon : () => <HomeIcon />}}
        />

        <Tab.Screen
          name="Profile"
          component={HomeDetails}
          options={{
            tabBarIcon: () => <SearchIconNormal />,
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={SavedItemsScreen}
          options={{
            tabBarIcon: () => <BookmarkIconNormal />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => <BookmarkIconNormal />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabMain;
