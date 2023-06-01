import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screen/LoginScreen";
import CreateAccount from "./src/screen/CreateAccount";
import Test from "./src/component/CreateScreenDialog";
import Bottom from "./src/screen/Bottom";
import Show from "./Test/Show";
import LoginTestScr from "./TestLogin/LoginTestSrc";
import CreateTestSrc from "./TestLogin/CreateTestSrc";
import { UserRegistration } from "./TestAuth/UserRegistration";
import SplashScreen from "./src/screen/SplashScreen";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./TestDrawer/CustomDrawer";
import Arit from "./TestDrawer/Arit";
import Icon from 'react-native-vector-icons/Ionicons';
import { IconComponentContext } from "@react-native-material/core";
import PaginationDotsExample from "./Test/Dot";
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { Text,StatusBar } from "react-native";
import BooksHeadermain from "./src/screen/BooksHeadermain";
import MobileHeadermain from "./src/screen/MobileHeadermain";
import Feed from "./TestDrawer/Feed";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerRoutes =()=>{


    
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} useLegacyImplementation={false}  screenOptions={{
            headerShown:false,
            // drawerActiveBackgroundColor:"#5366e0",
            drawerStyle: {
            backgroundColor: "#EFF5FC",
            drawerType : 'slide',
            },
            }}>
            <Drawer.Screen name="Home" component={Bottom} options={{drawerIcon:()=>(
                <Icon name="home-outline" size={25} color='#1449f7' />
            )}} /> 
            <Drawer.Screen name="Profile" component={Arit}options={{drawerIcon:()=>(
                <Icon name="person-outline" size={25}color='#1449f7'  />
            )}} /> 
            <Drawer.Screen name="Favourate" component={Arit}options={{drawerIcon:()=>(
                <Icon name="heart-outline" size={25}color='#f00'  />
            )}} /> 
            <Drawer.Screen name="Cart" component={Arit}options={{drawerIcon:()=>(
                <Icon name="cart-outline" size={25}color='#000000'  />
            )}} /> 
           
          </Drawer.Navigator>
    )
}

export default function Routing() {
    return (
               <NavigationContainer>
                

              

            <Stack.Navigator initialRouteName="Splash">

                {/* <Stack.Screen name='LoginScr' component={LoginScreen} options={{ headerShown: false, }} />
                <Stack.Screen name='CreateScr' component={CreateAccount} options={{ headerShown: false, }} />
                <Stack.Screen name='TestScr' component={Test} options={{ headerShown: false, }} />
                <Stack.Screen name='BottomScr' component={Bottom} options={{ headerShown: false, }} /> */}
                <Stack.Screen name='BottomScr' component={DrawerRoutes} options={{ headerShown: false, }} />
                <Stack.Screen name='Show' component={Show} options={{ headerShown: false, }} />
                <Stack.Screen name='LoginTest' component={LoginTestScr} options={{ headerShown: false, }} />
                <Stack.Screen name='CreateTest' component={CreateTestSrc} options={{ headerShown: false, }} />
                <Stack.Screen name='Userreg' component={UserRegistration} options={{ headerShown: false, }} />
                <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false, }} />
                <Stack.Screen name='Dot' component={PaginationDotsExample} options={{ headerShown: false, }} />
                <Stack.Screen name='bookheadermain' component={BooksHeadermain} options={{ headerShown: false, }} />
                <Stack.Screen name='mobileheadermain' component={MobileHeadermain} options={{ headerShown: false, }} />
                <Stack.Screen name='WishList' component={Arit} options={{ headerShown: false, }} />
                <Stack.Screen name='Addtocart' component={Feed} options={{ headerShown: false, }} />

                
            
            </Stack.Navigator> 
        </NavigationContainer>
    )
};

