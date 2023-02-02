import React from 'react'
import SignUp from '../screens/Signup'
import Login from '../screens/Login'
import Booking from '../screens/Booking'
import Flights from '../screens/Flights'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './navigationRef'
import store from '../redux/store';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Flights" component={Flights} />
          <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MainStack;
