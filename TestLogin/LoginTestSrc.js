import React from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import {View, Image, Pressable} from 'react-native';
import gosolar from '../asset/image/gosolar.png';
import LoginTestComp from './LoginTestComp';
import {Provider} from 'react-native-paper';
import CreateScreenDialog from '../src/component/CreateScreenDialog';

const LoginTestScr = () => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  console.log('Visile Pressed', visible);
  return (
    <Provider>
      <View style={{backgroundColor: '#dbdad5', flex: 1}}>
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
                fontWeight: 'bold',
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
            />

            <LoginTestComp
              placename="Your Password"
              label="Password"
              label2="Your Password"
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
              onPress={() => console.log('press')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: 16,
                }}>
                LOGIN
              </Text>
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
