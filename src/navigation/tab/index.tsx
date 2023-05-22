import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreStack from '../stack/tab/ExploreStack';
import SavedItemsScreen from '../../screens/SavedItemsScreen';
import {
  BookmarkIconNormal,
  HomeIcon,
  SearchIconNormal,
} from '../../assets/generatedicons';
import SearchStack from '../stack/tab/SearchStack';
import SettingsStack from '../stack/tab/SettingsStack';
import SvgProfileIcon from '../../assets/generatedicons/ProfileIcon';

const Tab = createBottomTabNavigator();

const TabMain = ({navigation}: any) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          title: '',
          tabBarStyle: {
            backgroundColor: '#1C1C1C',
            paddingTop: 15,
            paddingBottom: 5,
            borderTopColor: 'black',
          },
          headerBackgroundContainerStyle: {borderStartColor: 'black'},
        }}>
        <Tab.Screen
          name="HomeStack"
          component={ExploreStack}
          options={{
            tabBarIcon: ({focused}) => <HomeIcon focused={focused} />,
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: ({focused}) => <SearchIconNormal focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={SavedItemsScreen}
          options={{
            tabBarIcon: ({focused}) => <BookmarkIconNormal focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarIcon: ({focused}) => <SvgProfileIcon focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabMain;
