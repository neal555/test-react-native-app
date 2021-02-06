import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Button from './Button';
import HorizontalList from './HorizontalList';

const FlatListHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/logo.png')}
        />
      </View>
      <Text style={styles.text}>Desarrolla todo </Text>
      <Text style={[styles.text, styles.oranage]}>tu POTENCIAL</Text>
      <Text style={styles.text}>dentro del equipo</Text>
      <Text style={[styles.text, styles.oranage]}>
        ATOMIC<Text style={styles.text}>LABS</Text>
      </Text>
      <View style={styles.seeMoreContainer}>
        <Image
          style={styles.seeMoreIcon}
          source={require('../../assets/Group_4013.png')}
        />
        <Text style={styles.seeMoreText}>Quiero saber mas.</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/Group_4032.png')}
        />
      </View>
      <Button />
      <View style={styles.containerText}>
        <Text style={[styles.text, styles.smallText]}>SOMOS EL BRAZO</Text>
        <Text style={[styles.text, styles.smallText]}>
          DERECHO
          <Text style={[styles.text, styles.oranage, styles.smallText]}>
            {' '}
            DE LA
          </Text>
        </Text>
        <Text style={[styles.text, styles.oranage, styles.smallText]}>
          TECNOLOGIA
        </Text>
      </View>
      <ScrollView horizontal>
        <HorizontalList />
      </ScrollView>
      <View style={styles.containerText}>
        <Text style={[styles.text, styles.smallText]}>TE ENCANTARA</Text>
        <Text style={[styles.text, styles.oranage, styles.smallText]}>
          TRABAJAR
        </Text>
        <Text style={[styles.text, styles.oranage, styles.smallText]}>
          CON NOSOTROS
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.secondImage}
          source={require('../../assets/Group_4040.png')}
        />
      </View>
      <Button />

      <View style={styles.containerText}>
        <Text style={[styles.text, styles.smallText]}>
          NUESTRO
          <Text style={[styles.text, styles.oranage, styles.smallText]}>
            {' '}
            EQUIPO
          </Text>
        </Text>
      </View>
    </View>
  );
};
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  horizontalList: {
    flexDirection: 'row',
    width: width,
    overflow: 'scroll',
    backgroundColor: 'red',
  },
  container: {
    paddingTop: '3%',
    width: '100%',
    alignItems: 'center',
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
  text: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'ArchivoBlack-Regular',
  },
  oranage: {
    color: '#F14D32',
  },
  seeMoreContainer: {
    paddingTop: '4%',
    width: '100%',
    alignItems: 'center',
  },
  seeMoreIcon: {
    width: 50,
    height: 50,
  },
  seeMoreText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    width: '98%',
  },
  image: {
    width: '100%',
    height: 320,
    resizeMode: 'contain',
  },
  secondImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  containerText: {
    marginTop: '10%',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 28,
  },
});

export default FlatListHeader;
