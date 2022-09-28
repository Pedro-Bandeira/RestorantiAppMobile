import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "../../components/Header/Index";

import { propsStack } from '../../routes/Stack/Models';

import {Container, ActionButtonText} from '../styles'
import {Cards} from './menu-styles'


export default function MenuType() {
    const params = useRoute()
    const navigation = useNavigation<propsStack>()
    
    return (
        <Container >
            <StatusBar hidden={true} />
            <Header user={params?.params?.user}/>

            <View style={styles.choices}>
                <Text style={{color: '#fff'}}>Escolha seu tipo de cardápio:</Text>
                <Cards 
                    onPress={() => navigation.navigate("Home", {menuType: "rodizio"})}
                >
                    <ActionButtonText>Rodízio</ActionButtonText>
                </Cards>

                <Cards 
                    onPress={() => navigation.navigate("Home", {menuType: "aLaCarte"})}
                >
                    <ActionButtonText>À la carte</ActionButtonText>
                </Cards>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "flex-start", 
        alignItems: "center",
        backgroundColor: "#2c3e50"
    },

    choices: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    buttons: {
        backgroundColor: "#fff",
        marginTop: 10,
        width: 200,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
})