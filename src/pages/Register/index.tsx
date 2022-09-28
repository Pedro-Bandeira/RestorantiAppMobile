import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Alert } from "react-native";
import { propsStack } from "../../routes/Stack/Models";


import {Container, ActionButton, ActionButtonText, LogoGrande} from '../styles'

export default function Register() {

    const navigation = useNavigation<propsStack>()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const registerUser = () => {
        if(name.length > 3 && email.length > 5 && email.includes("@") && password.length > 5){
            Alert.alert("Cadastrado com sucesso!", `Nome: ${name}\nEmail: ${email.toLowerCase()}\nSenha: ${password}`)
        }
        else{
            Alert.alert("Dados inválidos", "Favor, verificar os dados de cadastro e tentar novamente!")
        }
    }

    return(
        <Container>
            <Text style={styles.header}>CADASTRO</Text>

            <View style={styles.inputs}>

                <LogoGrande 
                    source={require('../../../assets/icon.png')}
                />

                <TextInput 
                    placeholder='nome'
                    style={styles.input}
                    onChangeText={(value) => {
                        setName(value)
                    }}
                />
                <TextInput 
                    placeholder='email'
                    style={styles.input}
                    onChangeText={(value) => {
                        setEmail(value)
                    }}
                />
                <TextInput 
                    placeholder='senha'
                    style={styles.input}
                    onChangeText={(value) => {
                        setPassword(value)
                    }}
                />
            </View>

            <ActionButton onPress={registerUser}>
                <ActionButtonText>Cadastrar</ActionButtonText>
            </ActionButton>

            <ActionButton onPress={() => navigation.goBack()}>
                <ActionButtonText>Voltar</ActionButtonText>
            </ActionButton>
        </Container>
    )
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#eff2f6',
        marginBottom: 15,
        width: 300,
        height: 45,
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10,
        paddingLeft: 10
    },

    inputs: {
        marginTop: 150,
        justifyContent: "center",
        alignItems: "center"
    },


    header: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        justifyContent: 'flex-start',
        top: -20
    }
})