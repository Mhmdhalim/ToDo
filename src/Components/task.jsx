// Task.js
import React, { useState } from 'react';
import cross from '../images/icon-cross.svg';
import check from '../images/icon-check.svg';

export default function Task({ todo, index, removeItem, toggleComplete }) {
    return (
        <div
            id={index}
            className="newtask flex justify-between align-middle items-center w-full leading-tight h-10 p-2"
        >
            <div className="flex gap-2 align-middle items-center">
                <span
                    onClick={() => toggleComplete(todo.id)}
                    className={`${todo.completed ? 'checked' : ''} rounded-full h-5 w-5 flex items-center justify-center border opacity-30 hover:opacity-70`}
                >
                    {todo.completed ? <img src={check} alt="check icon" /> : ''}
                </span>
                <span className={`text_ ${todo.completed ? 'line-through opacity-50' : ''}`}>
                    {todo.task}
                </span>
            </div>
            <div>
                <img
                    src={cross}
                    alt="remove"
                    className="hover:opacity-70 cursor-pointer"
                    onClick={() => removeItem(todo.id)}
                />
            </div>
        </div>
    );
}
