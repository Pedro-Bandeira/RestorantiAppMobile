import styled from "styled-components/native";

export const Cards = styled.TouchableOpacity` 
    background-color: ${props => props.theme.colors.actionButtonBG};
    height: 150px;
    width: 200px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-top: 20px;
`;