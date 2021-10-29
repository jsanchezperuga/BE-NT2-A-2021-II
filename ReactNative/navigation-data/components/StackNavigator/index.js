import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';

export default function StackNavigator() {

    // const [state, setstate] = useState(initialState)
    const Stack = createStackNavigator()
  
    return (
        <Stack.Navigator initialRouteName={'Dashboard'}>
            {/* {
                (state) ?
                <Stack.Screen name={'AppPrincipal'} component={AppPrincipal}/>      
                :
                <Stack.Screen name={'StackAuth'} component={AuthenticationStack}/>      
            } */}
          <Stack.Screen name={'Dashboard'} component={Home}/>
          <Stack.Screen name={'Details'} component={Details}/>          
        </Stack.Navigator>
    );
  }