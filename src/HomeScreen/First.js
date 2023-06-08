import {View, Text, Image, FlatList, Pressable} from 'react-native';
import React from 'react';

export default function First(props) {
  const {data, Headline, Headline2} = props;
  // console.log('data',data)
  return (
    <View>
      <Text
        style={{
          marginHorizontal: 30,
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 30,
          color: '#000000',
        }}>
        {Headline}
      </Text>

      <Text style={{marginHorizontal: 30, marginBottom: 10}}>{Headline2}</Text>

      <View
        style={{backgroundColor: '#ffffff', marginStart: 10, marginEnd: 10}}>
        <FlatList
          style={{margin: 0}}
          numColumns={2}
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                backgroundColor: '#ffffff',
                alignItems: 'center',
              }}>
              {/* <Text>{item.title1}</Text>
            <Text>{item.title2}</Text> */}
              <Pressable
                onPress={() => {
                  
                  console.log('prees12');
                }}
                >
                <Image
                  style={{
                    height: 150,
                    width: 180,
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                  source={item.image}
                />
              </Pressable>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '500'}}>
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
