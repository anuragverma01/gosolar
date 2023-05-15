import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import BookHeader from '../../Data/HeaderData/BookHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
export default function BooksHeadermain(props) {
  const {data} = props.route.params;
  // console.log('data',props.route.params)
  const [hide, setHide] = useState();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <Pressable
          onPress={() => navigation.navigate('BottomScr')}
          style={{left: 10}}>
          <Icon name="arrow-back" color="#000000" size={32} />
        </Pressable>

        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                // backgroundColor: '#ffffff',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode='stretch'
                  source={item.frontimage}
                  style={{width: 150, height: 180, borderRadius: 20,marginHorizontal:5}}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    flex: 1,
                    marginHorizontal: 10,
                  }}>
                  <Text style={{color: '#000000', fontSize: 16}}>
                    {item.title}
                  </Text>

                  <Text style={{fontSize: 12, textAlign: 'justify'}}>
                    {item.subtitle}
                  </Text>
                  <Text>{item.rating}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#000000', fontSize: 19}}>
                      {item.price}
                    </Text>

                    <TouchableHighlight
                      style={{
                        backgroundColor: '#F8F2F1',
                        marginHorizontal: 70,
                        borderRadius: 50,
                        width: 50,
                        height: 50,
                        bottom: 10,
                      }}>
                      <Icon
                        onPress={() => setHide(!hide)}
                        name={hide ? 'heart' : 'heart-outline'}
                        style={styles.icon}
                        // name="heart-outline"
                        type="font-awesome"
                        color="#f00"
                        size={35}
                      />
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
              <TouchableHighlight
                onPress={() => console.log('pre')}
                style={styles.button}>
                <Text style={styles.text}>Add to Cart</Text>
              </TouchableHighlight>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD966',
    height: 50,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },

  text: {
    color: '#000000',
    textAlign: 'center',
    padding: 12,
    fontSize: 16,
  },
  icon: {
    // position: 'absolute',
    // alignSelf:'center',
    padding: 7,
  },
});
