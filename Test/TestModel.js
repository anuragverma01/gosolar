import * as React from 'react';
import {ScrollView} from 'react-native';
import {Image} from 'react-native-elements';
import {Modal, Portal, Text, Button, Provider, View} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const TestModel = props => {
  const {visible, hideModal, modeldata} = props;
  // console.log(modeldata, 'one')
  const navigation = useNavigation();
  const containerStyle = {
    backgroundColor: 'white',
    flex: 0.95,
    margin: 20,
    borderRadius: 20,
    padding: 40,
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => hideModal()}
        contentContainerStyle={containerStyle}>
        <ScrollView>
          <Image
            style={{
              width: '100%',
              height: 350,
              resizeMode: 'contain',
              borderRadius: 20,
            }}
            source={{uri: modeldata.thumbnail}}
          />

          <Text
            style={{
              textAlign: 'justify',
              fontSize: 30,
              top: 10,
              fontWeight: 'bold',
            }}>
            {modeldata.title}
          </Text>
          <Text style={{textAlign: 'justify', fontSize: 15, top: 10}}>
            {modeldata.description}
          </Text>

          <Text
            style={{
              textAlign: 'justify',
              fontSize: 20,
              top: 15,
              color: '#f00',
            }}>
            Price ${modeldata.price}
          </Text>
          <Text style={{textAlign: 'justify', fontSize: 20, top: 10}}>
            -%{modeldata.discountPercentage}
          </Text>
          <Text style={{textAlign: 'justify', fontSize: 40, top: 10}}>
            {modeldata.brand}
          </Text>
          <Button
            style={{marginTop: 40}}
            mode="contained"
            onPress={() => navigation.navigate('Show')}>
            Show Details
          </Button>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default TestModel;
