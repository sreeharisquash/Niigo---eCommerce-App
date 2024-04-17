import React, { useContext, useState } from "react";
import { SearchBar } from "react-native-elements";
import themeContext from "../theme/themeContext";

const SearchCompo = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (text) => {
    // direct
    // text.event.value

    setSearch(text);
  };

  const theme = useContext(themeContext);

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={(e) => updateSearch(e)}
      value={search}
      lightTheme
      round
      containerStyle={{
        backgroundColor: theme.background,
        borderColor: theme.background,
      }}
      inputContainerStyle={{
        backgroundColor: theme.background,
        borderBottomWidth: 1,
      }}
    />
  );
};

export default SearchCompo;
