import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import {  } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {Icon} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons'
// import {Icon } from '@rneui/themed'



const Create = ({
    placeholdercolor,
    placename,
    label,
    iconname,
    password,
    

}) => {

    const [hidepassword, setHidePassword] = useState(password);
    return (

        <SafeAreaView >

            <Text
                style={{ top: 120, left: 20, fontSize: 15, color: '#000000' }}>{label}
            </Text>

            <View style={[style.box]}>

                
                <TextInput
                    style={{ fontSize: 15, flex: 0.75, left: 20}}
                    placeholder={placename}
                    placeholderTextColor={placeholdercolor}
                   secureTextEntry={hidepassword}
                    
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


const style = StyleSheet.create({
    box: {
        top: 100,
        marginTop: 20,
        height: 55,
        width: 300,
        borderRadius: 10,
        borderColor: '#D8DADC',
        borderWidth: 2,
        alignSelf: 'center',
        flexDirection: 'row'
    },

})
export default Create;