import React from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import gosolar from '../asset/image/gosolar.png';
const Show = () => {
  return (
    <View style={{backgroundColor: '#dbdad5', flex: 1}}>
      <View
        style={{
          backgroundColor: '#F0F3FB',
          borderRadius: 32,
          margin: 30,
          height: 470,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 30,
            fontFamily: 'Laila-Bold',
            top: 70,
            color: '#000000',
          }}>
          LOGIN
        </Text>
      </View>
    </View>
  );
};

export default Show;
