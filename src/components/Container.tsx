import {StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/color';

type ContainerProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  backgroundColor?: string;
};

export default function Container({children}: ContainerProps) {
  return (
    <LinearGradient
      colors={[Colors.primary, Colors.backgroundDark]}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
