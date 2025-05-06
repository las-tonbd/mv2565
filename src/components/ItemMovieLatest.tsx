import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, {Path} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-gesture-handler';
import {Fonts, reponsiveFont} from '../theme/font';
import {DIMENSIONS} from '../utils/dimensions';
import {BASE_URL_IMAGE} from '../api/api';

const svgWidth = DIMENSIONS.width * 0.7;
const svgHeight = DIMENSIONS.height * 0.35;

interface ItemLatestProps {
  imageBanner: any;
  date: string;
  id: number;
}

export default function ItemMovieLatest({
  imageBanner,

  date,
}: ItemLatestProps) {
  const year = new Date(date).getFullYear();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: svgWidth,
          height: svgHeight,
          borderRadius: 24,
          overflow: 'hidden',
        }}>
        <MaskedView
          style={{flex: 1}}
          maskElement={
            <Svg
              width={svgWidth}
              height={svgHeight}
              viewBox="0 0 304 317"
              preserveAspectRatio="xMidYMid meet">
              <Path
                d={
                  'M70.0011 0C71.9869 0 73.9605 0.21696 75.9076 0.607076C95.6662 4.56582 122.474 7 152 7C181.526 7 208.334 4.56582 228.092 0.607076C230.039 0.21696 232.013 0 233.999 0H276C291.464 1.03082e-06 304 12.536 304 28V289C304 304.464 291.464 317 276 317H242.311C239.828 317 237.362 316.657 234.95 316.066C214.784 311.123 185.1 308 152 308C118.9 308 89.2155 311.123 69.0498 316.066C66.6379 316.657 64.1725 317 61.6892 317H28C12.536 317 4.59063e-07 304.464 0 289V28C0 12.536 12.536 0 28 0H70.0011Z'
                }
                fill="black"
              />
            </Svg>
          }>
          <Image
            source={{uri: `${BASE_URL_IMAGE}/w500/${imageBanner}`}}
            style={{width: svgWidth, height: svgHeight}}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(182, 17, 107, 1)', 'rgba(59, 21, 120, 1)']} // Viền gradient
            style={styles.containerLocked}>
            <Text style={styles.title}>Locked</Text>
            <Text style={styles.year}>{year}</Text>
          </LinearGradient>
        </MaskedView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 300,
  },
  containerLocked: {
    backgroundColor: 'black',
    width: svgWidth,
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
