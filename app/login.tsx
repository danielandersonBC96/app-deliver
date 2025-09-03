// app/(tabs)/search.tsx
import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { offers, sides, toppings } from '@/constants';
import Navbar from '@/components/navbar';
import { useLocalSearchParams, useFocusEffect } from 'expo-router';
import ButtonDetails from '@/components/buttonDetails';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;

// Combina todos os itens em uma única lista
const allItems = [
  ...offers.map(item => ({ id: `offer-${item.id}`, name: item.title, image: item.image })),
  ...sides.map((item, index) => ({ id: `side-${index}`, name: item.name, image: item.image })),
  ...toppings.map((item, index) => ({ id: `topping-${index}`, name: item.name, image: item.image })),
];

export default function Search() {
  const { category } = useLocalSearchParams<{ category?: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(allItems);

  // Reseta a pesquisa toda vez que a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      setSearchQuery('');
      setFilteredItems(allItems);
    }, [])
  );

  // Filtra os itens por categoria e pesquisa
  useEffect(() => {
    let items = allItems;

    if (category) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(items);
  }, [searchQuery, category]);

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
          <ButtonDetails 
            id={item.id} 
            name={item.name} 
            image={item.image as string} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.emptyText}>No results</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FE8C00', padding: CARD_MARGIN },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
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
  emptyText: { color: 'white', textAlign: 'center', marginTop: 50 },
});
