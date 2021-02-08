import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const FormItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={props.value}
          onChangeText={props.onChangeText}
          autoCapitalize={props.autoCapitalize}
          maxLength={props?.maxLength ?? undefined}
          keyboardType={props?.keyboardType ?? 'default'}
          editable={props?.editable ?? true}
        />
        <Image
          style={styles.inputIcon}
          source={require('../../../assets/lockicon.png')}
        />
      </View>
      {props.validation && props.value.length < props.minLength && (
        <Text style={styles.validation}>{props.validationText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  oranage: {
    color: '#F14D32',
  },
});
export default FormItem;
