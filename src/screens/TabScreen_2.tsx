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
import { useNavigation } from '@react-navigation/core';

export const TabScreen_2 = () => {
    const navigator = useNavigation();

    return (
        <View style={[styles.contentButton, styles.globalMargin]}>
            <Text style={styles.title}>Page _ 2</Text>

            <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => navigator.navigate('TabScreen_3')}>
                <Text style={styles.buttonPrimaryText}>Go to page 3</Text>
            </TouchableOpacity>
        </View>
    );
};
