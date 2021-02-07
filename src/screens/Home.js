import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import FlastListFooter from '../components/FlatListFooter';
import FlatListHeader from '../components/FlatListHeader';

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [respError, setRespError] = useState(false);
  const [data, setData] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    if (firstRender) {
      getData();
    }
  }, []);
  const getData = async () => {
    setFirstRender(false);
    try {
      const url = 'https://morning-hamlet-18619.herokuapp.com/api/v1/names';
      const resp = await axios.get(url);
      console.log('RESP PEOPLE => ', resp);
      setLoading(false);
      setData(resp.data);
    } catch (error) {
      setLoading(false);
      setRespError(true);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/flipMask.png')}
      style={styles.imageBg}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<FlatListHeader navigation={props.navigation} />}
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
        renderItem={({item, index}) => {
          return (
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{uri: item.photograph}} />
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardArea}>{item.area}</Text>
            </View>
          );
        }}
        ListFooterComponent={<FlastListFooter />}
      />
    </ImageBackground>
  );
};
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageBg: {
    width,
    height,
    resizeMode: 'cover',
    justifyContent: 'center',
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
  text: {
    alignSelf: 'center',
    color: '#F14D32',
  },
});

export default Home;
