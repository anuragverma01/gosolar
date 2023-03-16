import React from "react";
import { Text, Button, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Create from "../component/Create";
import gosolar from '../../asset/image/gosolar.png'
import { useNavigation } from '@react-navigation/native';



const CreateAccount = (props) => {


    

    const navigation = useNavigation();
    const { route } = props;
    console.log(route.params)
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#dbdad5' }}>

            <View style={{ backgroundColor: '#F0F3FB', height: 490, margin: 30, borderRadius: 32 }}>
                <Image source={(gosolar)} style={{ top: 50, alignSelf: 'center', width: 300 }} />
                <Text style={{ alignSelf: 'center', fontSize: 30, fontFamily: 'Laila-Bold', top: 90, color: '#000000' }}>Create Account</Text>

                <Create
                    iconname='person-circle-outline'
                    label='Username'
                    placename='Your Username'
                    placeholdercolor='#A1A1A1' />



                <Create
                    label='Password'
                    placename='Your Password'
                    placeholdercolor='#A1A1A1'
                    password />



                <TouchableOpacity onPress={() => navigation.navigate("BottomScr")} style={[styles.button]}>
                    <Text style={[styles.text]}>
                        Create account
                    </Text>
                </TouchableOpacity>

                <View style={{ alignSelf: 'center', top: 150, paddingStart: 40, paddingEnd: 40 }}>

                    <Text style={{ fontSize: 14 }} >
                        By creating an account or signing you agree to our
                    </Text>
                    <Text style={{ bottom: 20, left: 80, color: '#000000', fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        Terms and Conditions
                    </Text>
                </View>


                <View style={{ flexDirection: 'row', alignSelf: 'center', top: 200 }}>

                    <Text style={{ fontSize: 14 }} >
                        Already have an account?
                    </Text>
                    <Text
                        onPress={() => navigation.navigate("LoginScr")}
                        style={{ color: '#000000', fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        Log in
                    </Text>

                </View>

            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    button: {

        backgroundColor: '#000000',
        height: 55,
        width: 250,
        alignSelf: 'center',
        borderRadius: 10,
        top: 140
    },

    text: {
        color: '#ffffff',
        textAlign: 'center',
        padding: 15,
        fontSize: 16
    }

});


export default CreateAccount;