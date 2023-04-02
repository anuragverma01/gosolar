import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screen/LoginScreen";
import CreateAccount from "./src/screen/CreateAccount";
import Test from "./src/component/CreateScreenDialog";
import Bottom from "./src/screen/Bottom";
import Show from "./Test/Show";
 


const Stack = createNativeStackNavigator();

export default function Routing() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginTest">

                <Stack.Screen name='LoginScr' component={LoginScreen} options={{ headerShown: false, }} />
                <Stack.Screen name='CreateScr' component={CreateAccount} options={{ headerShown: false, }} />
                <Stack.Screen name='TestScr' component={Test} options={{ headerShown: false, }} />
                <Stack.Screen name='BottomScr' component={Bottom} options={{ headerShown: false, }} />
                <Stack.Screen name='Show' component={Show} options={{ headerShown: false, }} />
                <Stack.Screen name='LoginTest' component={LoginTestScr} options={{ headerShown: false, }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
