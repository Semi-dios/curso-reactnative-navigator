import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableOpacity,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styles from '../themes/stylesThemes';
interface Props extends StackScreenProps<any, any> { }
export const TabScreen_1 = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page _ 1</Text>

            <Text style={styles.subtitle}>Welcome to Page 1</Text>

            <View style={styles.contentButton}>
                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={() => navigation.navigate('TabScreen_2')}>
                    <Text style={styles.buttonPrimaryText}>Go to page 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={() =>
                        navigation.navigate('TabScreen_4', {
                            id: 3,
                            name: 'Sergio',
                        })
                    }>
                    <Text style={styles.buttonPrimaryText}>Go to page 4</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
