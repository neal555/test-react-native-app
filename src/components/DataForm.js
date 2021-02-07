import axios from 'axios';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

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
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Nombre (s)</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
              autoCapitalize={'words'}
            />
            <Image
              style={styles.inputIcon}
              source={require('../../assets/lockicon.png')}
            />
          </View>
          {validation && name.length < 5 && (
            <Text style={styles.validation}>
              El nombre deberá tener minimo 5 caracteres
            </Text>
          )}
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Apellidos</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={(value) => setLastName(value)}
              autoCapitalize={'words'}
            />
            <Image
              style={styles.inputIcon}
              source={require('../../assets/lockicon.png')}
            />
          </View>
          {validation && lastName.length < 5 && (
            <Text style={styles.validation}>
              Los Apellidos deberán tener 5 caracteres como minimo
            </Text>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => returnData()}>
          <Text style={styles.textButton}>Continuar</Text>
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

export default DataForm;
