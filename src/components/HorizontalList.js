import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HorizontalList = () => {
  const data = [
    {
      title: 'IMAGINA',
      body:
        '• Estrategia Digital\n• Big Data y Analysis\n• Consultoria Tecnológica\n• Reduccion de costos TI',
    },
    {
      title: 'EXPLORA',
      body: '• Inovación y Creación Tecnologica\n• UX / UI\n•Inovación',
    },
    {
      title: 'CONQUISTA',
      body:
        '• Dessarrollo Tecnológico y Creación Tecnológica \n• Ciberseguridad\n• Servicios de la Nuve',
    },
  ];
  const images = [
    require('../../assets/Group_4036.png'),
    require('../../assets/Group_4035.png'),
    require('../../assets/Group_4037.png'),
  ];
  return (
    <ScrollView horizontal centerContent>
      {data.map((item, index) => {
        const source = images[index];
        return (
          <View key={index.toString()} style={styles.container}>
            <View style={styles.card}>
              <Image style={styles.cardImage} source={source} />
              <View style={styles.lineContainer}>
                <View style={styles.largeLine}></View>
                <View style={styles.shortLine}></View>
                <View style={styles.largeLine}></View>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardBody}>{item.body}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
  },
  card: {
    marginTop: 20,
    width: '95%',
    height: 500,
    marginHorizontal: '2.5%',
    paddingHorizontal: '15%',
    alignItems: 'center',
    paddingTop: 35,
    justifyContent: 'flex-start',
    backgroundColor: '#F14D32',
    elevation: 5,
    borderRadius: 20,
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginBottom: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'ArchivoBlack-Regular',
    marginBottom: 20,
  },
  cardBody: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
  },
  lineContainer: {
    width: '65%',
    height: 4,
    marginBottom: 10,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeLine: {
    height: 4,
    backgroundColor: 'white',
    borderRadius: 2,
    width: '42%',
  },
  shortLine: {
    height: 4,
    backgroundColor: 'white',
    borderRadius: 2,
    width: '10%',
  },
});

export default HorizontalList;
