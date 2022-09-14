import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Header from "../../components/Header/Index";
import React, {useState} from "react"

import { propsStack } from "../../routes/Stack/Models";

const DATA = [
    {
        id: '1',
        title: 'Categoria 1',
    },
    {
        id: '2',
        title: 'Categoria 2',
    },
    {
        id: '3',
        title: 'Categoria 3',
    },
    {
        id: '4',
        title: 'Categoria 4',
    },
    {
        id: '5',
        title: 'Categoria 5',
    },
    {
        id: '6',
        title: 'Categoria 6',
    },
    {
        id: '7',
        title: 'Categoria 7',
    },
    {
        id: '8',
        title: 'Categoria 8',
    },
    {
        id: '9',
        title: 'Categoria 9',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

export default function Home () {
    
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#d9d9d9";
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        )
    }
    

    const params = useRoute()
    const navigation = useNavigation()
    const menuType = params?.params?.menuType

    return (
        <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
            <Header user="Pedro" />

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <FlatList
                    data={DATA}
                    numColumns={2} // Número de colunas
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    item: {
        backgroundColor: '#d9d9d9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        height: 150,
        width: 150,
        alignItems: "flex-end",
        marginTop: 30
    },
    title: {
        fontSize: 22,
    },
});