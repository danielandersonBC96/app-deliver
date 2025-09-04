// app/(tabs)/search.tsx
import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { offers, sides, toppings } from '@/constants';
import Navbar from '@/components/navbar';
import { useLocalSearchParams, useFocusEffect } from 'expo-router';
import ButtonDetails from '@/components/buttonDetails';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 12;
const CARD_WIDTH = (width - CARD_MARGIN * 3) / 2;

type Item = { id: string; name: string; image: any; type: string; description?: string };

// Combina todos os itens em uma única lista
const allItems: Item[] = [
  ...offers.map(item => ({
    id: `offer-${item.id}`,
    name: item.title,
    image: item.image,
    type: 'offer',
    description: item.description,
  })),
  ...sides.map((item, index) => ({
    id: `side-${index}`,
    name: item.name,
    image: item.image,
    type: 'side',
    description: item.description,
  })),
  ...toppings.map((item, index) => ({
    id: `topping-${index}`,
    name: item.name,
    image: item.image,
    type: 'topping',
    description: item.description,
  })),
];

export default function Search() {
  const { category } = useLocalSearchParams<{ category?: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>(allItems);

  useFocusEffect(
    useCallback(() => {
      setSearchQuery('');
      setFilteredItems(allItems);
    }, [])
  );

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

  const renderCard = ({ item }: { item: Item }) => (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{item.name}</Text>
      {/* descrição removida do card */}
      <ButtonDetails
        id={item.id}
        name={item.name}
        image={item.image}
        description={item.description || ""}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <TextInput
        placeholder="Search foods..."
        placeholderTextColor="#999"
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.emptyText}>No results found</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FE8C00', paddingHorizontal: CARD_MARGIN },
  searchInput: {
    height: 45,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    marginVertical: 12,
  },
  listContainer: { paddingBottom: 30 },
  row: { justifyContent: 'space-between', marginBottom: CARD_MARGIN },
  card: {
    width: CARD_WIDTH,
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: CARD_MARGIN,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1.2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'whitesmoke',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 4,
    paddingHorizontal: 5,
  },
  emptyText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});
