import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import BottomNav from '../../src/components/BottomNav';

const CHATS = [
  { id: '1', name: 'Stock Group', lastMsg: 'Did you see Tesla?' },
  { id: '2', name: 'John Doe', lastMsg: 'Let’s review the portfolio' },
];

export default function ChatList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={CHATS}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.chatItem} 
            onPress={() => router.push(`/chat/chatScreen?name=${item.name}`)}
          >
            <View style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.msg}>{item.lastMsg}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  title: { fontSize: 28, fontWeight: 'bold', marginLeft: 20, marginBottom: 20 },
  chatItem: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#005b96', marginRight: 15 },
  name: { fontSize: 16, fontWeight: 'bold' },
  msg: { color: '#777' }
});