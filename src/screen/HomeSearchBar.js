import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

export default function HomeSearchBar() {
  return (
      <View style={{}}>
        <TextInput placeholder="Search" style={style.bar}></TextInput>
        <Icon style={style.icon} name="search" />
      </View>
  );
}

const style = StyleSheet.create({
  bar: {
    borderRadius: 10,
    width: 300,
    height: 45,
    borderWidth: 0.5,
    backgroundColor: '#ffff',
    paddingStart: 20,
    paddingEnd: 20,
  },

  icon: {
    // position:'absolute',
    // top:10,
    // left: 20,
    // color:'#f00',
    // zIndex:999999999,
    // fontSize:100
  },
});
