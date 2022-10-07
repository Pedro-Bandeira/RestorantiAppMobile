import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { propsStack } from '../../routes/Stack/Models';
import { useState } from 'react';


import {Container, ActionButton, ActionButtonText, LogoGrande} from '../styles'



export default function Table() {

  const navigation = useNavigation<propsStack>()

  const [table, setTable] = useState("");


  const saveTable = () => {
    try{
        AsyncStorage.setItem("@Table", table)
        Keyboard.dismiss();
        Alert.alert("Sucesso!", "Mesa salva com sucesso!");
        navigation.navigate("Login");
    }
    catch(e) {
        alert(e)
    }
  }
  
  const getTable = async () => {
    try {
        const value = await AsyncStorage.getItem('@Table')
        if(value !== null) {
            //() => navigation.navigate("Login")
            Alert.alert("Deu bom", "BOM")
        }
        else(
            Alert.alert("Deu ruim", "RUIM")
        )
    } catch(e) {
        alert(e)
    }
  }  

  

  return (
      <Container>
          <View style={styles.inputsLogo}>
            <LogoGrande 
                source={require('../../../assets/icon.png')}
                style={styles.logo}
                renderItem={() => getTable()}
            />

            <Text style={{color: '#fff', marginBottom: 10}}>Adicione o número da mesa pertencente a este dispositivo.</Text>

            <TextInput 
                placeholder='Mesa'
                style={styles.input}
                onChangeText={(value) => {
                setTable(value)
                }}
            />
          </View>


          <View style={styles.buttons}>
            <ActionButton 
                onPress={() => saveTable()}>
              <ActionButtonText>Salvar</ActionButtonText>
            </ActionButton>
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