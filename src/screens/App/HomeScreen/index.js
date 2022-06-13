import React from 'react';
import {View} from 'react-native';

import {Icons} from '../../../common';
import {HomeButton} from '../../../components/Buttons';
import styles from './styles';
import { Routes } from '../../../common';

const HomeScreen = () => {

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.btnContainer, {marginTop: 110}]}>
          <HomeButton
            Icon={<Icons.Feather name="video" size={50} color="white" />}
            Heading="New Meeting"
            color="#EC5804"
            route={Routes.StartCallScreen}
          />
          <HomeButton
            Icon={
              <Icons.AntDesign name="pluscircleo" size={50} color="white" />
            }
            Heading="Join"
            color="#1962EC"
            route={Routes.JoinMeetingScreen}
          />
        </View>

        <View style={styles.btnContainer}>
          <HomeButton
            Icon={<Icons.AntDesign name="calendar" size={50} color="white" />}
            Heading="Schedule"
            color="#1962EC"
            route={Routes.ScheduleScreen}
          />
          <HomeButton
            Icon={<Icons.Feather name="share" size={50} color="white" />}
            Heading="Share"
            color="#1962EC"
            route={Routes.ShareScreen}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
