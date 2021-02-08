import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FormItem from './basic/FormItem';
import OrangeButton from './basic/OrangeButton';

const DataForm = (props) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [validation, setValidation] = useState(false);

  const returnData = () => {
    if (name.length < 5 || lastName.length < 5) {
      setValidation(true);
      return;
    } else {
      props.returnData(name, lastName);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/Group_4014_2x.png')}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={[styles.text, styles.smallText]}>TE QUEREMOS</Text>
          <Text style={[styles.text, styles.oranage, styles.smallText]}>
            CONOCER
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </Text>
        <FormItem
          label="Nombre (s)"
          value={name}
          onChangeText={(value) => setName(value)}
          autoCapitalize="words"
          validation={validation}
          minLength={5}
          validationText="El nombre deberá tener minimo 5 caracteres"
        />
        <FormItem
          label="Apellidos"
          value={lastName}
          onChangeText={(value) => setLastName(value)}
          autoCapitalize="words"
          validation={validation}
          minLength={5}
          validationText="Los Apellidos deberán tener minimo 5 caracteres"
        />
        <OrangeButton onPress={() => returnData()} title="Continuar" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '3%',
  },
  headerContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  containerText: {
    width: '70%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'ArchivoBlack-Regular',
  },
  oranage: {
    color: '#F14D32',
  },
  smallText: {
    fontSize: 25,
  },

  formContainer: {
    marginTop: '5%',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});

export default DataForm;
