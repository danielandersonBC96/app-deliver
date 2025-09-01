// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import { images } from '@/constants';
import React from 'react';

interface TabBarIconProps {
  focused: boolean;
  title: string;
  icon: any;
}

const TabBarIcon = ({ focused, title, icon }: TabBarIconProps) => (
  <View style={styles.tabIcon}>
    <Image
      source={icon}
      style={[styles.icon, { tintColor: focused ? 'black' : '#5D5F6D' }]}
      resizeMode="contain"
    />
    <Text style={[styles.tabText, { color: focused ? 'black' : '#5D5F6D' }]}>
      {title}
    </Text>
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Home" icon={images.home} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Cart" icon={images.bag} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Profile" icon={images.person} focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 50,
    marginHorizontal: 20,
    height: 80,
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'white',
    shadowColor: '#ffbc02ff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-around', // centraliza os ícones horizontalmente
    alignItems: 'center',
  },
  tabIcon: {
    flexDirection: 'row', // ícone e texto em linha
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6, // espaçamento entre ícone e texto
  },
  icon: {
    width: 24,
    height: 24,
    marginTop:-10
  },
  tabText: {
    fontSize: 12,
    fontWeight: '700',
    marginTop:18,
    marginLeft:-36
    
  },
});
