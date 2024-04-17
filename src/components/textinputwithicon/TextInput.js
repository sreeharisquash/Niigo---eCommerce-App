import React from 'react';
import { View, TextInput } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const TextInputWithIcon = ({ svg, placeholder, ...props }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: 'gray', paddingVertical: 10 }}>
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" style={{ marginRight: 10 }}>
          <Path fillRule="evenodd" clipRule="evenodd" d={svg} fill="gray" />
        </Svg>
        <TextInput
          style={{ flex: 1, fontSize: 16 }}
          placeholder={placeholder}
          {...props}
        />
      </View>
    );
  };
  
  export default TextInputWithIcon;
  