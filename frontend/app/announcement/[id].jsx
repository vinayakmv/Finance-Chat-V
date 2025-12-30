import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function AnnouncementDetail() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Announcement #{id}</Text>
        <Text style={styles.meta}>Posted by Admin on Oct 24, 2023</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.body}>
          This is where the detailed content of the finance announcement would go. 
          In a real app, you would fetch this from your backend using the ID provided in the URL.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, paddingTop: 60, backgroundColor: '#f8f9fa', borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#011f4b' },
  meta: { color: '#888', marginTop: 5 },
  content: { padding: 20 },
  body: { fontSize: 16, lineHeight: 24, color: '#444' }
});