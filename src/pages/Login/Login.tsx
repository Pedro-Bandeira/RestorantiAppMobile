import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { propsStack } from '../../routes/Stack/Models';
import { useState } from 'react';


import {Container, ActionButton, ActionButtonText, LogoGrande} from '../styles'



export default function Login() {

  const navigation = useNavigation<propsStack>()


  const loginTeste = () => {
    Alert.alert("Testando", "ainda em construção")
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validaLogin = () => {
    if(email.length < 6 || password.length < 6){
      Alert.alert("Login inválido!", "Login ou senha inválido, tente novamente!")
    }
    else
    {
      navigation.navigate("Menu", {user: "user"})
    }
  }



  return (
      <Container>
          <View style={styles.inputsLogo}>
              <LogoGrande 
                  source={require('../../../assets/icon.png')}
                  style={styles.logo}
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
                  secureTextEntry={true}
                  style={styles.input}
                  onChangeText={(value) => {
                    setPassword(value)
                  }}
              />
          </View>


          <View style={styles.buttons}>
            <ActionButton 
              onPress={() => navigation.navigate("Menu", {user: "Mesa"})}>
              <ActionButtonText>Continuar sem login</ActionButtonText>
            </ActionButton>

            <ActionButton 
              onPress={validaLogin}>
              <ActionButtonText>Login</ActionButtonText>
            </ActionButton>

            <ActionButton 
              onPress={() => navigation.navigate("Register")}>
              <ActionButtonText>Cadastro</ActionButtonText>
            </ActionButton>

            <Text style={styles.forgotPassword} onPress={loginTeste}>Esqueceu a senha?</Text>
          </View>

        <StatusBar style="auto" />
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
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

  inputsLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 60
  },

  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 50
  },

  forgotPassword: {
    fontSize: 18,
    color: '#FFF',
    top: 20
  },

});
