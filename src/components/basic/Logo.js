import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../../assets/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 200,
    height: 70,
    resizeMode: 'stretch',
  },
});

export default Logo;
