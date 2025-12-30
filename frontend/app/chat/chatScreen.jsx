import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ChatScreen() {
  const { name } = useLocalSearchParams();
  const [messages, setMessages] = useState([{ id: '1', text: 'Welcome to the chat!', sender: 'system' }]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.msgBox, item.sender === 'me' ? styles.myMsg : styles.theirMsg]}>
            <Text style={styles.msgText}>{item.text}</Text>
          </View>
        )}
        style={styles.list}
      />
      <View style={styles.inputArea}>
        <TextInput placeholder="Type a message..." style={styles.input} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: { padding: 20, paddingTop: 50, backgroundColor: '#005b96' },
  headerText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  list: { padding: 10 },
  msgBox: { padding: 10, borderRadius: 10, marginBottom: 10, maxWidth: '80%' },
  myMsg: { alignSelf: 'flex-end', backgroundColor: '#005b96' },
  theirMsg: { alignSelf: 'flex-start', backgroundColor: '#fff' },
  msgText: { color: '#333' },
  inputArea: { padding: 15, backgroundColor: '#fff', flexDirection: 'row' },
  input: { flex: 1, backgroundColor: '#eee', borderRadius: 20, paddingHorizontal: 15, height: 40 }
});