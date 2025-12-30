import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import BottomNav from '../../src/components/BottomNav';

const SAMPLE_ANNOUNCEMENTS = [
  { id: '1', title: 'New Investment Strategy', author: 'Admin', date: 'Oct 24' },
  { id: '2', title: 'Market Update: Q3 Results', author: 'Analyst', date: 'Oct 23' },
];

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Finance Feed</Text>
        <TouchableOpacity onPress={() => router.push('/announcement/announcement')}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={SAMPLE_ANNOUNCEMENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => router.push(`/announcement/${item.id}`)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSub}>{item.author} • {item.date}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { padding: 20, paddingTop: 50, backgroundColor: '#011f4b', flexDirection: 'row', justifyContent: 'space-between' },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  plus: { color: '#fff', fontSize: 30 },
  list: { padding: 15 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 15, elevation: 2 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  cardSub: { color: '#666', marginTop: 5 }
});