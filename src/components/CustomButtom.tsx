import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
  title: string;
  icon: any;
  isActive: boolean;
  onPress?: () => void;
};

export default function GradientButton({
  title,
  icon,
  isActive,
  onPress,
}: ButtonProps) {
  return (
    <LinearGradient
      colors={['#09FBD3', '#130B2B']} // Viền gradient
      style={styles.gradientBorder}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={isActive ? styles.innerContainer : styles.innerContainerDefault}
        onPress={onPress}>
        <Image source={{uri: icon}} style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 3, // Độ dày viền
    borderRadius: 50,
    marginHorizontal: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B0F3B', // màu nền tím đậm bên trong
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,

    // Bóng đổ phía dưới
    shadowColor: '#00A1FF',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  innerContainerDefault: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // màu nền tím đậm bên trong
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,

    // Bóng đổ phía dưới
    shadowColor: '#00A1FF',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
