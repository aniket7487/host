import React from 'react'
import {Button, View,Text} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Login