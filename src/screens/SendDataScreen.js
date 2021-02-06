import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FlastListFooter from '../components/FlatListFooter';

const SendDataScren = (props) => {
  const [firstStepDone, setFirstStepDone] = useState(false);
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
          <View style={styles.indicatorContainer}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={
                  firstStepDone
                    ? require('../../assets/Group_4016_2x.png')
                    : require('../../assets/Group_4014_2x.png')
                }
              />
            </View>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={
                  firstStepDone
                    ? require('../../assets/Group_4020_2x.png')
                    : require('../../assets/Group_4019_2x.png')
                }
              />
            </View>
          </View>
          <View style={styles.indicatorBarContainer}>
            <View
              style={[
                styles.indicatorBar,
                {width: firstStepDone ? '100%' : '40%'},
              ]}
            />
          </View>
          {/* AQUI VA EL FORM */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={
                firstStepDone
                  ? require('../../assets/Group_4034.png')
                  : require('../../assets/Group_4033.png')
              }
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
  indicatorContainer: {
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '50%',
    height: 30,
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  indicatorBarContainer: {
    marginTop: 10,
    width: '90%',
    height: 12,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  indicatorBar: {
    height: 12,
    backgroundColor: '#F14D32',
    borderRadius: 6,
  },
  imageContainer: {
    marginTop: 20,
    width: '95%',
    alignItems: 'center',
  },
  image: {
    height: 500,
    resizeMode: 'contain',
  },
});

export default SendDataScren;
