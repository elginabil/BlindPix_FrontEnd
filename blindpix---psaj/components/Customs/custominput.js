import React from 'react';
import { TextInput } from 'react-native';

const CustomInput = (props) => {
  return (
    <TextInput
      placeholder={props.ph}
      style={{
        backgroundColor: '#f1f1f1',
        padding: 20,
        borderRadius: 12,
        marginBottom: 32,
      }}
    />
  );
};

export default CustomInput;
