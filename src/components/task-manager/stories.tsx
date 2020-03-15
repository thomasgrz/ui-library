import TaskManager from '.';
import React from 'react';
// @ts-ignore
import uuid from 'uniqid';

export default {
    component: TaskManager,
    title: 'Task Manager',
};

const initialItems = {
    forExistingTasks: [
        {
            task: 'procrastinate to the last minute',
            id: uuid(),
            completed: false,
        },
        {
            task: 'panic due to procrastination',
            id: uuid(),
            completed: false,
        },
        {
            task: 'get it done in four hours',
            id: uuid(),
            completed: false,
        },
        {
            task: 'repeat',
            id: uuid(),
            completed: false,
        },
    ],
    forSomeTasksCompleted: [
        {
            task: 'go a full day without touching face',
            id: uuid(),
            completed: false,
        },
        {
            task: 'wash hands (at least once)',
            id: uuid(),
            completed: false,
        },
        {
            task: 'say youre going to code when you get home but then dont',
            id: uuid(),
            completed: false,
        },
        {
            task: 'repeat',
            id: uuid(),
            completed: true,
        },
        {
            task: 'repeat',
            id: uuid(),
            completed: true,
        },
    ],
    forAllTasksCompleted: [
        {
            task: 'go a full day without touching face',
            id: uuid(),
            completed: true,
        },
        {
            task: 'wash hands (at least once)',
            id: uuid(),
            completed: true,
        },
        {
            task: 'say youre going to code when you get home but then dont',
            id: uuid(),
            completed: true,
        },
        {
            task: 'repeat',
            id: uuid(),
            completed: true,
        },
        {
            task: 'repeat',
            id: uuid(),
            completed: true,
        },
    ],
};

export const withExistingTasks = (): JSX.Element => <TaskManager initialItems={initialItems.forExistingTasks} />;

export const withNoTasks = (): JSX.Element => <TaskManager />;

export const withSomeTasksCompleted = (): JSX.Element => (
    <TaskManager initialItems={initialItems.forSomeTasksCompleted} />
);

export const withAllTasksCompleted = (): JSX.Element => (
    <TaskManager initialItems={initialItems.forAllTasksCompleted} />
);
