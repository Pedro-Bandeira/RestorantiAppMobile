import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Alert } from "react-native";
import { propsStack } from "../../routes/Stack/Models";

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
        <View style={styles.container}>
            <Text style={styles.header}>CADASTRO</Text>

            <View style={styles.inputs}>

                <Image 
                    source={require('../../../assets/icon.png')}
                    style={styles.logo}
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

            <TouchableOpacity style={styles.actionButton} 
                onPress={registerUser}>
                <Text style={styles.actionButtonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3e50',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      paddingTop: 64
    },

    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        bottom: 50
    },

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

    actionButton: {
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

    actionButtonText: {
        fontWeight: 'bold',
        fontSize: 18,
    } ,

    header: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        justifyContent: 'flex-start'
    }
})