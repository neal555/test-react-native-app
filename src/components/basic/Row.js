import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Row = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.leftText}>{'•   '}</Text>
      </View>
      <View>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  leftText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Row;
