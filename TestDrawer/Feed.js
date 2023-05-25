import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

function Feed() {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);



  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={showModal} />

      <Modal transparent={true} onBackdropPress={hideModal} visible={visible} >
        <View style={{flex:0.5, backgroundColor: '#ffffff',borderRadius:10}}>
          <Text style={{color:'#03fc1c',fontSize:35,alignSelf:'center',paddingVertical:20}} >You've sucessfully extended your stay</Text>
          <View style={{paddingHorizontal:30}} >
          <Text>Select Suites Phoenix</Text>
          <Text>Deluxe Sulte/1 Queen Bed, Sofa Sleeper</Text>
          <Text>Rate: Best Available Rate</Text>
          <Text>No. of Rooms :1</Text>
          <Text>Guest(s) Per Room : 1 Adult</Text>
          <Text>Type : Non-Smoking</Text>
          <Text>Check In : Mar, 8th</Text>
          <Text>Check Out : Mar, 17th</Text>
          </View>
          {/* <Button title="Hide modal" onPress={} /> */}
        </View>
      </Modal>
    </View>
  );
}

export default Feed;
