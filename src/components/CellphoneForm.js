import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

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
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Número de celular</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={number}
              onChangeText={(value) => setNumber(value)}
              editable={!props.loading}
              keyboardType="numeric"
              maxLength={10}
            />
            <Image
              style={styles.inputIcon}
              source={require('../../assets/lockicon.png')}
            />
          </View>
          {validation && number.length !== 10 && (
            <Text style={styles.validation}>Por favor ingrese 10 dígitos</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => returnData()}
          disabled={props.loading}>
          {props.loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.textButton}>Enviar</Text>
          )}
        </TouchableOpacity>
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
  itemContainer: {
    marginTop: '10%',
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    marginTop: '1%',
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    paddingLeft: '2%',
  },
  input: {
    width: '90%',
  },
  inputIcon: {
    alignItems: 'center',
    width: 20,
    height: 25,
  },
  validation: {
    color: '#F14D32',
  },
  button: {
    marginTop: '10%',
    backgroundColor: '#F14D32',
    height: 50,
    borderRadius: 25,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CellphoneForm;
