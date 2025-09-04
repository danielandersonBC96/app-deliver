import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Star from "../../../assets/icons/graph.png";

export default function Details() {
  const { id, name, image, description } = useLocalSearchParams<{
    id: string;
    name: string;
    image: any;
    description?: string;
  }>();

  return (
    <View style={styles.container}>
      {/* IMAGEM EM CIMA */}
      <Image source={image} style={styles.image} resizeMode="cover" />

      {/* DESCRIÇÃO EM BAIXO */}
      <View style={styles.descriptionContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <Image source={Star} style={styles.star} resizeMode="contain" />
        </View>

        {/* Descrição limitada a 2 linhas */}
        {description && (
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff",
  },
  image: { 
    width: "100%",       
    height: 250,  
    backgroundColor: "whitesmoke",
    borderRadius: 30,
    marginTop: 150,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: "#FE8C00",
    padding: 20,
    justifyContent: "flex-start",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: { 
    fontSize: 19, 
    fontWeight: "bold", 
    color: "white",
  },
  star: {
    width: 140,
    height: 140,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
  },
});
