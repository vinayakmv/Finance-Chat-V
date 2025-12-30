import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { router, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Community', icon: 'people', path: '/(tabs)/communityScreen' },
    { name: 'Chats', icon: 'chatbubbles', path: '/(tabs)/chatList' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <TouchableOpacity 
            key={tab.name} 
            onPress={() => router.push(tab.path)}
            style={styles.tab}
          >
            <Ionicons 
              name={isActive ? tab.icon : `${tab.icon}-outline`} 
              size={24} 
              color={isActive ? '#005b96' : '#888'} 
            />
            <Text style={[styles.text, { color: isActive ? '#005b96' : '#888' }]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: { alignItems: 'center' },
  text: { fontSize: 12, marginTop: 4 }
});