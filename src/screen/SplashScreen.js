// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

// import React in our code
import React, {FC, ReactElement, useEffect, useState} from 'react';
// import all the components we are going to use
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import gosolar from '../../asset/image/gosolar.png';
const SplashScreen = () => {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  const navigation = useNavigation();
  setTimeout(() => {
    setAlign('flex-start'), setAlignsecond(true);
  }, 3000);

  const getCurrentUser = async function () {
    const currentUser = await Parse.User.currentAsync();
    // console.log('currentUser',currentUser);
    try {
      if (currentUser !== null) {
        // Alert.alert(
        //   'Success!',
        //   `${currentUser.get('username')} is the current user!`,
        // );
        navigation.replace('BottomScr');
      }
    } catch (error) {
      console.error(error);
    }
    return currentUser;
  };

  useEffect(() => {
    getCurrentUser();
  });

  return (
    <View style={[styles.container, {justifyContent: align}]}>
      <Image
        source={
          gosolar
        }
        style={{flex:1}}
      />
      {!alignsecond ? null : navigation.replace('LoginTest')}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 40,
   
  },
});
