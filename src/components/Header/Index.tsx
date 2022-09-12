import React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Alert, Image, Dimensions } from "react-native";
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from "react-native-safe-area-context";

var width = Dimensions.get('window').width; //full width

export default function Header(props: { user: string}) {
    const navigation = useNavigation<propsStack>()

    const logOff = () => {
        
        Alert.alert(
            "Saindo...",
            "Deseja realmente sair do aplicativo?\n" +
            "Caso possua alguma conta em aberto não será possível sair...",
            [
                { text: "Cancelar" },
                { text: "Sim", onPress: () => navigation.navigate("Login")}
            ]
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../../../assets/icon.png')}
                style={styles.logo}
            />

            <View style={styles.rightContent}>
                <View style={styles.userInfo}>
                    <Text style={{fontSize: 16}}>Olá, {props.user.toUpperCase()}</Text>

                    <TouchableOpacity>
                        <AntDesign name="user" size={24} color="black" style={{left: 5}}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={logOff}>
                    <Text style={styles.logoutButton}>SAIR</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        width: width,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: "#D9D9D9",
    },

    logo: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },

    rightContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.4,
        alignItems: "center"
    },

    logoutButton: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 16
    },

    userInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});