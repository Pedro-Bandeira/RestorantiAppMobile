import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


export const ActionButton = styled.TouchableOpacity` 
    background-color: ${props => props.theme.colors.actionButtonBG};
    height: 50px;
    width: 250px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-top: 20px;
`;



export const ActionButtonText = styled.Text` 
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.theme.colors.actionButtonText};
`;


export const LogoGrande = styled.Image` 
    width: 150px;
    height: 150px;
    border-radius: 100px;
    bottom: 50px;
`;


export const TituloPaginas = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    top: 10px;
`