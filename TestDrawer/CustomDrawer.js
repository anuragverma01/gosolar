import React from "react";
import { Text } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
const CustomDrawer= (props)=>{
    return(
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#ffff'}} >
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        )
}
export default CustomDrawer;