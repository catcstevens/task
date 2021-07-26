
const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the rubbish'},
        'task-2': { id: 'task-2', content: 'Try to take over the world'},
        'task-3': { id: 'task-3', content: 'Nail the interview'},
        'task-4': { id: 'task-4', content: 'Get the job'},
    },
    columns: {
        'column-1': {
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },  
    },
    columnOrder: ['column-1',]
};

export default initialData;
