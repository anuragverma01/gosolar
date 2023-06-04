import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {budgetmob} from '../../../Data/HeaderData/MobileHeaderimg';
import budgetimg from '../../../asset/image/HeaderMobileimg/Budget/budget.jpg';

export default function Bud() {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', flex: 1}}>
        <Image resizeMode="contain" source={budgetimg} style={{height: 50}} />
      </View>
      <FlatList
        numColumns={2}
        data={budgetmob}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{height: 250, flex: 1}}
              source={item.image}
            />
          </View>
        )}
      />
    </View>
  );
}
