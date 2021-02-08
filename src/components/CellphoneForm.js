import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FormItem from './basic/FormItem';
import OrangeButton from './basic/OrangeButton';

const CellphoneForm = (props) => {
  const [number, setNumber] = useState('');
  const [validation, setValidation] = useState(false);

  const returnData = () => {
    if (number.length !== 10) {
      setValidation(true);
    } else {
      props.returnData(number);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/Group_4023_2x.png')}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={[styles.text, styles.smallText]}>VALIDA TU</Text>
          <Text style={[styles.text, styles.oranage, styles.smallText]}>
            CELULAR
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>
          Necesitamos validar tu número para continuar.
        </Text>
        <Text style={styles.title}>
          Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
        </Text>

        <FormItem
          label="Número de celular"
          value={number}
          onChangeText={(value) => setNumber(value)}
          keyboardType="numeric"
          validation={validation}
          minLength={10}
          maxLength={10}
          validationText="Por favor ingrese 10 dígitos"
        />
        <OrangeButton
          disabled={props.loading}
          loading={props.loading}
          onPress={() => returnData()}
          title="Enviar"
        />
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
    width: '30%',
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
    marginTop: 20,
    color: 'white',
    fontSize: 18,
  },
});

export default CellphoneForm;
