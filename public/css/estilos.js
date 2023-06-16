import { StyleSheet } from "react-native";

const inicioEstilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
    },

    button: {
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '99%',
        maxHeight: '99%',
    },

    buttonImage: {
        position: 'absolute',
        left: '0%',
        top: '25%',
        backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '50%',
        transform: [{ rotate: '90deg' }],
    },
    texto: {
        position: 'absolute',
        left: '0%',
        top: '25%',
        backgroundColor: 'blue',
        fontSize: 30,
        transform: [{ rotate: '90deg' }],
    }
});

export default inicioEstilos