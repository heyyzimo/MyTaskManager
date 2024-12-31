import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
}

const TaskListScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: '完成 React 学习', description: '学习基础 React Native', status: 'pending' },
    { id: '2', title: '写博客', description: '总结 React Native 学习笔记', status: 'completed' },
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      title,
      description,
      status: 'pending',
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>任务列表</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="任务标题"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="任务描述"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="添加任务" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  task: { padding: 15, backgroundColor: '#f9f9f9', marginBottom: 10, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default TaskListScreen;
