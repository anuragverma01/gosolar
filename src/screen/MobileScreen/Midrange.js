import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import midrange from '../../../asset/image/HeaderMobileimg/Midrange/midrange.jpg';
import {midmob} from '../../../Data/HeaderData/MobileHeaderimg';
export default function Midrange() {
  return (
    <View style={{marginVertical:20}} >
      <View style={{alignSelf: 'center'}}>
        <Image
          resizeMode="stretch"
          source={midrange}
          style={{width: 350, height: 50}}
        />
      </View>
      <FlatList
        numColumns={2}
        data={midmob}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
            }}>
            <Image
              resizeMode="stretch"
              style={{height: 250, width: 180}}
              source={item.image}
            />
          </View>
        )}
      />
    </View>
  );
}
