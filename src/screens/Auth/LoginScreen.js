import React from 'react';
import { View, StyleSheet,Button} from 'react-native';
import Input from "../../components/Input";

const LoginScreen = () => {
return <View style={styles.container}>
   <Input placeholder='Enter Username'/>
   <Input placeholder='Enter password'/>
   <Button title='Login'/>
</View>;
}

const styles = StyleSheet.create({
container:{display:'flex',justifyContent:'center',height:'100%'},
});

export default LoginScreen;