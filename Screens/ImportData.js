import React from 'react'
import {Button, View,Text} from 'react-native';

const ImportData = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Import Data Screen</Text>
        <Button
        title="Upload"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default ImportData