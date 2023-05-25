import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {budgetmob} from '../../../Data/HeaderData/MobileHeaderimg';
import budgetimg from '../../../asset/image/HeaderMobileimg/Budget/budget.jpg';

export default function Bud() {
  return (
    <View>
      <View style={{alignSelf: 'center'}}>
        <Image
          resizeMode="stretch"
          source={budgetimg}
          style={{width: 350, height: 50}}
        />
      </View>
      <FlatList
        numColumns={2}
        data={budgetmob}
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
