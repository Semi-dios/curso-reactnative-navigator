import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import React from 'react';
import { useWindowDimensions } from 'react-native';
import { DrawScreen_1 } from '../screens/DrawScreen_1';
import { DrawScreen_2 } from '../screens/DrawScreen_2';
export const DrawerNavigation = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            }}
            drawerPosition="right"
            style={{ padding: 10 }}>
            <Drawer.Screen
                name="DrawScreen_1"
                options={{ title: 'Home' }}
                component={DrawScreen_1}
            />
            <Drawer.Screen
                name="DrawScreen_2"
                options={{ title: 'Setting' }}
                component={DrawScreen_2}
            />
        </Drawer.Navigator>
    );
};
