import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoryItems from "../../pages/CategoryItems/Index";
import Home from "../../pages/Home";

import Login from "../../pages/Login/Login";
import MenuType from "../../pages/MenuType/MenuType";
import Register from "../../pages/Register";
import Table from "../../pages/Table";
import { propsNavigationStack } from "./Models";

const { Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Table" screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login}></Screen>
            <Screen name="Menu" component={MenuType}></Screen>
            <Screen name="Home" component={Home}></Screen>
            <Screen name="Register" component={Register}></Screen>
            <Screen name="CategoryItems" component={CategoryItems}></Screen>
            <Screen name="Table" component={Table}></Screen>
        </Navigator>
    )
}