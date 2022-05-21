import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabScreen_1 } from '../screens/TabScreen_1';
import { TabScreen_2 } from '../screens/TabScreen_2';
import { TabScreen_3 } from '../screens/TabScreen_3';
import { TabScreen_4 } from '../screens/TabScreen_4';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';

export type RootStackParams = {
    TabScreen_1: undefined;
    TabScreen_2: undefined;
    TabScreen_3: undefined;
    TabScreen_4: { id: number; name: string };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                //initialRouteName="TabScreen_2"
                screenOptions={{
                    cardStyle: { backgroundColor: 'transparent' },
                    headerStyle: { height: 150, elevation: 0 },
                }}>
                <Stack.Screen
                    name="TabScreen_1"
                    options={{ title: 'Page 1' }}
                    component={TabScreen_1}
                />
                <Stack.Screen
                    name="TabScreen_2"
                    options={{ title: 'Page 2' }}
                    component={TabScreen_2}
                />
                <Stack.Screen
                    name="TabScreen_3"
                    options={{ title: 'Page 3' }}
                    component={TabScreen_3}
                />
                <Stack.Screen
                    name="TabScreen_4"
                    options={{ title: 'Page 4' }}
                    component={TabScreen_4}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
