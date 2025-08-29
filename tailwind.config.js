import { FlatList, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
import { offers } from '@/constants';

const cardColors = ['bg-primary', 'bg-dark-100', 'bg-gray-100'];

export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <FlatList
        data={offers}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingVertical: 20, alignItems: 'center' }}
        renderItem={({ item, index }) => {
          const bgColor = cardColors[index % cardColors.length];
          return (
            <View className="w-11/12 mb-4">
              <Pressable className={`${bgColor} rounded-2xl p-6 shadow-lg`}>
                <Text className="text-white text-lg font-bold">{item.title}</Text>
                {item.description && (
                  <Text className="text-white mt-2">{item.description}</Text>
                )}
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
