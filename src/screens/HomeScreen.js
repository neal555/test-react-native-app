import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PersonCard from '../components/basic/PersonCard';

const HomeScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const [respError, setRespError] = useState(false);
  const [data, setData] = useState([]);
  const flRef = useRef();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const url = 'https://morning-hamlet-18619.herokuapp.com/api/v1/names';
      const resp = await axios.get(url);
      setLoading(false);
      setData(resp.data);
    } catch (error) {
      setLoading(false);
      setRespError(true);
    }
  };

  const handleScroll = (y) => {
    flRef.current.scrollToOffset({offset: y, animated: true});
  };

  return (
    <ImageBackground
      source={require('../../assets/flipMask.png')}
      style={styles.imageBg}>
      <FlatList
        ref={flRef}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <Header handleScroll={handleScroll} navigation={props.navigation} />
        }
        data={data}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size={'large'} color={'#F14D32'} />
          ) : respError ? (
            <Text style={styles.text}>Error al traer los datos</Text>
          ) : (
            <Text style={styles.text}>Parece que no tenemos equipo.</Text>
          )
        }
        renderItem={({item}) => <PersonCard item={item} />}
        ListFooterComponent={<Footer />}
      />
    </ImageBackground>
  );
};

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  imageBg: {
    width,
    height,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: '#F14D32',
  },
});

export default HomeScreen;
