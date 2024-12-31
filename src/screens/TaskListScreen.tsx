import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

const TaskListScreen: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', title: '完成 React 学习', description: '学习基础 React Native', status: 'pending' },
        { id: '2', title: '写博客', description: '总结 React Native 学习笔记', status: 'completed' },
    ]);

    return (
        <View style={styles.container}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    task: { marginBottom: 20, padding: 15, backgroundColor: '#f9f9f9', borderRadius: 8 },
    title: { fontSize: 18, fontWeight: 'bold' },
});

export default TaskListScreen;
