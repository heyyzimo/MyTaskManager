import React from 'react';
import { SafeAreaView } from 'react-native';
import TaskListScreen from './src/screens/TaskListScreen';

const App: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TaskListScreen />
        </SafeAreaView>
    );
};

export default App;
