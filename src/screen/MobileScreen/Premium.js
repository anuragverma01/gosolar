import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import img from '../../../asset/image/HeaderMobileimg/Premium/premium.jpg';
import {premob} from '../../../Data/HeaderData/MobileHeaderimg';
export default function Premium() {
  return (
    <View style={{paddingBottom: 80}}>
      <View style={{alignSelf: 'center'}}>
        <Image
          resizeMode="stretch"
          source={img}
          style={{width: 350, height: 50}}
        />
      </View>
      <FlatList
        numColumns={2}
        data={premob}
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
