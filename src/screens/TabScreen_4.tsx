import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import styles from '../themes/stylesThemes';
/* interface routeNumberTab {
    id: number;
    name: string;
} */

interface Props extends StackScreenProps<RootStackParams, 'TabScreen_4'> { }

export const TabScreen_4 = ({ route, navigation }: Props) => {
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params?.name,
        });
    }, []);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
        </View>
    );
};
