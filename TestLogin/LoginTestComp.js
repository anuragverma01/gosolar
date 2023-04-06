import React from 'react';
import {View} from 'react-native';
import {useState} from 'react';
import {Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
const LoginTestComp = ({
  // placeholdercolor,
  placename,
  label,
  iconname,
  password,
  label2,
}) => {
  const [hidepassword, setHidePassword] = useState(password);
  return (
    <View style={{marginHorizontal: 20, marginTop: 15}}>
      {/* <Text style={{fontSize: 15, color: '#000000'}}>{label}</Text> */}
      <TextInput
        mode="outlined"
        placeholder={placename}
        label={label2}
        secureTextEntry={hidepassword}
        autoCorrect={false}
        activeOutlineColor='#179aff'
        style={{
          backgroundColor: '#F0F3FB',
          marginHorizontal: 10,
          paddingRight: 50,
          // borderWidth:1,
          // borderRadius:50
          
         
        }}
      />

      <Icon
        name={iconname}
        style={{
          fontSize: 28,
          color: '#4f4e4b',
          position: 'absolute',
          right: 18,
          top: 15,
        }}
      />
      {password && (
        <Icon
          style={{
            fontSize: 28,
            position: 'absolute',
            right: 18,
            top: 15,
            color: '#4f4e4b',
          }}
          onPress={() => setHidePassword(!hidepassword)}
          name={hidepassword ? 'eye' : 'eye-off'}
        />
      )}
    </View>
  );
};

export default LoginTestComp;
