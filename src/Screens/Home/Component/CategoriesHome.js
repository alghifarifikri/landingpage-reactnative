/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CategoriesHome = () => {

    return (
      <View style={styles.containerIcon}>
        <TouchableOpacity style={styles.containerItemIcon}>
          <View style={styles.containerImgIcon}>
            <Image
              source={require('../../../assets/image/icons/airplane.png')}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textCategories}>Pesawat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerItemIcon}>
          <View style={styles.containerImgIcon}>
            <Image
              source={require('../../../assets/image/icons/hotel.png')}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textCategories}>Hotel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItemIcon}>
          <View style={styles.containerImgIcon}>
            <Image
              source={require('../../../assets/image/icons/train.png')}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textCategories}>Kereta Api</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItemIcon}>
          <View style={styles.containerImgIcon}>
            <Image
              source={require('../../../assets/image/icons/car-pngrepo-com.png')}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textCategories}>Sewa Mobil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItemIcon}>
          <View style={styles.containerImgIcon}>
            <Image
              source={require('../../../assets/image/icons/tent.png')}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textCategories}>Atraksi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItemIcon}>
          <View style={styles.containerImgIcon}>
            <Image
              source={require('../../../assets/image/icons/ticket.png')}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textCategories}>Event</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  containerIcon: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 16,
    paddingLeft: 16,
  },
  containerItemIcon: {
    paddingHorizontal: 13,
    paddingVertical: 13,
    backgroundColor: '#fff',
    marginRight: 11,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  containerImgIcon: {
    width: 75,
    height: 45,
  },
  imageIcon: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'contain',
  },
  containerText: {
    marginTop: 10,
  },
  textCategories: {
    color: '#35405A',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CategoriesHome;
