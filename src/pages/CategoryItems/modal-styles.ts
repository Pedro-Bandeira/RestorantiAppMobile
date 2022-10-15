import styled from "styled-components/native";

export const ContainerModal = styled.View`
    background-color: ${props => props.theme.colors.backgroundLight};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 400px;
    align-self: center;
    margin-top: 70%;
    border-radius: 20px;
    justify-content: center;
    padding: 20px;
`

export const ItemsModal = styled.View`
    flex: 1; 
    align-items: center;
    justify-content: space-evenly;
`

export const ItemProperties = styled.View`
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    height: 120px;
`

export const ItemImage = styled.View`
    height: 120px;
    background-color: red;
    flex: 1;
    margin-right: 20px;
`

export const ItemName = styled.View`
    align-items: flex-start;
    justify-content: space-between;
    height: 120px;
    flex: 1;
`

export const Buttons = styled.View`
    flex-direction: row;
    min-width: 90%;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    padding-left: 30px;
`

export const ActionButtonModal = styled.Pressable`
    elevation: 2px;
    background-color: ${props => props.theme.colors.actionButtonBG};
    height: 50px;
    width: 100px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const Observacao = styled.View`
    min-width: 90%;
    align-items: flex-start;
    padding: 5px;
    border-radius: 10px;
    border: 1px;
    border-color: rgba(0,0,0,0.1);
`