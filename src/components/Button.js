import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.main} onPress={props.onPress}>
      <Text style={styles.text}>¡Quiero ser parte!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: '2%',
    width: '55%',
    height: 60,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#4289B5',
  },
});

export default Button;
