// AllTasks.js
import React, { useState, useEffect } from 'react';
import NameOfTask from './nameoftask';
import Task from './task';
import Count from './count';
import { v4 as uuidv4 } from 'uuid';

export default function AllTasks() {
    const [newTask, setNewTask] = useState(() => {
        const savedTasks = localStorage.getItem("newTask");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setFilter] = useState('all'); // Filter state

    const createTasks = (value) => {
        setNewTask([
            ...newTask,
            { id: uuidv4(), task: value, completed: false, delete: false },
        ]);
    };

    useEffect(() => {
        localStorage.setItem('newTask', JSON.stringify(newTask));
    }, [newTask]);

    const toggleComplete = (id) => {
        setNewTask(newTask.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const removeItem = (id) => {
        setNewTask(newTask.filter(task => task.id !== id));
    };

    const clearComplete = () => {
        setNewTask(newTask.filter(task => !task.completed));
    };

    // Filtered tasks based on selected filter
    const filteredTasks = newTask.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true; // 'all' filter shows all tasks
    });

    return (
        <>
            <NameOfTask addTask={createTasks} />
            <div className="radius_todo shadow rounded w-full py-1 px-1 leading-tight">
                {filteredTasks.map((task, index) => (
                    <Task
                        key={task.id}
                        todo={task}
                        index={index}
                        removeItem={removeItem}
                        toggleComplete={toggleComplete}
                    />
                ))}
                <div className="footer flex justify-between p-1.5">
                    <div className="count cursor-pointer">
                        <Count numoftasks={newTask.length} />
                    </div>
                    <div className="icons-center">
                        <span
                            className={`cursor-pointer ${filter === 'all' ? "blue" : ""}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </span>
                        <span
                            className={`mx-2 cursor-pointer ${filter === 'active' ? "blue" : ""}`}
                            onClick={() => setFilter('active')}
                        >
                            Active
                        </span>
                        <span
                            className={`cursor-pointer ${filter === 'completed' ? "blue" : ""}`}
                            onClick={() => setFilter('completed')}
                        >
                            Completed
                        </span>
                    </div>
                    <div className="clear cursor-pointer" onClick={clearComplete}>
                        Clear Completed
                    </div>
                </div>
            </div>
        </>
    );
}
