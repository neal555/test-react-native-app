import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Button from './basic/Button';
import Logo from './basic/Logo';
import HorizontalList from './HorizontalList';

const {width} = Dimensions.get('screen');
const Header = (props) => {
  const [positionY, setPositionY] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const [dotsArray, setDotsArray] = useState([]);

  const onLayout = (e) => {
    setPositionY(e.nativeEvent.layout.y);
  };

  const onsScrollHorizontalList = (offset) => {
    if (Number.isInteger(offset / width)) {
      setDotIndex(offset / width);
    }
  };
  const horizontalListLength = (length) => {
    let dots = [];
    for (let i = 0; i < length; i++) {
      dots.push({indexItem: i});
    }
    setDotsArray(dots);
  };
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Desarrolla todo </Text>
      <Text style={[styles.text, styles.oranage]}>tu POTENCIAL</Text>
      <Text style={styles.text}>dentro del equipo</Text>
      <Text style={[styles.text, styles.oranage]}>
        ATOMIC<Text style={styles.text}>LABS</Text>
      </Text>

      <TouchableOpacity
        onPress={() => props.handleScroll(positionY - 5)}
        style={styles.seeMoreContainer}>
        <Image
          style={styles.seeMoreIcon}
          source={require('../../assets/Group_4013.png')}
        />
        <Text style={styles.seeMoreText}>Quiero saber mas.</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/Group_4032.png')}
        />
      </View>

      <Button onPress={() => props.navigation.navigate('SendData')} />

      <View style={styles.containerText} onLayout={onLayout}>
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

      <HorizontalList
        onScroll={onsScrollHorizontalList}
        horizontalLength={horizontalListLength}
      />
      <View style={styles.dotsContainer}>
        {dotsArray.map((item, index) => {
          return (
            <View
              key={index.toString()}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    item.indexItem === dotIndex ? '#F14D32' : 'white',
                },
              ]}
            />
          );
        })}
      </View>

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

      <Button onPress={() => props.navigation.navigate('SendData')} />

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
const styles = StyleSheet.create({
  horizontalList: {
    flexDirection: 'row',
    width,
    overflow: 'scroll',
    backgroundColor: 'red',
  },
  container: {
    paddingTop: '3%',
    width: '100%',
    alignItems: 'center',
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
    marginTop: '5%',
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
  dotsContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    width,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    marginHorizontal: 3,
    borderRadius: 10,
  },
});

export default Header;
