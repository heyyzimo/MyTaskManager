export interface Task {
    id: string;           // 任务的唯一标识符
    title: string;        // 任务标题
    description: string;  // 任务描述
    status: 'pending' | 'completed'; // 任务状态：未完成或已完成
}
