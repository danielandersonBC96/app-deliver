import { ImageSourcePropType } from "react-native";

export interface TabBarIconProps {
  title: string;                  // Texto da aba
  icon: ImageSourcePropType;      // Ícone da aba (Image source)
  focused: boolean;               // Se a aba está selecionada
}
