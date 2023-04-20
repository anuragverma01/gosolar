import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import {useCallback} from 'react'
import {Searchbar, Button} from 'react-native-paper';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import Child from './Child';
import SideKey from './SideKey';
import Parse from 'parse/react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Topbar from '../src/screen/Topbar';
import { useFocusEffect } from '@react-navigation/native';
import Dot from './Dot';
import HomeSearchBar from '../src/screen/HomeSearchBar';
const Parent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [username, setUsername] = useState('');
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#97DEFF')
    }, [])
  );

  // useEffect is called after the component is initially rendered and
  // after every other render
  useEffect(() => {
    // Since the async method Parse.User.currentAsync is needed to
    // retrieve the current user data, you need to declare an async
    // function here and call it afterwards
    async function getCurrentUser() {
      // This condition ensures that username is updated only if needed
      if (username === '') {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setUsername(currentUser.getUsername());
        }
      }
    }
    getCurrentUser();
  }, [username]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        StatusBarStyle={'dark-content'}
        barStyle="light-content"
        backgroundColor="#97DEFF"
      />

      <View style={{backgroundColor: '#ffff'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#97DEFF',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 15,
          }}>
          {/* <View style={{marginVertical: 10}}>
          <Text
            style={{
              fontSize: 45,
              paddingStart: 30,
              color: '#000000',
              fontFamily: 'Crater',
            }}>
            Hi, {username} 👋
          </Text>
        </View> */}

<HomeSearchBar/>
          {/* <Searchbar
            placeholder="Search"
            placeholderTextColor="#96948f"
            style={{
              width: 300,
              height: 50,
              backgroundColor: '#ffff',
              // marginHorizontal: 40,
              // marginVertical:10,
            }}
            onChangeText={onChangeSearch}
            value={searchQuery}
          /> */}

          <SideKey />
        </View>
        <Topbar />
        <Dot />
        <Child />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  // Search: {
  //   maxWidth: 250,
  //   maxHeight: 45,
  //   borderRadius: 6,
  //   borderWidth: 1,
  //   marginHorizontal: 30,
  //   paddingHorizontal: 30,
  //   marginVertical: 10,
  // },
});

export default Parent;
