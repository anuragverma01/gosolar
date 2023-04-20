import React from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import {
  View,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {useState} from 'react';
import gosolar from '../asset/image/gosolar.png';
import LoginTestComp from './LoginTestComp';
import {Provider} from 'react-native-paper';
import CreateScreenDialog from '../src/component/CreateScreenDialog';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
const LoginTestScr = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    setIsLoading(true);
    // return 0;
    // console.log('username', username, password);

    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async loggedInUser => {
        console.log('loggedInUser', loggedInUser.get('username'));
        // logIn returns the corresponding ParseUser object

        // To verify that this is in fact the current user, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        console.log(loggedInUser === currentUser);
        console.log('users', currentUser);
        setIsLoading(false);
        navigation.replace('BottomScr');

        return true;
      })
      .catch(error => {
        // Error can be caused by wrong parameters or lack of Internet connection
        console.log('error', error);
        setIsLoading(false);
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  // console.log('Visile Pressed', visible);
  return (
    <Provider>
      <View style={{backgroundColor: '#dbdad5',flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor="#dbdad5" />
        <View
          style={{backgroundColor: '#F0F3FB', borderRadius: 32, margin: 25}}>
          <View>
            <Image
              source={gosolar}
              style={{alignSelf: 'center', width: 300, marginVertical: 70}}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 30,
                fontFamily: 'Laila-Bold',
                color: '#000000',
                bottom: 40,
                // fontWeight: 'bold',
              }}>
              LOGIN
            </Text>
          </View>

          <View>
            <LoginTestComp
              placename="You Email"
              label="Email Address"
              label2="Email Address"
              iconname="person-circle-outline"
              value={username}
              onChangeText={text => setUsername(text)}
            />

            <LoginTestComp
              placename="Your Password"
              label="Password"
              label2="Your Password"
              value={password}
              onChangeText={text => setPassword(text)}
              password
            />
          </View>

          <View>
            <Pressable
              style={{
                backgroundColor: '#000000',
                alignSelf: 'center',
                borderRadius: 10,
                paddingHorizontal: 90,
                paddingVertical: 15,
                marginTop: 40,
                marginBottom: -20,
              }}
              onPress={() => doUserLogIn()}
              // title={isLoading ? 'Loading...' : 'Press me'}
              disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: 16,
                  }}>
                  LOGIN
                </Text>
              )}
            </Pressable>
          </View>
        </View>

        <Text style={{alignSelf: 'center', marginTop: 30}}>Or Login with</Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 30,
            alignSelf: 'center',
            // justifyContent:'space-between',
            // flex:1,
            // marginHorizontal:30
          }}>
          <Button
            style={{width: 80, height: 50}}
            icon="google"
            labelStyle={{fontSize: 30, color: '#EB4335', marginStart: 10}}
            mode="elevated"
            onPress={() => showDialog()}></Button>

          <Button
            style={{width: 80, height: 50, marginStart: 10, marginEnd: 10}}
            icon="facebook"
            labelStyle={{fontSize: 30, color: '#3C5A99', marginStart: 10}}
            mode="elevated"
            onPress={() => showDialog()}></Button>

          <Button
            style={{width: 80, height: 50}}
            icon="apple"
            labelStyle={{fontSize: 30, color: '#000000', marginStart: 9}}
            mode="elevated"
            onPress={() => showDialog()}></Button>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{fontSize: 14}}>Don't have an account?</Text>
          <Text
            onPress={() => navigation.replace('CreateTest')}
            style={{
              color: '#000000',
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            Sign Up
          </Text>
        </View>
      </View>
      <CreateScreenDialog visible={visible} hideDialog={() => hideDialog()} />
    </Provider>
  );
};

export default LoginTestScr;
