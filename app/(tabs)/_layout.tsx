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
      style={[styles.icon, { tintColor: focused ? '#FE8C00' : '#5D5F6D' }]}
      resizeMode="contain"
    />
    <Text style={[styles.tabText, { color: focused ? '#FE8C00' : '#5D5F6D' }]}>
      {title}
    </Text>
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false, // remove header globalmente
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        
        options={{
           headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" icon={images.home} focused={focused} />
          ),
        }}
      />
             <Tabs.Screen
        name="search"
        options={{
           headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Search" icon={images.search} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
           headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Cart" icon={images.bag} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        
        options={{
           headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Profile" icon={images.person} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 50,
    marginHorizontal: 20,
    height: 65,
    
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between', // 👈 distribui igualmente
    alignItems: 'center',
  },
  tabIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  icon: {
    width: 18,
    height: 28,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 7,
    fontWeight: '700',
  },
});
