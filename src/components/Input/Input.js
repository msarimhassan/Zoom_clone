import React from 'react';
import {StyleSheet ,TextInput} from 'react-native';

const Input = ({placeholder,inputValue,handleInput}) => {
return <TextInput placeholder={placeholder} style={styles.Input} value={inputValue} onChangeText={text=>handleInput(text)} />
}

const styles = StyleSheet.create({
  Input: {
    height: 35,
    borderRadius:10,
    margin:10,
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
});

export default Input;