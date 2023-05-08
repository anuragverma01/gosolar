import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import HomeClotesList from '../../Data/HomeClotesList';

export default function Second() {
  return (
  
    <View style={{backgroundColor: '#ffffff', marginStart: 10, marginEnd: 10}}>
      <FlatList
        style={{margin: 0}}
        numColumns={2}
        data={HomeClotesList}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View
            style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
            {/* <Text>{item.title1}</Text>
            <Text>{item.title2}</Text> */}

            <Image
              style={{height: 150, width: 180, borderRadius: 5, marginTop: 5}}
              source={item.image}
            />
            <Text style={{color: '#000000', fontSize: 16, fontWeight: '400'}}>
              {item.title}
            </Text>
            
          </View>
        
    
        )}
      />
      
    </View>
  );
}
