import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import React from 'react';
import {
    useWindowDimensions,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import { DrawScreen_1 } from '../screens/DrawScreen_1';
import { DrawScreen_2 } from '../screens/DrawScreen_2';
import styles from '../themes/stylesThemes';

export const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();
    const ContentMenu = (navigation: DrawerContentComponentProps) => {
        return (
            <DrawerContentScrollView>
                <View>
                    <Image
                        style={styles.avatarImg}
                        source={{
                            uri: 'https://thumbs.dreamstime.com/b/ejemplo-creativo-del-vector-placeholder-perfil-avatar-defecto-aislado-en-fondo-plantilla-gris-mes-espacio-blanco-de-la-foto-118823351.jpg',
                        }}
                    />
                </View>

                {/* Menu Options */}
                <View style={styles.contentMenuOptions}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawScreen_1')}
                        style={styles.buttonMenuOptions}>
                        <Text style={styles.textMenuOptions}>Navigation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawScreen_1')}
                        style={styles.buttonMenuOptions}>
                        <Text style={styles.textMenuOptions}>Setting</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        );
    };
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            }}
            drawerContent={props => <ContentMenu {...props} />}
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
