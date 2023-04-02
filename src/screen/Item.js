import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';
import { Image } from 'react-native-elements';

const Item = () => {
  //   const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  console.log(data)

  const getMovies = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();

      setData(json.products);
    } catch (error) {
      console.error(error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {

    getMovies();
  }, []);


  return (

    <ScrollView>

      <View style={{ flex: 1, padding: 24 }}>
      {/* {isLoading ? (
        <ActivityIndicator />
      ) : (  */}


        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (

            <View style={{ flexDirection: 'row' }}>

              {item.images?.map((img) => (
                <Image source={{ uri: `${img}` }} style={{ height: 50, width: 100, margin: 20 }}></Image>
              ))}
            </View>


          )}
        />
        {/* )} */}

      </View>
    </ScrollView>
  );
};

export default Item;