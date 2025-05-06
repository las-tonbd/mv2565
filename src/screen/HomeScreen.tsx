import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../components/Container';

import UIHeader from '../components/UIHeader';
import CustomButtom from '../components/CustomButtom';
import ItemMovieLatest from '../components/ItemMovieLatest';
import {Icons} from '../assets/icons';
import ItemBanner from '../components/ItemBanner';
import {getPopular} from '../api/apiPopular';
import {Movie} from '../types';
import Carousel, {TAnimationStyle} from 'react-native-reanimated-carousel';
import {Extrapolation, interpolate} from 'react-native-reanimated';
import {DIMENSIONS} from '../utils/dimensions';
import {Fonts, reponsiveFont, reponsiveIcon} from '../theme/font';
import {getMovieLatest} from '../api/apiLatest';
import LinearGradient from 'react-native-linear-gradient';

const buttons = [
  {
    title: 'Popular',
    icon: Icons.IconChart,
    onPress: () => {
      console.log('Popular pressed');
      // thêm logic riêng
    },
  },
  {
    title: 'Movie',
    icon: Icons.IconMovieTV,
    onPress: () => {
      console.log('Movie pressed');
    },
  },
  {
    title: 'Trending',
    icon: Icons.IconTrendding,
    onPress: () => {
      console.log('Trending pressed');
    },
  },
];
const ITEM_WIDTH = DIMENSIONS.width * 0.75;
export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [movie, setMovie] = useState<Movie[]>([]);
  const [movieLatest, setMovieLatest] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const PAGE_WIDTH = DIMENSIONS.width;
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0]; // lấy phần "YYYY-MM-DD"
  };

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await getPopular();
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopular(); // gọi trong useEffect
  }, []);
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const today = new Date();
        const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(today.getDate() - 30);
        const formattedToday = formatDate(today);
        const formattedThirtyDaysAgo = formatDate(thirtyDaysAgo);
        console.log(formattedToday, formattedThirtyDaysAgo);
        const response = await getMovieLatest(
          formattedThirtyDaysAgo,
          formattedToday,
        );
        setMovieLatest(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLatest();
  }, []);

  const handlePress = (index: number) => {
    setActiveIndex(index);
    buttons[index].onPress(); // gọi sự kiện riêng của từng nút
  };

  const animationStyle: TAnimationStyle = React.useCallback((value: number) => {
    'worklet';

    const clamped = Math.max(Math.min(value, 2)); // Giới hạn để tránh giá trị bất ngờ

    const translateY = interpolate(
      clamped,
      [-1, 0, 1],
      [0, 0, 30], // Item tiếp theo hơi đè lên
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      clamped,
      [-1, 0, 1],
      [1, 1, 0.92], // Item sau nhỏ hơn
      Extrapolation.CLAMP,
    );

    const zIndex = Math.round(
      interpolate(
        clamped,
        [-1, 0, 1, 2, 3],
        [0, 100, 90, 80, 70],
        Extrapolation.CLAMP,
      ),
    );

    const opacity = interpolate(
      clamped,
      [-1, 0, 1],
      [0.6, 1, 0.8],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{translateY}, {scale}],
      zIndex,
      opacity,
    };
  }, []);

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <UIHeader title="Choose Movie" />
        <View style={styles.containerButtomTop}>
          <FlatList
            data={buttons}
            keyExtractor={item => buttons.indexOf(item).toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <CustomButtom
                key={buttons.indexOf(item)}
                title={item.title}
                icon={item.icon}
                isActive={activeIndex === buttons.indexOf(item)}
                onPress={() => handlePress(buttons.indexOf(item))}
              />
            )}
          />
        </View>
        <View style={styles.containerBanner}>
          <Carousel
            vertical
            style={styles.carousel}
            loop={false}
            width={PAGE_WIDTH}
            onSnapToItem={index => setCurrentIndex(index)}
            height={250} // thấp hơn để thấy item dưới
            data={movie}
            windowSize={5}
            customAnimation={animationStyle}
            renderItem={({item, index}) => {
              const isActive = index === currentIndex;

              return (
                <ItemBanner
                  key={index}
                  imageBanner={item.poster_path}
                  isActive={isActive}
                  date={item.release_date}
                  id={item.id}
                />
              );
            }}
          />
        </View>
        <View style={styles.containerLatest}>
          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>Latest Releases</Text>
          </View>

          <FlatList
            data={movieLatest.slice(0, 5)}
            keyExtractor={item => item.id.toString()}
            horizontal
            onScroll={e => {
              const offsetX = e.nativeEvent.contentOffset.x;
              const index = Math.round(offsetX / ITEM_WIDTH); // ITEM_WIDTH là chiều rộng mỗi item
              setSelectedIndex(index);
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <ItemMovieLatest
                  key={item.id}
                  imageBanner={item.poster_path}
                  id={item.id}
                  date={item.release_date}
                />
              );
            }}
          />
          <View style={styles.containerSelected}>
            {movieLatest.slice(0, 5).map((item, index) =>
              selectedIndex !== index ? (
                <TouchableOpacity style={styles.selectedDefault}>
                  {}
                </TouchableOpacity>
              ) : (
                <LinearGradient
                  colors={['#FE53BB', '#FE53BB']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.border}>
                  <LinearGradient
                    colors={['#B6116B', '#3B1578']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.inner}>
                    {}
                  </LinearGradient>
                </LinearGradient>
              ),
            )}
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButtomTop: {
    flexDirection: 'row',
  },
  containerBanner: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLatest: {
    flex: 6.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    overflow: 'visible',
  },
  containerTitle: {
    width: DIMENSIONS.width,
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: reponsiveFont(23),
    fontFamily: Fonts.Montserrat_Regular,
    color: 'white',
    fontWeight: '700',
    marginBottom: 10,
  },
  containerSelected: {
    width: '40%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedDefault: {
    height: reponsiveIcon(20),
    width: reponsiveIcon(20),
    borderRadius: 12,
    backgroundColor: 'white',
    opacity: 0.3,
  },
  border: {
    padding: 2, // 2px border
    height: reponsiveIcon(20),
    width: reponsiveIcon(20),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    borderRadius: 10,
    height: reponsiveIcon(18),
    width: reponsiveIcon(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
