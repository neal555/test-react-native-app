import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import FlastListFooter from './components/FlatListFooter';
import FlatListHeader from './components/FlatListHeader';

const {width, height} = Dimensions.get('window');
const App: () => React$Node = () => {
  const data = [
    {
      name: 'juan miguel bourges',
      area: 'UX Designer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/2.png',
    },
    {
      name: 'luis felipe ayala',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/1.png',
    },
    {
      name: 'laura susana yankelevich',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/3.png',
    },
    {
      name: 'álvaro amigo',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/2.png',
    },
    {
      name: 'carlos alberto moncada',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/1.png',
    },
    {
      name: 'josé álvaro medina',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/1.png',
    },
    {
      name: 'maría lucinda granados',
      area: 'UX Designer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/3.png',
    },
    {
      name: 'jesús reyes',
      area: 'UX Designer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/2.png',
    },
    {
      name: 'héctor gerardo rodríguez',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/2.png',
    },
    {
      name: 'josefina maría cetina',
      area: 'UX Designer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/3.png',
    },
    {
      name: 'maría dolores moreno',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/3.png',
    },
    {
      name: 'manuel yankelevich',
      area: 'UX Designer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/2.png',
    },
    {
      name: 'jorge piña',
      area: 'Back-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/1.png',
    },
    {
      name: 'erick aguirre',
      area: 'UX Designer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/2.png',
    },
    {
      name: 'paloma urrutia',
      area: 'Back-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/3.png',
    },
    {
      name: 'mario arturo rivera',
      area: 'Back-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/1.png',
    },
    {
      name: 'josé álvaro ramírez',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/1.png',
    },
    {
      name: 'patricia rivero',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/3.png',
    },
    {
      name: 'celia mercedes jiménez',
      area: 'UX Designer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/3.png',
    },
    {
      name: 'carlos alfonso tovar',
      area: 'Back-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/1.png',
    },
    {
      name: 'maría isabel uscanga',
      area: 'Back-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/3.png',
    },
    {
      name: 'rafael martínez',
      area: 'Front-end developer',
      photograph: 'https://morning-hamlet-18619.herokuapp.com/images/2.png',
    },
  ];

  return (
    <>
      <ImageBackground
        source={require('../assets/flipMask.png')}
        style={styles.imageBg}>
        <SafeAreaView>
          <View style={styles.main}>
            <FlatList
              style={styles.list}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={<FlatListHeader />}
              data={data}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.card}>
                    <Image
                      style={styles.cardImage}
                      source={{uri: item.photograph}}
                    />
                    <Text style={styles.cardName}>{item.name}</Text>
                    <Text style={styles.cardArea}>{item.area}</Text>
                  </View>
                );
              }}
              ListFooterComponent={<FlastListFooter />}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    width,
    height,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  main: {
    width,
    height,
  },
  text: {
    color: 'white',
  },
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
    borderRadius: 20,
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

export default App;
