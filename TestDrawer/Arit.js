import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, View, StatusBar} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {useCallback} from 'react'

const Arit = () => {

   useFocusEffect(
      useCallback(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('#f00')
      }, [])
    );
  return (
    <SafeAreaView style={{flex: 1}}>
     

      <View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Arit;
