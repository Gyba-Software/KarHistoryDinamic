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
        maxWidth: '100%',
        maxHeight: '100%',
    },

    buttonScenes1: {
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '49%',
        maxHeight: '99%',
        position: 'absolute',
        left: '1%',
    },

    buttonScenes2: {
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '49%',
        maxHeight: '99%',
        position: 'absolute',
        left: '50.5%'
    },

    buttonImage: {
        position: 'absolute',
        left: '25%',
        top: '0%',
        width: '100%',
        height: '100%',
        maxWidth: '50%',
        maxHeight: '100%',
    },

    imageButton: {
        position: 'absolute',
        left: '2.5%',
        top: '2.5%',
        width: '100%',
        height: '100%',
        maxWidth: '95%',
        maxHeight: '95%',
    },

    imageIntro: {
        position: 'absolute',
        left: '25%',
        top: '0%',
        width: '100%',
        height: '100%',
        maxWidth: '50%',
        maxHeight: '100%',
    },

    texts: {
        position: 'absolute',
        right: '0%',
        top: '92%',
        width: '100%',
        height: '7%',
        backgroundColor: '#3F8089',
        color:'white',
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'italic',
    },

    imagenFondo: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        left: '0%',
    }
});

export default homeStyles