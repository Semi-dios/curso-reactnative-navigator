import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 16,
    },
    contentButton: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonPrimary: {
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#ccc',
        padding: 10,
    },
    buttonPrimaryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    avatarImg: {
        width: 120,
        height: 120,
        borderRadius: 120,
    },
    contentMenuOptions: {
        marginVertical: 20,
        marginHorizontal: 40,
    },
    buttonMenuOptions: {
        margin: 10,
    },
    textMenuOptions: {
        fontSize: 25,
        fontWeight: '500',
    },
});
export default styles;
