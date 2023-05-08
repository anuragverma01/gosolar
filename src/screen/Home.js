import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import m1 from '../../asset/image/Mobile/1.jpg';
import m2 from '../../asset/image/Mobile/2.jpg';
import m3 from '../../asset/image/Mobile/3.jpg';
import m4 from '../../asset/image/Mobile/4.jpg';
import HomeMobileList from '../../Data/HomeMobileList';

export default function Home() {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <FlatList
        style={{margin: 0 }}
        numColumns={2}
        data={HomeMobileList}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View style={{flex:1,backgroundColor:'#f00'}} >
            {/* <Text>{item.title1}</Text>
            <Text>{item.title2}</Text> */}

          
              {/* <Image style={{}} source={item.image} />
              <Text>{item.title}</Text> */}
            
          </View>
        )}
      />
    </View>
  );
}
