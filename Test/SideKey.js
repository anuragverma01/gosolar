import React from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Side from '../asset/image/side.png';
const SideKey = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={{width: 40, height: 20}} source={Side} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default SideKey;
