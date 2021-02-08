import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const OrangeButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
      disabled={props.loading}>
      {props.loading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <Text style={styles.textButton}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: '10%',
    backgroundColor: '#F14D32',
    height: 50,
    borderRadius: 25,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default OrangeButton;
