/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const MenuCityOfSingapore = () => {
    return (
      <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.containerItemMenu}>
          <View style={styles.containerImgCity}>
            <Image
              source={require('../../../assets/image/singaporeCity/2.png')}
              style={styles.imageCity}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItemMenu}>
          <View style={styles.containerImgCity}>
            <Image
              source={require('../../../assets/image/singaporeCity/1.png')}
              style={styles.imageCity}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItemMenu}>
          <View style={styles.containerImgCity}>
            <Image
              source={require('../../../assets/image/singaporeCity/4.png')}
              style={styles.imageCity}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItemMenu}>
          <View style={styles.containerImgCity}>
            <Image
              source={require('../../../assets/image/singaporeCity/3.png')}
              style={styles.imageCity}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  containerMenu: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  containerItemMenu: {
    marginBottom: 16,
    width: '48%',
    borderRadius: 5,
  },
  containerImgCity: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  imageCity: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default MenuCityOfSingapore;
