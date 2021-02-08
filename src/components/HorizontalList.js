import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Row from './basic/Row';

const HorizontalList = () => {
  const firstBody = (
    <View>
      <Row>
        <Text style={styles.cardBody}>
          <Text style={styles.bold}>Estrategia</Text> Digital
        </Text>
      </Row>
      <Row>
        <Text style={styles.cardBody}>
          Big Data y<Text style={styles.bold}> Analysis</Text>
        </Text>
      </Row>
      <Row>
        <Text style={styles.cardBody}>
          <Text style={styles.bold}>Consultoria</Text> Tecnológica
        </Text>
      </Row>
      <Row>
        <Text style={styles.cardBody}>
          <Text style={styles.bold}>Reducción</Text> de costos TI
        </Text>
      </Row>
    </View>
  );
  const secondBody = (
    <View>
      <Row>
        <Text style={styles.cardBody}>
          Inovación
          <Text style={styles.bold}> y Creación Tecnologica</Text>
        </Text>
      </Row>
      <Row>
        <Text style={styles.cardBody}>
          <Text style={styles.bold}>UX / UI</Text>
        </Text>
      </Row>
      <Row>
        <Text style={styles.cardBody}>
          <Text style={styles.bold}>Innovación</Text>
        </Text>
      </Row>
    </View>
  );

  const thirdBody = (
    <View>
      <Row>
        <Text style={styles.cardBody}>
          Dessarrollo Tecnológico
          <Text style={styles.bold}> y Creación Tecnológica</Text>
        </Text>
      </Row>
      <Row>
        <Text style={styles.cardBody}>
          <Text style={styles.bold}>Ciberseguridad</Text>
        </Text>
      </Row>
      <Row>
        <Text style={styles.cardBody}>
          <Text style={styles.bold}>Servicios de la Nuve</Text>
        </Text>
      </Row>
    </View>
  );

  const data = [
    {
      title: 'IMAGINA',
      body: firstBody,
    },
    {
      title: 'EXPLORA',
      body: secondBody,
    },
    {
      title: 'CONQUISTA',
      body: thirdBody,
    },
  ];
  const images = [
    require('../../assets/Group_4036.png'),
    require('../../assets/Group_4035.png'),
    require('../../assets/Group_4037.png'),
  ];
  // const onLayout = (e) => {
  //   const layout = {
  //     width: e.nativeEvent.layout.width,
  //     height: e.nativeEvent.layout.height,
  //     x: e.nativeEvent.layout.x,
  //     y: e.nativeEvent.layout.y,
  //   };
  //   console.log('LAYOUT => ', layout);
  // };

  return (
    <ScrollView horizontal pagingEnabled>
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
              <View style={styles.bodyContainer}>{item.body}</View>
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
    paddingHorizontal: '20%',
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
  bodyContainer: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  cardBody: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
    alignSelf: 'flex-start',
  },
  bold: {
    fontWeight: 'bold',
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
