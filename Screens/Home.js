import React from 'react'
import {Button, View,Text} from 'react-native';
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Import Data"
        onPress={() => navigation.navigate('ImportData')}
      />
        <Button
        title="Ticket Process"
        onPress={() => navigation.navigate('TicketProcess')}
      />
    </View>
  )
}

export default Home