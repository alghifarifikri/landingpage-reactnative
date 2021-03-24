/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Header} from './Component/Header';
import BannerHome from './Component/BannerHome';
import CategoriesHome from './Component/CategoriesHome';
import HorizontalHotelPromo from './Component/HorizontalHotelPromo';
import HorizontalSpecialPromo from './Component/HorizontalSpecialPromo';
import HorizontalFeatures from './Component/HorizontalFeatures';
import MenuCityOfSingapore from './Component/MenuCityOfSingapore';
import HorizontalAttraction from './Component/HorizontalAttraction';

const IndexHome = () => {
  const [bannerImage, setBanner] = useState([
    require('../../assets/image/carouselImage/1.png'),
    require('../../assets/image/carouselImage/2.png'),
    require('../../assets/image/carouselImage/3.png'),
    require('../../assets/image/carouselImage/4.png'),
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
      <Header isAuth={'Alghifari Fikri'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View>
            <BannerHome image={bannerImage} />
            <TouchableOpacity style={styles.btnSeeAllPromo}>
              <Text style={styles.textBtnSeeAllPromo}>See All Promo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textSectionTitle}>
              Hey you, going anywhere?
            </Text>
            <CategoriesHome />
          </View>
          <View style={styles.containerNewYearPromo}>
            <Text style={styles.textSectionTitle}>
              Awali Tahun Baru dengan Staycation!
            </Text>
            <Text style={styles.textSectionSubtitle}>
              Suasana tahun baru masih terasa. Staycation saat weekend, boleh
              juga!
            </Text>
            <HorizontalHotelPromo />
          </View>
          <View style={styles.containerSpecialPromo}>
            <Text style={styles.textSectionTitle}>Penawaran Special</Text>
            <Text style={styles.textSectionSubtitle}>
              Penawaran Special khusus buat kamu
            </Text>
            <HorizontalSpecialPromo />
          </View>
          <View style={styles.containerNewFeatures}>
            <Text style={styles.textSectionTitle}>Kamu Udah Tau Belum?</Text>
            <Text style={styles.textSectionSubtitle}>
              Ada banyak fitur baru di tiket.com yang bikin perjalanmu makin
              mudah!
            </Text>
            <HorizontalFeatures />
          </View>
          <View style={styles.containerMenuCityOfSingapore}>
            <Text style={styles.textSectionTitle}>
              Eksplor Singapura di Awal Tahun!
            </Text>
            <MenuCityOfSingapore />
          </View>
          <View style={styles.containerWeekendAttraction}>
            <Text style={styles.textSectionTitle}>
              Ke Atraksi di Akhir Pekan!
            </Text>
            <Text style={styles.textSectionSubtitle}>
              Kalau bingung mau kemana saat weekend, bisa ke sini nih!
            </Text>
            <HorizontalAttraction />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    flex: 1,
  },
  btnSeeAllPromo: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'relative',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    alignSelf: 'flex-end',
    borderRadius: 5,
    right: 16,
    bottom: 40,
  },
  textBtnSeeAllPromo: {
    color: '#fff',
    fontSize: 12,
  },
  textSectionTitle: {
    color: '#35405A',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: -10,
  },
  textSectionSubtitle: {
    color: '#646D83',
    fontSize: 14,
    paddingHorizontal: 16,
    lineHeight: 22,
    marginVertical: 16,
  },
  containerNewYearPromo: {
    marginTop: 16,
    marginBottom: 40,
  },
  containerSpecialPromo: {
    marginTop: 16,
    marginBottom: 20,
  },
  containerNewFeatures: {
    marginTop: 16,
    marginBottom: 40,
  },
  containerMenuCityOfSingapore: {
    marginTop: 16,
  },
});

export default IndexHome;
