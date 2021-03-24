/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('../../../assets/image/logo/logo.png')}
          style={styles.img} />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.textLogin}>{props.isAuth}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HeaderProfile = (props) => {
  return (
    <View style={styles.containerLogin}>
      <View>
        <TouchableOpacity>
          <Text style={styles.textLogin}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#0064D2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerLogin: {
    height: 55,
    backgroundColor: '#0064D2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerImg: {
    width: 110,
    height: 55,
  },
  img: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'contain',
  },
  textLogin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textForgotPassword: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
