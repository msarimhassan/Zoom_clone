import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, StartCallScreen, JoinMeetingScreen,ScheduleScreen,ShareScreen} from '../screens/App';
import {Routes} from '../common';

const Screen = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Screen.Navigator initialRouteName={Routes.HomeScreen}>
      <Screen.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Screen.Screen name={Routes.StartCallScreen} component={StartCallScreen} />
      <Screen.Screen name={Routes.JoinMeetingScreen} component={JoinMeetingScreen}/>
      <Screen.Screen name={Routes.ScheduleScreen} component={ScheduleScreen} />
      <Screen.Screen name={Routes.ShareScreen} component={ShareScreen} />
    </Screen.Navigator>
  );
};

export default HomeNavigator;
