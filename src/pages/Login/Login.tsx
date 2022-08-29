import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button/Button';

export default function Login() {

    const loginTeste = () => {
        Alert.alert("Testando", "Testado")
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputsLogo}>
                <Image 
                    source={require('../../../assets/icon.png')}
                    style={styles.logo}
                />

                <TextInput 
                    placeholder='email'
                    style={styles.input}
                />
                <TextInput 
                    placeholder='senha'
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>


            <View style={styles.buttons}>
                <Button texto="OK" onPress={loginTeste}/>
                <Button texto="Login"/>
                <Button texto="Fazer Cadastro"/>

                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </View>

        <StatusBar style="auto" />
        </View>
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
    top: 10
  }
});
