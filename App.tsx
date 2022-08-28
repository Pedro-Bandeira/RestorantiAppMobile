import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const clicou = () => {
    Alert.alert("Testando", "Testado")
  }


  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/icon.png')}
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

      <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => {clicou()}}
          >

        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

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
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    bottom: 150
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

  loginButton: {
    backgroundColor: '#bdccdb',
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 20,
    borderBottomEndRadius: 20,
    borderTopEndRadius: 5,
    borderBottomStartRadius: 5,
  },

  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});
