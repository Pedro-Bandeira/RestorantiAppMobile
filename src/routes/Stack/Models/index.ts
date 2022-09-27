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
    CategoryItems: {
        type: string,
        category: number
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>