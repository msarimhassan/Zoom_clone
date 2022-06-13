import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContactScreen,SettingScreen,MeetingScreen} from '../screens/App';
import { Icons } from '../common';
import {Routes} from '../common';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Routes.Home}
        component={HomeNavigator}
        options={{tabBarIcon: () => <Icons.AntDesign name="home" size={25} />}}
      />
      <Tab.Screen
        name={Routes.Meeting}
        component={MeetingScreen}
        options={{
          tabBarIcon: () => <Icons.AntDesign name="clockcircleo" size={25} />,
        }}
      />
      <Tab.Screen
        name={Routes.ContactScreen}
        component={ContactScreen}
        options={{
          tabBarIcon: () => <Icons.AntDesign name="contacts" size={25} />,
        }}
      />
      <Tab.Screen
        name={Routes.Settings}
        component={SettingScreen}
        options={{
          tabBarIcon: () => <Icons.AntDesign name="setting" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
