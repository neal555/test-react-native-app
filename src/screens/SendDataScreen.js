import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import DataForm from '../components/DataForm';
import CellphoneForm from '../components/CellphoneForm';
import axios from 'axios';
import ModalAlert from '../components/basic/ModalAlert';
import Logo from '../components/basic/Logo';

const SendDataScren = (props) => {
  const [firstStepDone, setFirstStepDone] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [cellphone, setCellphone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [respError, setRespError] = useState(false);
  const [count, setCount] = useState(0);
  const returnData = (name, lastName) => {
    setFirstname(name);
    setLastname(lastName);
    setFirstStepDone(true);
  };
  const returnNumber = (number) => {
    setCellphone(number);
    setLoading(true);
    submit();
  };

  const submit = async () => {
    try {
      const url = 'https://morning-hamlet-18619.herokuapp.com/api/v1/form';
      const body = {
        firstname,
        lastname,
        cellphone,
      };
      const headers = {
        'Content-Type': 'appication/json',
      };
      const resp = await axios.post(url, body, headers);
      if (resp.data.success) {
        props.navigation.navigate('LastScreen');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setRespError(true);
    }
  };

  const onRetry = () => {
    setRespError(false);
    setCount(count + 1);
    if (count < 3) {
      setLoading(true);
      submit();
    } else {
      props.navigation.navigate('LastScreen');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/Mask.png')}
      style={styles.imageBg}>
      <ScrollView style={styles.scroll}>
        <ModalAlert
          visible={respError}
          onCancel={() => setRespError(false)}
          onRetry={() => onRetry()}
        />
        <View style={styles.main}>
          <Logo />
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
          {firstStepDone ? (
            <CellphoneForm returnData={returnNumber} loading={loading} />
          ) : (
            <DataForm returnData={returnData} />
          )}
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
          <Footer />
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
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
});

export default SendDataScren;
