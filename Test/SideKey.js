import React from 'react';
import {Image, Text, Touchable, View} from 'react-native';
import { Button,Avatar   } from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Key from '../asset/image/SideKey.jpg';
import {useNavigation} from '@react-navigation/native';
import Side from '../asset/image/side.png'
import { Icon } from '@rneui/themed';
const SideKey = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView> 
      
      <View style={{flexDirection: 'row',justifyContent:'space-between',backgroundColor:'#4542f5'}}>
        
        <TouchableOpacity onPress={()=> navigation.openDrawer() } >
          <Image style={{marginVertical:10,marginHorizontal:25,width:40 ,height:20,backgroundColor:'#f00'}} source={Side} />
        </TouchableOpacity>
        
        <TouchableOpacity>
      <Icon name='shopping-cart' style={{width:40 ,height:40,top:10,right:20,backgroundColor:'#f00'}} />
        {/* <Avatar.Image size={60} style={{marginStart:220}} source={require('../asset/image/face.png')}/> */}
        </TouchableOpacity>

        </View>
    </SafeAreaView>
  );
};
export default SideKey;
