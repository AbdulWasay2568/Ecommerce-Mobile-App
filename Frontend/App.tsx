import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cart from './src/components/Cart';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
import OrderPlaced from './src/components/OrderPlaced';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    <Stack.Screen name="OrderPlaced" component={OrderPlaced} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Auth" component={AuthStack} options={{ title: 'Authentication' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
