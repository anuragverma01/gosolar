import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";
import gosolar from '../../asset/image/gosolar.png'
import Login from "../component/Login";
import CreateScreenDialog from "../component/CreateScreenDialog";
import Create from "../component/Create";
import { Button, Provider } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

function LoginScreen() {


    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    console.log('Visile Pressed', visible)

    const navigation = useNavigation();
    console.log('login',useNavigation)

    return (

        <Provider>
            <SafeAreaView style={{ backgroundColor: '#dbdad5', flex: 1 }}>


                <View style={{ backgroundColor: '#F0F3FB', borderRadius: 32, margin: 30, height: 470 }}>
                    <Image source={(gosolar)} style={{ top: 50, alignSelf: 'center', width: 300 }} />
                    <Text style={{ alignSelf: 'center', fontSize: 30, fontFamily: 'Laila-Bold', top: 70, color: '#000000' }}>LOGIN</Text>

                    <Login

                        iconname='person-circle-outline'
                        label='Email address'
                        placename='Your email'
                        placeholdercolor='#A1A1A1' />

                    <Login

                        label='Password'
                        placename='Your Passowrd'
                        placeholdercolor='#A1A1A1'
                        password />


                    <TouchableOpacity onPress={() => navigation.navigate("BottomScr", {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}

                        style={[styles.button]}>

                        <Text style={[styles.text]}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={{ alignSelf: 'center', top: 150 }}>Or Login with</Text>

                    </View>

                    <View style={{ flexDirection: 'row', position: 'absolute', alignSelf: 'center', top: '120%' }}>


                        <Button
                            style={{ width: 80, height: 50 }}
                            icon='google'
                            labelStyle={{ fontSize: 30, color: '#EB4335', marginStart: 10 }}
                            mode="elevated"
                            onPress={() => showDialog()}>
                        </Button>

                        <Button
                            style={{ width: 80, height: 50, marginStart: 10, marginEnd: 10 }}
                            icon="facebook"
                            labelStyle={{ fontSize: 30, color: '#3C5A99', marginStart: 10 }}
                            mode="elevated"
                            onPress={() => showDialog()} >
                        </Button>

                        <Button
                            style={{ width: 80, height: 50 }}
                            icon="apple"
                            labelStyle={{ fontSize: 30, color: "#000000", marginStart: 9 }}
                            mode="elevated"
                            onPress={() => showDialog()}>
                        </Button>


                        {/* <Loginbottom iconname='logo-facebook' bottomcl='#3C5A99' onPress={()=> navigation.navigate(Create)} />
                   <Loginbottom iconname='logo-google' bottomcl='#EB4335'/>
                   <Loginbottom iconname='logo-apple' bottomcl='#000000' /> */}
                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', top: 240 }}>

                        <Text style={{ fontSize: 14 }} >
                            Don’t have an account?
                        </Text>
                        <Text
                            onPress={() => navigation.navigate("CreateScr")}
                            
                            style={{ color: '#000000', fontWeight: 'bold', textDecorationLine: 'underline' }}>
                            Sign up
                        </Text>

                    </View>
                </View>


                <CreateScreenDialog visible={visible}
                    hideDialog={() => hideDialog()} />

            </SafeAreaView>
        </Provider >

    )
}

const styles = StyleSheet.create({
    button: {

        backgroundColor: '#000000',
        height: 55,
        width: 250,
        alignSelf: 'center',
        borderRadius: 10,
        top: 120
    },

    text: {
        color: '#ffffff',
        textAlign: 'center',
        padding: 15,
        fontSize: 16
    },

});

export default LoginScreen;