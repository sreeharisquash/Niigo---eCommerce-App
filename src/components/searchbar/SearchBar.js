import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const SearchBarComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Lemon',
    'Orange',
    'Peach',
    'Strawberry',
  ]);
  const [isFocused, setIsFocused] = useState(false);

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Search"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && (
        <FlatList
          data={filteredItems}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default SearchBarComponent;
