import React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Alert } from "react-native";

const cor: string = "";

//{text}: {text: string}
export default function Button( props) {

    const clicou = () => {
        Alert.alert("Testando", "Testado")
    }

    return (
        <View>
            <TouchableOpacity 
                style={styles.loginButton}
            >

            <Text style={styles.loginButtonText}>{props.texto}</Text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: "#bdccdb",
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopStartRadius: 20,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 5,
        borderBottomStartRadius: 5,
        marginTop: 20
    },

    loginButtonText: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});