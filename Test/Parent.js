import {View, StatusBar, ScrollView} from 'react-native';
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
import First from '../src/HomeScreen/First';
import HomeMobileList from '../Data/HomeMobileList';
import HomeClotesList from '../Data/HomeClotesList';
import HomeMakeupList from '../Data/HomemakeupList';
import HomeWomenList from '../Data/HomeWomenList';
import HomeAppliancesList from '../Data/HomeAppliancesList';
import Appimg from '../asset/image/Gif/App.jpg';
import Boatimg from '../asset/image/Gif/Boat.gif';
import Bookimg from '../asset/image/Gif/Books.jpg';
import Fashionimg from '../asset/image/Gif/fashion.gif';
import Makeupimg from '../asset/image/Gif/Makeup.gif';
import Mobileimg from '../asset/image/Gif/Mobile.gif';
import {Image} from 'react-native-elements';
const Parent = () => {
  const [username, setUsername] = useState('');
  const insets = useSafeAreaInsets();
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#97DEFF');
    }, []),
  );

  useEffect(() => {
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
            <First
              data={HomeMobileList}
              Headline={'Buy smartphone that suits your budget'}
              Headline2={'Up to 40% off |  Up to ₹ 1,500 bank discount'}
            />
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                style={{
                  width: 350,
                  height: 200,
                  resizeMode: 'contain',
                  borderRadius: 10,
                }}
                source={Boatimg}
              />
              <Image
                style={{
                  width: 350,
                  height: 200,
                  resizeMode: 'contain',
                  borderRadius: 10,
                  marginVertical: 10,
                }}
                source={Mobileimg}
              />
            </View>

            <First
              data={HomeClotesList}
              Headline={'Minimum 60% off | Top brands for him'}
            />
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Image
                style={{
                  width: 350,
                  height: 200,
                  resizeMode: 'contain',
                  borderRadius: 10,
                }}
                source={Fashionimg}
              />
            </View>
            <First
              data={HomeMakeupList}
              Headline={'Never before deals on makeup'}
              Headline2={'Up to 70% off '}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image
                style={{
                  width: 350,
                  height: 200,
                  resizeMode: 'contain',
                  borderRadius: 10,
                }}
                source={Makeupimg}
              />
            </View>

            <First
              data={HomeWomenList}
              Headline={'Up to 60% off | Styles for women'}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image
                style={{
                  width: 350,
                  height: 200,
                  resizeMode: 'contain',
                  borderRadius: 10,
                }}
                source={Appimg}
              />
            </View>
            <First
              data={HomeAppliancesList}
              Headline={'Home appliances | 10% off on HDFC cards'}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image
                style={{
                  width: 350,
                  height: 200,
                  resizeMode: 'contain',
                  borderRadius: 10,
                }}
                source={Bookimg}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Parent;
