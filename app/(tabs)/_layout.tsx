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
    height: 70,                // altura menor
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius:45
  },
  tabIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 18,    // menor que antes
    height: 18,
    marginBottom: 1,
  },
  tabText: {
    fontSize: 6,  // menor que antes
    fontWeight: '700',
  },
});
