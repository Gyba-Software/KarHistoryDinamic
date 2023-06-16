import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
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

    buttonScenes1: {
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '99%',
        maxHeight: '49%',
        position: 'absolute',
        top: '0.5%'
    },

    buttonScenes2: {
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '99%',
        maxHeight: '49%',
        position: 'absolute',
        top: '50.5%'
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

    texts: {
        position: 'absolute',
        right: '44%',
        top: '48%',
        width: '100%',
        height: '7%',
        backgroundColor: 'white',
        borderWidth: 1, 
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'italic',
        transform: [{ rotate: '90deg' }],
    }
});

export default homeStyles