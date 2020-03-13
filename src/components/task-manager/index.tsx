import React, { useState } from 'react';
import styled from 'styled-components';
// @ts-ignore
import uniq from 'uniqid';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 250px;
    border: 2px solid #343d46;
    box-sizing: border-box;
    border-radius: 1%;
    background-color: #D3D3D3;
`;

const Input = styled.input`
    height: 2.5em;
    border: 2px solid #343d46;
    border-radius: 1%;
`;

const DeleteButton = styled.button`
    width: 50px;
    text-align:center;
    color: white;
    background-color: #343d46;
    border: 2px solid #343d46;
    margin-right: 2px;
`
const TaskCounterWrapper = styled.div`
    height: 2em;
    display: flex;
    justify-content: space-between;
`

const ItemWrapper = styled.div`
    background-color: #c0c5ce;
    overflow-x: scroll;
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
`
const DefaultContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`
const Context = styled.h1`
    text-align: center;
`
const ResetButton = styled.button`
    display: block;
    width: 50%;
    margin: auto;
    color: white;
    background-color: #343d46;
    border: 2px solid #343d46;
`

const AddTaskButton = styled.button`
    width: 100%;
    height: 2em;
    color: white;
    background-color: #343d46;
    border: 2px solid #343d46;
`

type Item = {
    task: string;
    completed: boolean;
    id: string;
}

interface Props {
    initialItems?: Item[];
}


function TaskManager(props?: Props): JSX.Element {
    const initialItems = props && props.initialItems ? props.initialItems : [];
    const initialCompleteItems = initialItems.filter(({completed}) => completed)
    const initialIncompleteItems = initialItems.filter(({completed}) => !completed)
    // @ts-ignore 
    const [items, setItems]: [[Item] | [], any ] = useState(initialIncompleteItems);
    const [inputValue, setInputValue] = useState("");
    const [taskCount, setTaskCount] = useState(initialItems.length);
    const [completedTaskCount, setCompletedTaskCount] = useState(initialCompleteItems.length);

    const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const handleComplete = (id: string): void => {
        setItems((prevState: Item[]) => {
            return prevState.filter(item => item.id !== id) 
        })
        setCompletedTaskCount(completedTaskCount + 1)
    }

    const addTask = (): void => {
        if(inputValue.trim()){
            setItems((prevItems: [Item]) =>  {
                return [...prevItems, {
                        task: inputValue,
                        completed: false,
                        id: uniq(),
                    }
                ]
            })
            setTaskCount(taskCount + 1)
            setInputValue("")
            return;
        }
        return;
    }

    const reset = (): void => {
        setItems([]);
        setTaskCount(0);
        setCompletedTaskCount(0);
    }

    return (
        <Wrapper>
            <Input value={inputValue} onChange={handleInputChange}/>
            <AddTaskButton onClick={addTask}>Add new task</AddTaskButton>
            <TaskCounterWrapper>Tasks completed: {completedTaskCount}/{taskCount}</TaskCounterWrapper>
            {!items.length && 
                <DefaultContent>
                    <Context>
                        {taskCount === 0 ? 
                        "No tasks to complete 🤔" : 
                        <>
                            {"All tasks completed, partner! 🤠"}
                            <ResetButton onClick={reset}>Reset</ResetButton>
                        </>
                        }
                    </Context>
                </DefaultContent>
            }
            {!!items.length && items.map((item: Item)  => {
                return (
                    <ItemWrapper key={item.id}>
                        {item.task}
                        <DeleteButton onClick={(): void => handleComplete(item.id)}>YEET!</DeleteButton>
                    </ItemWrapper>
                )
            })}
        </Wrapper>
    )
}


export default TaskManager;