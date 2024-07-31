"use client";
import React, { useState, useEffect } from "react";
import { addTask, fetchTasks } from "../services/taskservice.mjs";

const TaskComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error(error);
      }
    };

    getTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      await addTask(
        "New Task",
        "To-Do",
        "Medium",
        new Date().toISOString(),
        "Task description"
      );
      // Update state or refetch tasks after adding
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleAddTask}>Add Task</button>
      {/* Render tasks */}
    </div>
  );
};

export default TaskComponent;
