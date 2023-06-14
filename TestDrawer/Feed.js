import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  StyleSheet,
  StatusBar
} from 'react-native';
import React, {useState, useEffect,useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import BookHeader from '../Data/HeaderData/BookHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Feed = props => {
  const navigation = useNavigation();
  // console.log('wishlist', props.route.params.cart);
  const [data, setdata] = useState([]);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#FFD966');
    }, []),
  );
  useEffect(() => {
    async function fetchData() {
      try {
        const vvalue = await AsyncStorage.getItem('cartvalue');
        setdata(vvalue ? JSON.parse(vvalue) : []);
        console.log('@@@@@@@@@@dnksnfkfs', JSON.parse(vvalue));
      } catch (e) {}
    }
    fetchData();
  }, []);

  const removeHandler = Removeid => {
    let removed = data.filter(i => i.id !== Removeid);
    setdata(removed);
    console.log('data!!!!! REMOVED', data);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFD966'}}>
      <Pressable onPress={() => navigation.goBack()} style={{left: 10}}>
        <Icon name="arrow-back" color="#000000" size={32} />
      </Pressable>

      <FlatList
        data={data}
        // ListHeaderComponent={Arit}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              marginVertical: 0,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Image
                resizeMode="stretch"
                source={item.frontimage}
                style={styles.imagestyle}
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
                  <Text style={{color: '#000000', fontSize: 19}}>₹
                    {item.price}
                  </Text>

                  {/* <TouchableOpacity style={styles.touchable}>
                    <Icon
                      name={'heart-outline'}
                      style={styles.icon}
                      // name="heart-outline"
                      type="font-awesome"
                      color="#f00"
                      size={35}
                    />
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
            <TouchableHighlight
              onPress={() => removeHandler(item.id)}
              style={styles.button}>
              <Text style={styles.text}>Remove</Text>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
};

export default Feed;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#97DEFF',
    height: 40,
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 50,
  },

  text: {
    color: '#000000',
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
  },
  icon: {
    // position: 'absolute',
    // alignSelf:'center',
    padding: 7,
  },
  imagestyle: {
    width: 150,
    height: 180,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  touchable: {
    backgroundColor: '#ffff',
    marginHorizontal: 70,
    borderRadius: 50,
    width: 50,
    height: 50,
    zIndex: 1,
    bottom: 10,
  },
});
