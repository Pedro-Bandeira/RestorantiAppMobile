import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { propsStack } from '../../routes/Stack/Models';


export default function MenuType() {
    const params = useRoute()
    const navigation = useNavigation<propsStack>()
    
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Usuario: {params?.params?.user}</Text>

            <View style={styles.choices}>
                <Text style={{color: '#fff'}}>Escolha seu tipo de cardápio:</Text>
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => navigation.navigate("Home", {menuType: "rodizio"})}
                >
                    <Text>Rodizio</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => navigation.navigate("Home", {menuType: "aLaCarte"})}
                >
                    <Text>À la carte</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#2c3e50"
    },

    choices: {
        alignItems: "center",
        justifyContent: "center",
    },

    buttons: {
        backgroundColor: "#fff",
        marginTop: 10,
        width: 200,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }
})