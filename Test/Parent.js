import {StyleSheet, Text, TextInput, Touchable, View} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import Child from './Child';
import SideKey from './SideKey';
import Parse from 'parse/react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

const Parent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [username, setUsername] = useState('');

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
    <View style={{backgroundColor: '#ffff'}}>
      <ScrollView>
        <View style={{marginTop: 10}}>
          <SideKey />
        </View>

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

        <Searchbar
        placeholder='Search'
        placeholderTextColor='#96948f'
          style={{
            width: 300,
            height: 50,
            backgroundColor: 'transparent',
            marginHorizontal: 40,
            marginVertical:10,
            borderWidth:0.5,
            borderColor:'#96948f'
            
          }}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

       
        <Child />
      </ScrollView>
    </View>
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
