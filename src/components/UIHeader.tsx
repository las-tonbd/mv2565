import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Fonts, reponsiveFont} from '../theme/font';
import Colors from '../constants/color';
import {scaleHeght} from '../utils/scale';

type HeaderProps = {
  title: string;
  iconLeft?: string;
  iconRight?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
};

export default function UIHeader({
  title,
  iconLeft,
  iconRight,
  onPressLeft,
  onPressRight,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <TouchableOpacity onPress={onPressLeft} disabled={!iconLeft}>
          <Image source={{uri: iconLeft}} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerCenter}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={styles.containerRigth}>
        <TouchableOpacity onPress={onPressRight} disabled={!iconRight}>
          <Image source={{uri: iconRight}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scaleHeght(25),
  },
  containerLeft: {
    flex: 2,
    backgroundColor: 'white',
  },
  containerCenter: {
    flex: 6,
    alignItems: 'center',
  },
  containerRigth: {
    flex: 2,
    backgroundColor: 'white',
  },
  textTitle: {
    fontFamily: Fonts.Montserrat_Regular,
    color: Colors.white,
    fontSize: reponsiveFont(22),
    fontWeight: '700',
  },
});
