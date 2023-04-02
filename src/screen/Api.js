import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import Cardexp from './Cardexp';
const App = (

  {item}
) => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);


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


    <View style={{  }}>
      {/* {isLoading ? (
        <ActivityIndicator />
      ) : ( */}

{/* <Searchbar style={{ position: 'absolute', alignSelf: 'center', top: '3%' }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      /> */}

      <FlatList
      numColumns={2}
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (

          <View style={{top:100}} >
              
           
              <Cardexp />
          </View>
        )}
      />
      {/* )} */}


     



    </View>




  );
};

export default App;