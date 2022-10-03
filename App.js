import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Screens/Home';
import ImportData from './Screens/ImportData';
import Login from './Screens/Login';
import TicketProcess from './Screens/TicketProcess';

const Stack=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerStyle:{
            backgroundColor:"#0f4c75"
          },
          title:"Host App",
          headerTitleStyle:{
            textAlign:"center",
            color:"#00b7c2"
          }
        }}
        >
        </Stack.Screen>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerStyle:{
            backgroundColor:"#0f4c75"
          },
          title:"Host App",
          headerTitleStyle:{
            textAlign:"center",
            color:"#00b7c2"
          }
        }}
        >
        </Stack.Screen>
        <Stack.Screen
        name='ImportData'
        component={ImportData}
        options={{
          headerStyle:{
            backgroundColor:"#0f4c75"
          },
          title:"Host App",
          headerTitleStyle:{
            textAlign:"center",
            color:"#00b7c2"
          }
        }}
        >
        </Stack.Screen>
        <Stack.Screen
        name='TicketProcess'
        component={TicketProcess}
        options={{
          headerStyle:{
            backgroundColor:"#0f4c75"
          },
          title:"Host App",
          headerTitleStyle:{
            textAlign:"center",
            color:"#00b7c2"
          }
        }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
