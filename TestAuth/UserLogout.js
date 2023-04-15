import React, {FC, ReactElement} from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  useEffect,
  useState,
} from 'react-native';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import LoginTestScr from '../TestLogin/LoginTestSrc';
import {Button} from 'react-native-paper';

export const UserLogOut = () => {
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


  return (
    <View>
      <Button icon="refresh" mode="contained" onPress={() =>doUserLogOut()}>
        Logout
      </Button>
     
    </View>
  );
};
