import {Text, Touchable, View} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import Child from './Child';
import SideKey from './SideKey';
import Parse from 'parse/react-native';
import {ScrollView} from 'react-native-gesture-handler';

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
        <View style={{marginTop: 30}}>
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

        {/* <Searchbar
          style={{
            width: 300,
            height: 50,
            backgroundColor: '#f0f1f2',
            marginHorizontal: 30,
          }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        /> */}

        <Child />
      </ScrollView>
    </View>
  );
};

export default Parent;
