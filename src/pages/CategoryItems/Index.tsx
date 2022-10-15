import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Modal, Pressable, Image, TextInput } from "react-native";
import Header from "../../components/Header/Index";
import React, {useState} from "react"

import { propsStack } from "../../routes/Stack/Models";

import {Container, TituloPaginas, ActionButtonText} from '../styles'
import {ItemImage, ItemName, ItemProperties, ItemsModal, ContainerModal, Buttons, ActionButtonModal, Observacao} from './modal-styles'


const DATA = [
    {
        id: '1',
        title: 'Item 1',
        type: 'aLaCarte',
        description: 'apenas descrição',
        category: '6',
    },
    {
        id: '2',
        title: 'Item 2',
        type: 'aLaCarte',
        description: 'apenas descrição',
        category: '6',
    },
    {
        id: '3',
        title: 'Item 3',
        type: 'aLaCarte',
        description: 'apenas descrição',
        category: '6',
    },
    {
        id: '4',
        title: 'Item 4',
        type: 'rodizio',
        description: 'apenas descrição',
        category: '6',
    },
    {
        id: '5',
        title: 'Item 5',
        type: 'aLaCarte',
        description: 'apenas descrição',
        category: '9',
    },
    {
        id: '6',
        title: 'Item 6',
        type: 'rodizio',
        description: 'apenas descrição',
        category: '9',
    },
    {
        id: '7',
        title: 'Item 7',
        type: 'rodizio',
        description: 'apenas descrição',
        category: '9',
    },
    {
        id: '8',
        title: 'Item 8',
        type: 'rodizio',
        description: 'apenas descrição',
        category: '9',
    },
    {
        id: '9',
        title: 'Item 9',
        type: 'aLaCarte',
        description: 'apenas descrição',
        category: '9',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);


const selectItem = (id) =>{
    Alert.alert("Item selecionada:",id)
}


export default function CategoryItems () {

    const [selectedId, setSelectedId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [value, onChangeText] = React.useState('Observação:');

    const params = useRoute()
    //recupera a categoria selecionada
    const categoryId = params.params?.category
    const menuType = params.params?.type
    const navigation = useNavigation()

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#d9d9d9";
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => setModalVisible(true)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        )
    }
    
    const UselessTextInput = (props) => {
        return (
          <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
          />
        );
      }
    


    let filteredDATA = DATA.filter((item) => {
        return item.category.match(categoryId) && item.type.match(menuType); 
    });

    return (
        <Container>
            <Header user="Pedro" />

            <TituloPaginas>Categoria: {categoryId}</TituloPaginas>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <ContainerModal>
                    <ItemsModal>
                        <ItemProperties>
                            <ItemImage>
                                <Image source={require('../../../assets/icon.png')} style={{width: 20, height: 20, backgroundColor: "#000"}}></Image>
                            </ItemImage>
                            <ItemName>
                                <Text>Item: </Text>
                                <Text>Preço: </Text>
                                <Text>Quantidade: </Text>
                            </ItemName>
                        </ItemProperties>


                        <Observacao>
                            <UselessTextInput
                                multiline
                                numberOfLines={4}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </Observacao>

                        <Buttons>
                            <ActionButtonModal
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <ActionButtonText>Voltar</ActionButtonText>
                            </ActionButtonModal>

                            <ActionButtonModal
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <ActionButtonText>Adicionar</ActionButtonText>
                            </ActionButtonModal>
                        </Buttons>
                    </ItemsModal>
                </ContainerModal>
            </Modal>

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <FlatList
                    data={filteredDATA}
                    numColumns={2} // Número de colunas
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </View>
        </Container>
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
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
});