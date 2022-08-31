import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { propsStack } from '../../routes/Stack/Models';

export default function Login() {

  const navigation = useNavigation<propsStack>()

  const loginTeste = () => {
      Alert.alert("Testando", "ainda em construção")
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
            <TouchableOpacity 
              onPress={() => navigation.navigate("Menu", {user: "pedro"})}
              style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Continuar sem login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => navigation.navigate("Menu", {user: "pedro"})}
              style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => navigation.navigate("Register")}
              style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Cadastro</Text>
            </TouchableOpacity>

            <Text style={styles.forgotPassword} onPress={loginTeste}>Esqueceu a senha?</Text>
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
  }
});
