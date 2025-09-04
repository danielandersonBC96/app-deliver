// app/(tabs)/home.tsx
import React from 'react';
import {
  FlatList,
  View,
  Text,
  Pressable,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@/components/navbar';
import ButtonDetails from '@/components/buttonDetails';
import { useRouter } from 'expo-router';
import { offers as categories } from '@/constants';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 12;
const OFFER_CARD_HEIGHT = 120; // menor altura
const CATEGORY_CARD_WIDTH = (width - CARD_MARGIN * 3) / 2;
const CATEGORY_CARD_HEIGHT = 140;

// Banner no topo
const banner = {
  image: 'https://st4.depositphotos.com/7341970/27357/v/450/depositphotos_273579866-stock-illustration-hot-summer-sale-promotional-banner.jpg', 
  text: 'Compre rápido e aproveite ofertas incríveis!',
};

// Exemplos de ofertas
const offers = [

  { id: 2, title: 'Burger Deal', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Sushi Promo', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80' },
];

export default function Home() {
  const router = useRouter();

  const handleCardPress = (title: string) => {
    router.push(`/search?category=${encodeURIComponent(title)}`);
  };

  const renderOffer = ({ item }: { item: typeof offers[0] }) => (
    <Pressable style={styles.offerCard} onPress={() => handleCardPress(item.title)}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.offerImage}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={styles.overlay} />
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Pressable style={styles.offerButton} onPress={() => handleCardPress(item.title)}>
          <Text style={styles.offerButtonText}>Ver detalhes</Text>
        </Pressable>
      </ImageBackground>
    </Pressable>
  );

  const renderCategory = ({ item }: { item: typeof categories[0] }) => (
    <View style={styles.categoryCard}>
      <Image source={item.image} style={styles.categoryImage} resizeMode="cover" />
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <ButtonDetails id={item.id.toString()} title={item.title} image={item.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={{ uri: banner.image }}
          style={styles.bannerImage}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={styles.bannerOverlay} />
          <Text style={styles.bannerText}>{banner.text}</Text>
        </ImageBackground>
      </View>

      <Text style={styles.header}>Ofertas Especiais</Text>
      <FlatList
        data={offers}
        renderItem={renderOffer}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: CARD_MARGIN, paddingBottom: 12 }}
      />

      <Text style={styles.header}>Categorias</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: CARD_MARGIN }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FE8C00' },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    paddingHorizontal: CARD_MARGIN,
    marginVertical: 12,
  },
  // Banner
  bannerContainer: {
    width: '100%',
    height: 160,
    paddingHorizontal: CARD_MARGIN,
    marginBottom: 12,
  },
  bannerImage: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 16,
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  // Ofertas
  offerCard: {
    width: '100%',
    height: OFFER_CARD_HEIGHT,
    marginBottom: CARD_MARGIN,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
  },
  offerImage: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 16,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  offerButton: {
    backgroundColor: '#FF6B00',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  offerButtonText: { color: 'white', fontWeight: '700', fontSize: 12 },
  // Categorias
  row: { justifyContent: 'space-between', marginBottom: CARD_MARGIN },
  categoryCard: {
    width: CATEGORY_CARD_WIDTH,
    height: CATEGORY_CARD_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: CARD_MARGIN,
    alignItems: 'center',
    paddingBottom: 8,
    elevation: 3,
  },
  categoryImage: {
    width: '70%',
    height: 60,
    borderRadius: 12,
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 4,
  },
});
