import { FlatList, StyleSheet, View, Image } from 'react-native';
import { Card, Text, Chip, ActivityIndicator } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import TestModel from './TestModel';


const Child = () => {
  const [isLoading, setLoading] = useState(true);
  const [select, setSelect] = useState(false);
  const [SelectedItem, SetSelectedItem] = React.useState({});
  const [visible, setVisible] = React.useState(false);
  const showModal = (item) => {
    setVisible(true)
    SetSelectedItem(item)
  };
  const hideModal = () => setVisible(false);

  // console.log(ActivityIndicator)
  // console.log(visible, 'pressed')
  // console.log(visible,'pressed')

  const [data, setData] = useState([]);
  // console.log(data)

  const getdata = async () => {

    try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();

      setData(json.products);
    } catch (error) {
      console.error(error);

    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    getdata();
  }, []);



  return (

    <View style={{ marginVertical:0  }}>

      <View style={{ flexDirection: 'row', alignSelf: 'center', position: 'absolute' }}>
        {/* <Chip style={{ height: 40, width: 100 }}
          icon={select ? "check-bold" : "laptop"}
          selected={select}
          onPress={() => setSelect(!select)}
          mode='outlined'>
          Laptop</Chip>

        <Chip style={{ height: 40, width: 100, marginLeft: 10, marginRight: 10 }}
          icon={select ? "check-bold" : "apple"}
          selected={select}
          onPress={() => setSelect(!select)}
          mode='outlined'>
          Apple</Chip>

        <Chip style={{ height: 40, width: 120 }}
          icon={select ? "check-bold" : "microsoft"}
          selected={select}
          onPress={() => setSelect(!select)}
          mode='outlined'>
          Microsoft  </Chip> */}



      </View>

      {isLoading ? (
        <ActivityIndicator animating={true} color='#f00'/>
      ) : (


        <FlatList
          style={{ margin: 10}}
          numColumns={2}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (

            <Card style={{
              margin: 10, flex: 1
            }} onPress={() => showModal(item)}>


              <Image style={{ width: '100%', height: 150, resizeMode: 'stretch', borderRadius: 20 }}
                source={{ uri: item.thumbnail }} />
              <Card.Content  >
                <Text  >{item.title}</Text>
              </Card.Content>
            </Card>
          )
          }

        />
      )}
      {visible && < TestModel
        visible={visible}
        modeldata={SelectedItem}
        hideModal={() => hideModal()} />}

    </View >
  )
}

const styles = StyleSheet.create({


})



export default Child;