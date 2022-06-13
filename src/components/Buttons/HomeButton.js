import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeButton = ({Icon, Heading, color,route}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(route)} style={styles.tiles}>
      <View style={[styles.tiles, {backgroundColor: color}]}>{Icon}</View>
      <Text style={{marginTop: 5}}>{Heading}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tiles: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default HomeButton;
