import styled from "styled-components/native";

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.headerBG};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 60px;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
`;