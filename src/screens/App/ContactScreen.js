import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Input from "../../components/Input";
import {Text} from '../../components';
import { TextSizes } from '../../common';
const ContactScreen = () => {

    const[inputValue,setValue]=useState();
    console.log(inputValue);
return (
  <View>
    <Input placeholder='Search' inputValue={inputValue} handleInput={setValue} />
    <Text style={styles.Heading}>My Contacts</Text>

  </View>
);
}

const styles = StyleSheet.create({
  container: {

  },
  Heading:{
      fontSize:TextSizes.Headings,
  }
});

export default ContactScreen;