import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FlastListFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2020 AtomicLabs. Todos los derechos reservados.{' '}
      </Text>
      <Text style={[styles.text, styles.underline]}>Aviso de privacidad</Text>
      <View style={styles.iconsContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/linkedin2x.png')}
        />
        <Image
          style={styles.icon}
          source={require('../../assets/twitter2x.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    height: 220,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 25,
  },
  text: {
    color: 'white',
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
  },
  iconsContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default FlastListFooter;
