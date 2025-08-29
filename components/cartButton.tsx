import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { images } from '@/constants';

const CartButton = () => {
  const totalItems = 10;

  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Image source={images.bag} style={styles.icon} />

      {totalItems > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25, // círculo perfeito
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    overflow: 'visible', // garante que badge apareça fora do círculo
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
    resizeMode: 'contain',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff', // corrigido
    fontSize: 12,
    fontWeight: 'bold',
  },
});
