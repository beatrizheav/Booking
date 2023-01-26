import React from 'react';
import SignUp from '../screens/Signup';
import Login from '../screens/Login';
import Booking from '../screens/Booking';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from '../redux/store';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MainStack;
