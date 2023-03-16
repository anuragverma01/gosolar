import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = (
    { placeholdercolor,
        placename,
        label,
        iconname,
        password
    }) => {

    const [hidepassword, setHidePassword] = useState(password);

    return (

        <SafeAreaView >

            <Text
                style={{ top: 100, left: 20, fontSize: 15, color: '#000000' }}>{label}
            </Text>

            <View style={[Style.box]}>


                <TextInput
                    style={{ fontSize: 15, flex: 0.75, left: 20 }}
                    placeholder={placename}
                    placeholderTextColor={placeholdercolor}
                    secureTextEntry={hidepassword}
                    autoCorrect={false}

                />


                <Icon
                    name={iconname}
                    style={{ fontSize: 30, color: '#4f4e4b', top: 10, right: 10, position: 'absolute' }}>

                </Icon>

                {password && (<Icon style={{ fontSize: 30, position: 'absolute', right: 10, top: 10, color: '#4f4e4b' }}
                    onPress={() => setHidePassword(!hidepassword)}
                    name={hidepassword ? 'eye' : 'eye-off'} />
                )}

            </View>

        </SafeAreaView>


    );
}

const Style = StyleSheet.create({
    box: {
        top: 80,
        marginTop: 20,
        height: 55,
        width: 300,
        borderRadius: 10,
        borderColor: '#D8DADC',
        borderWidth: 2,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    bottom: {
        backgroundColor: '#000000',
        height: 55,
        width: 250,
        alignSelf: 'center',
        borderRadius: 10,
        top: 110
    }
})

export default Login;