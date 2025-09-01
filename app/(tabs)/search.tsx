// app/(tabs)/search.tsx
import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { offers, sides, toppings } from '@/constants';
import Navbar from '@/components/navbar';
import { useLocalSearchParams, useFocusEffect } from 'expo-router';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const CARD_WIDTH = (width / 2) - (CARD_MARGIN * 3);
const CARD_HEIGHT = 180;

// Combina todos os itens em uma única lista **fora do componente**
const allItems = [
  ...offers.map(item => ({ id: `offer-${item.id}`, name: item.title, image: item.image, type: 'offer' })),
  ...sides.map((item, index) => ({ id: `side-${index}`, name: item.name, image: item.image, type: 'side' })),
  ...toppings.map((item, index) => ({ id: `topping-${index}`, name: item.name, image: item.image, type: 'topping' })),
];

export default function Search() {
  const { category } = useLocalSearchParams<{ category?: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(allItems);

  // Reseta a pesquisa toda vez que a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      setSearchQuery('');
      setFilteredItems(allItems); // mostra todos os itens
    }, [])
  );

  useEffect(() => {
    let items = allItems;

    // Filtra pela categoria, se existir
    if (category) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Filtra pela barra de pesquisa
    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(items);
  }, [searchQuery, category]); // **remove allItems daqui**

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search foods..."
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Lista de itens */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Image source={item.image} style={styles.icon} resizeMode="cover" />
            <Text style={styles.title}>{item.name}</Text>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.emptyText}>No results</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', padding: CARD_MARGIN },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 16,
    color: '#000',
  },
  contentContainer: { paddingBottom: 30 },
  row: { justifyContent: 'space-between', marginBottom: CARD_MARGIN },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: CARD_MARGIN,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  icon: { width: 80, height: 80, marginBottom: 10, borderRadius: 10 },
  title: { fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
  emptyText: { color: 'white', textAlign: 'center', marginTop: 50 },
});
