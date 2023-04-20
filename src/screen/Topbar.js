import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import appliances from '../../asset/image/appliances.png';
import book from '../../asset/image/book.png';
import electronic from '../../asset/image/electronic.png';
import fashion from '../../asset/image/fashion.png';
import furniture from '../../asset/image/furniture.png';
import mobile from '../../asset/image/mobile.jpg';
import pharmacy from '../../asset/image/Pharmacy.jpg';
import {ScrollView} from 'react-native-gesture-handler';

const Topbar = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-around',
              paddingTop: 20,
              marginHorizontal: 20,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Image
                style={{width: 60, height: 60, borderRadius: 50}}
                source={book}
              />
              <Text style={{marginStart:5}} >Books</Text>
            </View>

            <View>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginStart: 10,
                }}
                source={mobile}
              />
              <Text style={{marginStart:10}} >Mobile</Text>
            </View>

            <View>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginStart: 10,
                }}
                source={electronic}
              />
              <Text style={{marginStart:10}} >Electronic</Text>
            </View>

            <View>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginStart: 10,
                }}
                source={fashion}
              />
              <Text style={{marginStart:10}}  >Fashion</Text>
            </View>

            <View>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginStart: 10,
                }}
                source={furniture}
              />
              <Text style={{marginStart:10}}  >Furniture</Text>
            </View>
            <View>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginStart: 10,
                }}
                source={appliances}
              />
              <Text style={{marginStart:10}}  >Appliances</Text>
            </View>

            <View>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginStart: 10,
                }}
                source={pharmacy}
              />
              <Text style={{marginStart:10}}  >Pharmacy</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Topbar;
