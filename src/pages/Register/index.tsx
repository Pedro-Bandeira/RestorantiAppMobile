import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { propsStack } from "../../routes/Stack/Models";

export default function Register() {

    const navigation = useNavigation<propsStack>()

    return(
        <View style={styles.container}>
            <Text>Register</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>VOLTAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3e50',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
})