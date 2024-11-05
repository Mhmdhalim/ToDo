# To-Do App

A minimalistic and interactive To-Do List app built with React. This app allows users to add, mark, filter, and remove tasks efficiently. The app saves tasks in local storage, so the task list persists across sessions.

## Features

- **Add Tasks**: Users can create new tasks by typing a task name and submitting it.
- **Mark as Completed**: Toggle a task as completed by clicking on the check icon.
- **Filter Tasks**: View all tasks, only active tasks, or only completed tasks.
- **Remove Tasks**: Delete individual tasks by clicking the remove (cross) icon.
- **Clear Completed**: Remove all completed tasks with a single click.
- **Persistent Data**: Task data is saved in `localStorage`, so tasks remain after refreshing the page.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **UUID**: Generates unique IDs for each task.
- **CSS with Tailwind**: Styled with Tailwind CSS for a modern and responsive design.

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/todo-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000` to see the app.

## Code Overview

The main components of the app are:

### Components

- **`AllTasks`**: Manages the main list of tasks and contains filtering logic. Handles task creation, removal, and clearing completed tasks.
- **`Task`**: Represents a single task. Contains logic for marking a task as completed or removing it.
- **`NameOfTask`**: A component for adding new tasks.
- **`Count`**: Displays the total number of tasks.

### State Management

- **Tasks State**: An array of tasks, each represented by an object with `id`, `task`, `completed`, and `delete` properties.
- **Filter State**: Controls the visibility of tasks based on their completion status (`all`, `active`, `completed`).
- **Local Storage**: Tasks are saved in `localStorage` to persist across sessions.

## How to Use

1. **Adding Tasks**: Enter a task in the input field and submit to add it to the list.
2. **Marking Tasks**: Click the circle next to a task to mark it as completed. Completed tasks are visually styled with a line-through effect.
3. **Filtering Tasks**: Use the "All," "Active," and "Completed" buttons to view tasks based on their status.
4. **Removing Tasks**: Click the cross icon on a task to delete it from the list.
5. **Clearing Completed Tasks**: Click "Clear Completed" to remove all tasks marked as completed.

## Folder Structure

