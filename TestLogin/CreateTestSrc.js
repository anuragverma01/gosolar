import React, {useState} from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import gosolar from '../asset/image/gosolar.png';
import CreateTestComp from './CreateTestComp';
import {useNavigation} from '@react-navigation/native';
import Parse from 'parse/react-native';
const CreateTestSrc = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doUserRegistration = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    // Since the signUp method returns a Promise, we need to call it using await
    return await Parse.User.signUp(usernameValue, passwordValue)
      .then(createdUser => {
        // Parse.User.signUp returns the already created ParseUser object if successful
        console.log('user', createdUser);
        navigation.replace('BottomScr');
        return true;
      })
      .catch(error => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={{backgroundColor: '#dbdad5', flex: 1}}>
      <View style={{backgroundColor: '#F0F3FB', borderRadius: 32, margin: 25}}>
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
            }}>
            Create Account
          </Text>
        </View>

        <View>
          <CreateTestComp
            placename="You Email"
            label="Email Address"
            label2="Email Address"
            iconname="person-circle-outline"
            value={username}
            onChangeText={text => setUsername(text)}
            autoCapitalize={'none'}
          />

          <CreateTestComp
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
            onPress={() => doUserRegistration()}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 16,
              }}>
              Create account
            </Text>
          </Pressable>
        </View>
      </View>

      {/* <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F00',
          width:'100%'
        }}>
        <View style={{flexDirection:'row', flex:1}}>
          <Text> By creating an account or signing you agree to our</Text>
          <Text> Terms and Conditions</Text>
        </View>
      </View> */}

      <View
        style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 40}}>
        <Text style={{fontSize: 14}}> Already have an account?</Text>

        <Text
          onPress={() => navigation.navigate('LoginTest')}
          style={{
            color: '#000000',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          Login
        </Text>
      </View>
    </View>
  );
};

export default CreateTestSrc;
