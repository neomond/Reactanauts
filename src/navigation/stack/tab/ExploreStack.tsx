import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExploreMain from '../../../screens/home';
import HomeDetails from '../../../screens/HomeStack/HomeDetails';

const Explore = createNativeStackNavigator();

const ExploreStack = ({navigation}: any) => {
  return (
    <Explore.Navigator>
      <Explore.Screen
        name="ExploreMain"
        component={ExploreMain}
        options={{headerShown: false}}
      />
      <Explore.Screen
        name="ExploreDetail"
        component={HomeDetails}
        options={{headerShown: false}}
      />
    </Explore.Navigator>
  );
};

export default ExploreStack;
