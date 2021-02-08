import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PersonCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{uri: item.photograph}} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardArea}>{item.area}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '94%',
    marginLeft: '3%',
    marginRight: '3%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00609C',
    marginTop: 20,
    elevation: 5,
    borderRadius: 10,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  cardName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardArea: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default PersonCard;
