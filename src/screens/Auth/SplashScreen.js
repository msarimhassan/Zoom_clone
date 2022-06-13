import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Routes} from '../../common';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.LoginScreen);
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/zoom.png')}
        style={styles.ImageSizing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  ImageSizing: {
    width: 300,
    height: 100,
  },
});

export default SplashScreen;
