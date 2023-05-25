import {View, Pressable, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Dot from '../../Test/Dot';
import Budget from './MobileScreen/Budget';
import Midrange from './MobileScreen/Midrange';
import Premium from './MobileScreen/Premium';

export default function MobileHeadermain() {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Pressable
          onPress={() => navigation.navigate('BottomScr')}
          style={{left: 10}}>
          <Icon name="arrow-back" color="#000000" size={32} />
        </Pressable>
        <ScrollView>
          <Dot />
          <Budget />
          <Midrange />
          <Premium />
        </ScrollView>
      </View>
    </View>
  );
}
