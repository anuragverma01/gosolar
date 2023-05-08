import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useCallback} from 'react';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import Parse from 'parse/react-native';
import Topbar from '../src/screen/Topbar';
import {useFocusEffect} from '@react-navigation/native';
import HomeSearchBar from '../src/screen/HomeSearchBar';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Dot from './Dot';
import Child from './Child';
import Home from '../src/screen/Home';
import First from '../src/HomeScreen/First';
import Second from '../src/HomeScreen/Second';
import {Text} from 'react-native-paper';
import HomeMobileList from '../Data/HomeMobileList';
import HomeClotesList from '../Data/HomeClotesList';
import HomeMakeupList from '../Data/HomemakeupList';
const Parent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [username, setUsername] = useState('');
  const insets = useSafeAreaInsets();
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#97DEFF');
    }, []),
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
    <SafeAreaProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            backgroundColor: '#FFD966',
          }}>
          <HomeSearchBar />
          <View style={{marginBottom: 0}}>
            <Topbar />
          </View>
          <View>
            <Dot />
          </View>
          <View style={{backgroundColor: '#FFD966'}}>
            {/* <Text style={{marginHorizontal:30,marginBottom:10}} >Up to 40% off | Up to ₹ 1,500 bank discount</Text> */}
            <First
              data={HomeMobileList}
              Headline={'Buy smartphone that suits your budget'}
              Headline2={'Up to 40% off |  Up to ₹ 1,500 bank discount'}
            />
            {/* <Text style={{marginHorizontal:30,fontSize:18,fontWeight:'bold',marginTop:30}} >Minimum 60% off | Top brands for him</Text> */}
            <First
              data={HomeClotesList}
              Headline={'Minimum 60% off | Top brands for him'}
            />

            <First
              data={HomeMakeupList}
              Headline={'Never before deals on makeup'}
              Headline2={'Up to 70% off '}

            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Parent;
