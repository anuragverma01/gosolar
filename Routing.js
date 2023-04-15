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
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./TestDrawer/CustomDrawer";
import Arit from "./TestDrawer/Arit";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerRoutes =()=>{
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} useLegacyImplementation={false}  screenOptions={{
            headerShown:false,
            drawerStyle: {
            backgroundColor: "#EFF5FC",
            drawerType : 'slide'
            },
            }}>
            <Drawer.Screen name="Home" component={Bottom} />
            <Drawer.Screen name="Profile" component={Arit} />
            <Drawer.Screen name="Favourate" component={Arit} />
            <Drawer.Screen name="Cart" component={Arit} />
            <Drawer.Screen name="About" component={Arit} />
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
            
            </Stack.Navigator> 
        </NavigationContainer>
    )
};

