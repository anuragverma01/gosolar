import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import face from '../../asset/image/face.png';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconsss from 'react-native-vector-icons/MaterialIcons';
import Parse from 'parse/react-native';
import {Image} from 'react-native-elements';
const Sidebar = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#F9FBE7');
    }, []),
  );

  const doUserLogOut = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          // Alert.alert('Success!', 'No user is logged in anymore!');
        }
        console.log('current', currentUser);
        // Navigation dispatch calls a navigation action, and popToTop will take
        // the user back to the very first screen of the stack
        navigation.replace('Splash');
        return true;
      })
      .catch(error => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  const [username, setUsername] = useState('');

  useEffect(() => {
    async function getCurrentUser() {
      if (username === '') {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setUsername(currentUser.getUsername());
        }
      }
    }
    getCurrentUser();
  }, [username]);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: '#F9FBE7', flex: 1}}>
      <Pressable onPress={() => navigation.goBack()} style={{left: 10}}>
        <Icon name="arrow-back" color="#000000" size={32} />
      </Pressable>
      <View
        style={{
          backgroundColor: '#ffff',
          position: 'absolute',
          flex: 1,
          alignContent: 'center',
          top: 30,
          margin: 10,
          borderRadius: 10,
          width: '95%',
          height: 140,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
        }}>
        <View style={{marginHorizontal: 20, top: 10}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{username}</Text>
          <Text>User12345@abc.com</Text>
          <Text>View Activity</Text>
        </View>
        <View style={{bottom: 50, left: 250}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={face}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 170,
            marginHorizontal: 15,
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              width: 80,
              height: 90,
              alignItems: 'center',
              paddingVertical: 20,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,

              elevation: 11,
            }}>
            <TouchableOpacity onPress={()=> navigation.replace('WishList')} >
              <Icon name="heart-outline" size={30} />
              <Text>Likes</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ffffff',
                width: 80,
                height: 90,
                alignItems: 'center',
                paddingVertical: 20,
                borderRadius: 10,
                marginStart: 15,
                marginEnd: 15,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
              }}>
              <Iconss name="bell-outline" size={30} />
              <Text>Notification</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ffffff',
                width: 80,
                height: 90,
                alignItems: 'center',
                paddingVertical: 20,
                borderRadius: 10,
                marginEnd: 15,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
              }}>
              <Icon name="ios-settings-outline" size={30} />

              <Text>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ffffff',
                width: 80,
                height: 90,
                alignItems: 'center',
                paddingVertical: 20,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
              }}>
              <Icon name="ios-card-outline" size={30} />

              <Text>Payments</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            margin: 12,
            borderRadius: 10,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', top: 10}}>
              <Icon style={{left: 10}} name="newspaper-outline" size={30} />
              <Text style={{top: 5, left: 20}}>Choose Language</Text>
              <Icon
                style={{position: 'absolute', right: 10}}
                name="ios-caret-forward-circle-outline"
                size={30}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            margin: 12,
            borderRadius: 10,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', top: 10}}>
              <Icon style={{left: 10}} name="ios-star-outline" size={25} />
              <Text style={{top: 5, left: 20}}>Your Rating</Text>
              <Icon
                style={{position: 'absolute', right: 10}}
                name="ios-caret-forward-circle-outline"
                size={30}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            margin: 10,
            borderRadius: 10,
            flex: 1,
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                backgroundColor: '#f00000',
                width: 6,
                marginVertical: 10,
              }}></Text>
            <Text
              style={{
                fontSize: 16,
                left: 10,
                marginVertical: 10,
                fontWeight: 'bold',
              }}>
              YOUR ORDERS
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',

              height: 50,
            }}>
            <TouchableOpacity onPress={() => navigation.replace('Addtocart')}>
              <View style={{flexDirection: 'row', top: 10}}>
                <Iconss
                  style={{left: 10}}
                  name="bag-personal-outline"
                  size={30}
                />
                <Text style={{top: 5, left: 20}}>Cart</Text>
                <Icon
                  style={{position: 'absolute', right: 10}}
                  name="ios-caret-forward-circle-outline"
                  size={30}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',

              height: 50,
            }}>
            <TouchableOpacity onPress={() => navigation.replace('WishList')}>
              <View style={{flexDirection: 'row', top: 10}}>
                <Icon style={{left: 10}} name="heart-outline" size={30} />
                <Text style={{top: 5, left: 20}}>Favorite orders</Text>
                <Icon
                  style={{position: 'absolute', right: 10}}
                  name="ios-caret-forward-circle-outline"
                  size={30}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',

              height: 50,
            }}>
            <View style={{flexDirection: 'row', top: 10}}>
              <Icon style={{left: 10}} name="book-outline" size={30} />
              <Text style={{top: 5, left: 20}}>Address book</Text>
              <Icon
                style={{position: 'absolute', right: 10}}
                name="ios-caret-forward-circle-outline"
                size={30}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              height: 50,
            }}>
            <View style={{flexDirection: 'row', top: 10}}>
              <Iconss
                style={{left: 10}}
                name="message-reply-text-outline"
                size={30}
              />
              <Text style={{top: 5, left: 20}}>Onilne ordering help</Text>
              <Icon
                style={{position: 'absolute', right: 10}}
                name="ios-caret-forward-circle-outline"
                size={30}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            margin: 12,
            borderRadius: 10,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}>
          <View style={{flexDirection: 'row', top: 10}}>
            <Iconsss style={{left: 10}} name="error-outline" size={30} />
            <Text style={{top: 5, left: 20}}>About</Text>
            <Icon
              style={{position: 'absolute', right: 10}}
              name="ios-caret-forward-circle-outline"
              size={30}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            margin: 12,
            borderRadius: 10,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}>
          <View style={{flexDirection: 'row', top: 10}}>
            <Icon style={{left: 10}} name="bug-outline" size={30} />
            <Text style={{top: 5, left: 20}}>Send feedback</Text>
            <Icon
              style={{position: 'absolute', right: 10}}
              name="ios-caret-forward-circle-outline"
              size={30}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            margin: 12,
            borderRadius: 10,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}>
          <View style={{flexDirection: 'row', top: 10}}>
            <Iconss style={{left: 10}} name="hand-coin-outline" size={30} />
            <Text style={{top: 5, left: 20}}>Rate us on play store</Text>
            <Icon
              style={{position: 'absolute', right: 10}}
              name="ios-caret-forward-circle-outline"
              size={30}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            margin: 12,
            borderRadius: 10,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}>
          <TouchableOpacity onPress={() => doUserLogOut()}>
            <View style={{flexDirection: 'row', top: 10}}>
              <Icon style={{left: 10}} name="ios-power-outline" size={30} />
              <Text style={{top: 5, left: 20}}>Log out</Text>
              <Icon
                style={{position: 'absolute', right: 10}}
                name="ios-caret-forward-circle-outline"
                size={30}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sidebar;
