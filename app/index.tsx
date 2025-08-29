// Page.js
import React from 'react';
import { FlatList, View, Text, Pressable, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, offers } from '@/constants';
import Navbar from '../components/navbar'; // importa Navbar

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9; 
const CARD_HEIGHT = 280;
const CARD_PADDING = 26;

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar colada no topo */}
      <Navbar />

      {/* Lista de cards */}
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <ImageBackground
              source={item.image}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 16 }}
            >
              <View style={styles.overlay} />

              {/* Linha com título + seta */}
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={images.arrowRight} style={styles.icon} />
              </View>
            </ImageBackground>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    paddingTop: 0, // Navbar colada no topo
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 10, // espaçamento entre Navbar e cards
    paddingBottom: 28,
    backgroundColor:'white',
    margin:10,
    marginLeft:10,
    marginBlock:10, 
    marginTop:10,
    marginBottom:30,
    borderRadius:30,
    
},
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: CARD_PADDING,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(17, 17, 17, 0.54)',
    borderRadius: 16,
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
    fontSize: 20,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});
