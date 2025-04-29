import {StyleSheet, View} from 'react-native';
import React from 'react';
import Container from '../components/Container';

import UIHeader from '../components/UIHeader';
import CustomButtom from '../components/CustomButtom';

export default function HomeScreen() {
  return (
    <Container>
      <UIHeader title="Choose Movie" />
      <View style={styles.containerButtomTop}>
        <CustomButtom />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerButtomTop: {
    flexDirection: 'row',
  },
});
