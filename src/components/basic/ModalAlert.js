import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const ModalAlert = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image
              style={styles.asset}
              source={require('../../../assets/Group_4029_2x.png')}
            />
            <Text style={styles.title}>Ups :(</Text>
            <Text style={styles.message}>
              Ha ocurrido un error, ¿Reintentar?
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={props.onRetry}>
              <Text style={[styles.textButton, styles.orange]}>Reintentar</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.button} onPress={props.onCancel}>
              <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderRadius: 20,
    width: '90%',
    height: '35%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  header: {
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  asset: {
    width: 60,
    height: 60,
  },
  title: {
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    marginTop: '2%',
    fontSize: 16,
  },
  buttonsContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    borderTopColor: '#F14D32',
    borderStyle: 'solid',
    borderTopWidth: 2,
  },
  button: {
    width: '49.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orange: {color: '#F14D32'},
  separator: {
    width: '1%',
    height: 60,
    backgroundColor: '#F14D32',
  },
});

export default ModalAlert;
