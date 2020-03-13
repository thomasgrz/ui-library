// @ts-nocheck
import * as React from 'react';
import { withExistingTasks, withSomeTasksCompleted, withAllTasksCompleted, withNoTasks } from '../stories';
import { render } from '@testing-library/react';

describe('TaskManager', () => {
    it('should display items existing tasks', () =>{
        const { getByText} = render(withExistingTasks())
        expect(getByText(/procrastinate/).textContent).toContain('procrastinate to the last minute');
    });

    it('should show only incomplete tasks', () => {
        const {getByText, queryByText} = render(withSomeTasksCompleted())
        expect(getByText(/Tasks/).textContent).toContain('2/5')
        // this item has completed = true
        expect(queryByText(/repeat/)).toBeNull();
    });

    it('should display proper context content if no tasks exist', () => {
        const { getByText } = render(withNoTasks());
        expect(getByText(/No tasks/).textContent).toContain('No tasks to complete 🤔');
    });

    it('should display proper context content when all tasks are completed', () => {
        const { getByText } = render(withAllTasksCompleted());
        expect(getByText(/All/).textContent).toContain('All tasks completed, partner! 🤠')
    })
})