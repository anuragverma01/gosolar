import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Applicance from '../../asset/image/Appliances.png';
import Fashion from '../../asset/image/Fashion.png';
import Fruniture from '../../asset/image/Fruniture.png';
import Grocery from '../../asset/image/Grocery.png';
import Books from '../../asset/image/Books.jpg';
import Electronic from '../../asset/image/Electroic.png';
import {ScrollView} from 'react-native-gesture-handler';
import Phone from '../../asset/image/phone.png';
import {useNavigation} from '@react-navigation/native';
import BooksHeadermain from './BooksHeadermain';
import BookHeader from '../../Data/HeaderData/BookHeader';
import MobileHeader from '../../Data/HeaderData/MobileHeaderimg';
const Topbar = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-around',
            paddingTop: 20,
            marginHorizontal: 20,
          }}>
          <View style={{flexDirection: 'column'}}>
            <TouchableHighlight
              activeOpacity={0}
              underlayColor="transparent"
              onPress={() => navigation.navigate('bookheadermain',{data:BookHeader})}>
              <Image
                style={{width: 50, height: 60, borderRadius: 100}}
                source={Books}
              />
            </TouchableHighlight>
            <Text style={{marginStart: 5, fontWeight: '500', color: '#000000'}}>
              Books
            </Text>
          </View>

          <View>
          <TouchableHighlight
              activeOpacity={0}
              underlayColor="transparent"
              onPress={() => navigation.navigate('mobileheadermain')}>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginStart: 10,
              }}
              source={Phone}
            />
             </TouchableHighlight>
            <Text
              style={{marginStart: 15, fontWeight: '500', color: '#000000'}}>
              Mobile
            </Text>
          </View>

          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginStart: 10,
              }}
              source={Electronic}
            />
            <Text
              style={{marginStart: 10, fontWeight: '500', color: '#000000'}}>
              Electronic
            </Text>
          </View>

          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginStart: 10,
              }}
              source={Fashion}
            />
            <Text
              style={{marginStart: 10, fontWeight: '500', color: '#000000'}}>
              Fashion
            </Text>
          </View>

          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginStart: 10,
              }}
              source={Fruniture}
            />
            <Text
              style={{marginStart: 10, fontWeight: '500', color: '#000000'}}>
              Furniture
            </Text>
          </View>
          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginStart: 10,
              }}
              source={Applicance}
            />
            <Text
              style={{marginStart: 10, fontWeight: '500', color: '#000000'}}>
              Appliances
            </Text>
          </View>

          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginStart: 10,
              }}
              source={Grocery}
            />
            <Text
              style={{marginStart: 10, fontWeight: '500', color: '#000000'}}>
              Grocery
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Topbar;
