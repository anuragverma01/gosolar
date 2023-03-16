import React from 'react-native';
import { Text, StyleSheet, View } from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
import { Icon } from '@rneui/base';

import { Button } from '@rneui/base';

const Loginbottom = ({ iconname, bottomcl }) => {

    return (
        <View style={{ flexDirection: 'row' }}>

            <Button buttonStyle={style.bottom} >
                <Icon name={iconname}
                    type='ionicon'
                    style={{ alignSelf: 'center', fontSize: 25 }}
                    color={bottomcl}
                />
            </Button>

        </View>
    );
}

const style = StyleSheet.create({
    bottom: {
        width: 80,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        borderColor: '#D8DADC',
        borderRadius: 10,
        marginStart: 10,
        backgroundColor: 'null'




    },

})

export default Loginbottom;