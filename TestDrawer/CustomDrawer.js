import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Image, Text, View, StatusBar, SafeAreaView} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import face from '../asset/image/face.png';
import Parse from 'parse/react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation();

  const doUserLogOut = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          // Alert.alert('Success!', 'No user is logged in anymore!');
        }
        console.log('current', currentUser);
        // Navigation dispatch calls a navigation action, and popToTop will take
        // the user back to the very first screen of the stack
        navigation.replace('Splash');
        return true;
      })
      .catch(error => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  const [username, setUsername] = useState('');

  useEffect(() => {
    async function getCurrentUser() {
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
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor: '#ffff', flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={face}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                marginVertical: 30,
                marginHorizontal: 20,
              }}
            />

            <Text style={{marginVertical: 50, fontSize: 30}}>
              {' '}
              Hi {username}
            </Text>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <View style={{backgroundColor: '#ffff'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', margin: 30}}
            onPress={() => doUserLogOut()}>
            <Icon name="logout" />
            <Text style={{marginHorizontal: 10, fontSize: 18}}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CustomDrawer;
