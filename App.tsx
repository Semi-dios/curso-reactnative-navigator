import 'react-native-gesture-handler';
import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
//import { DrawerNavigation } from './src/drawer/DrawerNavigation';
import { DrawerNavigator } from './src/drawer/DrawerNavigator';

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
