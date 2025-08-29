// Navbar.js
import CartButton from '@/components/cartButton';
import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Navbar() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Coluna esquerda: título + Brasil */}
        <View style={styles.leftColumn}>
          <Text style={styles.title}>Delivery To</Text>
          <TouchableOpacity style={styles.locationBtn}>
            <Text style={styles.locationText}>Brasil</Text>
            <Image
              source={require('../assets/icons/arrow-right.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* CartButton à direita */}
        <CartButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderRadius: 30,
    marginHorizontal: 5,
    marginBottom: 30,
    
  },
  header: {
    flexDirection: 'row',           // linha principal
    justifyContent: 'space-between', // espaço entre left e right
    alignItems: 'center',           // centraliza verticalmente
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
  },
  leftColumn: {
    flexDirection: 'column',
    justifyContent: 'center', // centraliza verticalmente
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: 'tomato',
    marginBottom: 4, // espaçamento suave entre título e localização
  },
  locationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#ff7f50',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  locationText: {
    fontSize: 16,
    marginRight: 6,
    color: '#fff',
    fontWeight: '500',
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
});
