/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import usericon from '../../../assets/image/after.jpg';

const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    height: 45,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondButton: {
    backgroundColor: '#eee',
    borderRadius: 50,
    height: 45,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 17,
  },
});

const AfterLogin = () => {
    return (
      <View>
        <ScrollView>
          <View>
            <Image source={usericon} style={{height: 330, width: '100%'}} />
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity
              style={styles.buttonLogin}>
              <Text style={styles.buttonText}>PESAN PERJALANAN</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity style={styles.secondButton}>
              <Text style={styles.buttonText}>LIHAT RIWAYAT PESANAN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

export default AfterLogin;
