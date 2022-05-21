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
export const TabScreen_3 = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page _ 3</Text>

            <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => navigation.pop()}>
                <Text>Go to Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => navigation.popToTop()}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};
