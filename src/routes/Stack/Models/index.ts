import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Login: undefined
    Menu?: {
        user: string
    }
    Home: {
        menuType: string
    } 
    Register: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>