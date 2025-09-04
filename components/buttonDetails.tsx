import { Pressable, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  id: string;
  name: string;
  image: any; // pode ser require ou URL
  description: string;
};

export default function ButtonDetails({ id, name, image, description }: Props) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.button}
      onPress={() =>
        router.push({
          pathname: `/details/${id}`,
          params: { name, image , description }, // envia o objeto da imagem diretamente
        })
      }
    >
      <Text style={styles.buttonText}>Ver Detalhes</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FE8C00",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
