/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Foundation';
import MyIcon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    padding: 5,
  },
  banner: {
    height: 40,
    backgroundColor: '#0064D2',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    padding: 5,
    paddingRight: 15,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  card1: {
    width: 80,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
  card2: {
    marginRight: 10,
    marginLeft: 10,
    width: 80,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
});

const Headers = () => {
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.row}>
            <View style={{flex: 1}} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icons name="clipboard-notes" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MyIcon name="dots-three-vertical" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

export default Headers;
