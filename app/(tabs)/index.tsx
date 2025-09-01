// app/(tabs)/home.tsx
import React from 'react';
import {
  FlatList,
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { offers } from '@/constants';
import Navbar from '@/components/navbar';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const CARD_WIDTH = (width / 2) - (CARD_MARGIN * 3);
const CARD_HEIGHT = 160;

export default function Home() {
  const router = useRouter();

  // Navega para Search passando a categoria
  const handleCardPress = (category: string) => {
    router.push(`/search?category=${encodeURIComponent(category)}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />

      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: CARD_MARGIN }}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => handleCardPress(item.title)} // envia categoria
          >
            <ImageBackground
              source={item.image}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay} />
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: CARD_MARGIN,
  },
  contentContainer: {
    paddingBottom: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    height: 510,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    backgroundColor: 'black',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
    marginBottom: CARD_MARGIN,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
