import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useEffect, useState} from 'react';

import BookHeader from '../Data/HeaderData/BookHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Arit = props => {
  const navigation = useNavigation();
  console.log('wishlist', props.route.params.favoriteList);
  const [data, setData] = useState(props.route.params.favoriteList);
  console.log('data', data);

  // useEffect(() => {
  //   async function fetchData() {
  //     const mobile = await AsyncStorage.getItem('value');
  //     console.log('Data@@@@@@@@@@', mobile);
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const vvalue = await AsyncStorage.getItem('value');
        console.log('Done@@@@@@@@@@@@.', vvalue);

        // return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // read error
      }
    }
    fetchData();
  }, []);

  const removeHandler = Removeid => {
    let removed = data.filter(i => i.id !== Removeid);
    setData(removed);
    console.log('data!!!!!', data);
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
                  <Text style={{color: '#000000', fontSize: 19}}>
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

export default Arit;
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
