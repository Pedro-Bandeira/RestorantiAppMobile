import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Index";

import { propsStack } from "../../routes/Stack/Models";

export default function Home () {

    const params = useRoute()
    const navigation = useNavigation()

    return (
        <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
            <Header user="Pedro" />

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize: 20}}>Escolhido: {params?.params?.menuType}</Text>
                <Text>HOME</Text>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>VOLTAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}