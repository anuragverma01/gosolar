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
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function BooksHeadermain(props) {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#FFD966');
    }, []),
  );
  const {data} = props.route.params;
  // console.log('data',props.route.params)
  const navigation = useNavigation();
  const [favoriteList, setFavoriteList] = useState([]);
  const [cart, setcart] = useState([]);
  // function to add an item to favorite list

  const onCart = add => {
    setcart([...cart, add]);
  };

  const onRemoveCart = unadd => {
    const cart = cart.filter(item => item.id !== unadd.id);
    setcart(cart);
  };

  const ifCartExists = add => {
    if (cart.filter(item => item.id === add.id).length > 0) {
      //  console.log('Item',add.id)

      return true;
    }
    return false;
  };
  const addtocart = item => {
    let filter = cart?.filter(v => v.id === item?.id);
    console.log('filter', filter, item);
    if (filter?.length > 0) {
      setcart(cart?.filter(v => v.id !== item?.id));
    } else {
      setcart([item, ...cart]);
    }
    // ifExists(item) ? onRemoveFavorite(item) : onFavorite(item);
  };

  //===========================================================================================

  //===========================================================================================

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
  const gettotal = () => {
    let total = 0;
    favoriteList.map(item => {
      total = total + item.price;
    });
    return total;
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
              <TouchableOpacity
                onPress={() => {
                  console.log('Pressed');
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
                        ₹{item.price}
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
                <TouchableOpacity
                  onPress={() => addtocart(item)}
                  style={styles.button}>
                  <Text style={styles.text}>
                    {cart?.some(v => v.id === item.id)
                      ? 'Remove From Cart'
                      : 'Add To Cart '}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={{alignItems: 'center' }}>
        {cart.length > 0 ? (
          <View style={styles.model}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                alignItems: 'baseline',
              }}>
              <Text style={{color: '#ffff', fontSize: 20}}>{cart.length}</Text>
              <Icon
                style={{left: 10, top: 5}}
                name="cart"
                size={30}
                color="#ffffff"
              />
              <Text style={{color: '#ffff', fontSize: 18, left: 10}}>Add</Text>
            </View>

            <View style={{flexDirection: 'row-reverse', right: 50, bottom: 45}}>
              <Text
                onPress={() => {
                  navigation.navigate('Addtocart', {cart});
                }}
                style={{color: '#ffff', fontSize: 20, top: 5}}>
                Next
              </Text>
              <Icons
                style={{position: 'absolute', left: -30}}
                name="arrow-right"
                size={40}
                color="#ffffff"
              />
            </View>
          </View>
        ) : null}

        {favoriteList.length > 0 ? (
          <View style={styles.model}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 15,
                alignItems: 'baseline',
              }}>
              <Text style={{color: '#ffff', fontSize: 20}}>
                {favoriteList.length}
              </Text>
              <Text style={{color: '#ffff', fontSize: 20, left: 10}}>
                {'ITEM ₹' + gettotal()}
              </Text>
            </View>

            <View style={{flexDirection: 'row-reverse', right: 20, bottom: 40}}>
              <Text
                onPress={() => {
                  navigation.navigate('WishList', {favoriteList});
                }}
                style={{color: '#ffff', fontSize: 20, left: 20}}>
                Next
              </Text>
              <Icons
                style={{position: 'absolute', left: -8, top: -5}}
                name="arrow-right"
                size={40}
                color="#ffffff"
              />
            </View>
          </View>
        ) : null}
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
    borderRadius: 5,
    position: 'absolute',
    width: 380,
    height: 60,
    bottom: 10,
    paddingStart: 20,
    flex:1
  },
});
