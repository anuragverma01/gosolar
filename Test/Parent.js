import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Child from './Child';

const Parent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        style={{ position: 'absolute', alignSelf: 'center', top: 40, width: 350, height: 55, backgroundColor: 'transparent', borderWidth: 2 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />


      <Child />



    </View>
  );
};

export default Parent;
