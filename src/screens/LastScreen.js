import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FlastListFooter from '../components/FlatListFooter';

const LastScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/Mask.png')}
      style={styles.imageBg}>
      <ScrollView style={styles.scroll}>
        <View style={styles.main}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={require('../../assets/logo.png')}
            />
          </View>

          <View style={styles.containerText}>
            <Text style={[styles.text]}> TUS DATOS</Text>
            <Text style={[styles.text]}>
              HAN SIDO
              <Text style={[styles.text, styles.oranage]}> ENVIADOS</Text>
            </Text>
            <Text style={[styles.text, styles.oranage]}>CON EXITO</Text>
          </View>

          <Text style={styles.title}>
            En breve recibirás un correo de confirmación por parte del equipo de
            AtomicLabs.
          </Text>
          <Text style={styles.title}>
            {'Recuerda revisar tu bandeja de SPAM\n¡Esperamos verte pronto!'}
          </Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/Group_4039.png')}
            />
          </View>
          <FlastListFooter />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageBg: {
    width,
    height,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  main: {width, alignItems: 'center'},
  scroll: {
    width,
  },
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
  imageContainer: {
    marginTop: 20,
    width: '95%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
  },
  containerText: {
    marginTop: '10%',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'ArchivoBlack-Regular',
  },
  oranage: {
    color: '#F14D32',
  },
  title: {
    marginTop: '3%',
    paddingHorizontal: '3%',
    color: 'white',
    fontSize: 18,
    alignSelf: 'flex-start',
  },
});

export default LastScreen;
