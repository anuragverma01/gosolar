import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Side from '../../asset/image/side.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
export default function HomeSearchBar() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#97DEFF',
        alignItems: 'center',
        justifyContent: 'space-between',

        height: 70,
        paddingBottom: 10,
      }}>
      <TextInput placeholder="Search" style={styles.bar} />
      <Icon name="search" size={20} color="#000000" style={styles.icon} />

      <TouchableOpacity
        style={{right: 10}}
        onPress={() => navigation.openDrawer()}>
        <Image style={{width: 40, height: 20}} source={Side} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    borderRadius: 10,
    height: 45,
    backgroundColor: '#ffff',
    paddingStart: 20,
    paddingEnd: 20,
    shadowColor: '#000',
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
    marginHorizontal: 20,
    paddingStart: 40,
    // backgroundColor:'#f00'
  },

  icon: {
    position: 'absolute',
    left: 30,
    paddingBottom: 10,
  },
});
