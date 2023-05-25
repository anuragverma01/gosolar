import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  StyleSheet,
  Pressable,
  Touchable,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {TouchableOpacity} from 'react-native-gesture-handler';

export default function BooksHeadermain(props) {
  const [visible, setVisible] = useState();
  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);

  const {data} = props.route.params;
  // console.log('data',props.route.params)
  const navigation = useNavigation();
  const [favoriteList, setFavoriteList] = useState([]);
  const [hide, setHide] = useState([]);
  // function to add an item to favorite list
  const onFavorite = liked => {
    setFavoriteList([...favoriteList, liked]);
  };

  // function to remove an item from favorite list
  const onRemoveFavorite = unliked => {
    const filteredList = favoriteList.filter(item => item.id !== unliked.id);
    setFavoriteList(filteredList);
  };

  // function to check if an item exists in the favorite list or not
  const ifExists = liked => {
    if (favoriteList.filter(item => item.id === liked.id).length > 0) {
      //  console.log('Item',liked.id,liked)

      return true;
    }
    return false;
  };

  // console.log('favorite item!!!!!!!', favoriteList);

  const Whistlist = item => {
    let filter = favoriteList?.filter(v => v.id === item?.id);
    // console.log('filter', filter, item);
    if (filter?.length > 0) {
      setFavoriteList(favoriteList?.filter(v => v.id !== item?.id));
    } else {
      setFavoriteList([item, ...favoriteList]);
    }
    // ifExists(item) ? onRemoveFavorite(item) : onFavorite(item);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#FFD966'}}>
        <Pressable
          onPress={() => navigation.navigate('BottomScr')}
          style={{left: 10}}>
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

                    <TouchableOpacity
                      style={styles.touchable}
                      onPress={() => Whistlist(item)}>
                      <Icon
                        onPress={() => Whistlist(item)}
                        name={
                          favoriteList?.some(v => v.id === item.id)
                            ? 'heart'
                            : 'heart-outline'
                        }
                        style={styles.icon}
                        // name="heart-outline"
                        type="font-awesome"
                        color="#f00"
                        size={35}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.text}>Add to Cart</Text>
              </TouchableHighlight>
            </View>
          )}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          visible={favoriteList.length > 0 ? true : false}
          style={styles.model}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'baseline',
            }}>
            <Text style={{color: '#ffff', fontSize: 14}}>1 ITEM</Text>
            <Text style={{color: '#ffff', fontSize: 20, left: 10}}>$240</Text>
          </View>

          <View style={{flexDirection: 'row-reverse', right: 20, bottom: 40}}>
            <Text
              onPress={() => {
                navigation.navigate('WishList', {favoriteList});
              }}
              style={{color: '#ffff', fontSize: 16}}>
              Next
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
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
  model: {
    backgroundColor: '#f00',
    borderRadius: 10,
    position: 'absolute',
    width: 360,
    height: 60,
    bottom: 10,
    paddingStart: 20,
  },
});
