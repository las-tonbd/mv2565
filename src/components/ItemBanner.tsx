import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DIMENSIONS} from '../utils/dimensions';
import {BASE_URL_IMAGE} from '../api/api';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts, reponsiveFont} from '../theme/font';

interface ItemBannerProps {
  imageBanner: any;
  isActive: boolean;
  date: string;
  id: number;
}

export default function ItemBanner({
  imageBanner,
  isActive,
  date,
}: ItemBannerProps) {
  const year = new Date(date).getFullYear();
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${BASE_URL_IMAGE}/w500/${imageBanner}`}}
        style={styles.styleImage}
      />
      {isActive && (
        <LinearGradient
          colors={['rgba(182, 17, 107, 1)', 'rgba(59, 21, 120, 1)']} // Viền gradient
          style={styles.containerLocked}>
          <Text style={styles.title}>Locked</Text>
          <Text style={styles.year}>{year}</Text>
        </LinearGradient>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleImage: {
    width: DIMENSIONS.width * 0.9,
    height: DIMENSIONS.height * 0.23,
    borderRadius: 20,
  },
  containerLocked: {
    backgroundColor: 'black',
    width: DIMENSIONS.width * 0.9,
    position: 'absolute',
    bottom: 0,
    opacity: 0.8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingStart: 10,
    paddingVertical: 5,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: reponsiveFont(20),
    fontFamily: Fonts.Montserrat_Regular,
  },
  year: {
    color: 'white',
    fontSize: reponsiveFont(16),
    fontWeight: '400',
    fontFamily: Fonts.Montserrat_Regular,
  },
});
