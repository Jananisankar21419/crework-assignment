import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTasks, updateTaskStatus } from "../services/taskservice.mjs"; 
import TaskCard from "./TaskCard"; 
import AddTaskButton from "./AddTaskButton";

const TaskSections = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [draggedTask, setDraggedTask] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text/plain", task.id); // Store task ID in dataTransfer
    setDraggedTask(task);
  };

  const handleDrop = async (e, status) => {
    e.preventDefault();
    if (draggedTask) {
      try {
        await updateTaskStatus(draggedTask.id, status);
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === draggedTask.id ? { ...task, status } : task
          )
        );
      } catch (error) {
        console.error("Error updating task status:", error);
      }
      setDraggedTask(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Group tasks by status
  const categories = [
    {
      id: "1",
      category: "To do",
      tasks: tasks.filter((task) => task.status === "To do"),
    },
    {
      id: "2",
      category: "In progress",
      tasks: tasks.filter((task) => task.status === "In progress"),
    },
    {
      id: "3",
      category: "Under review",
      tasks: tasks.filter((task) => task.status === "Under review"),
    },
    {
      id: "4",
      category: "Finished",
      tasks: tasks.filter((task) => task.status === "Finished"),
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-3 rounded-lg p-3 shadow-md text-[#606060]">
      {loading ? (
        <div>Loading...</div>
      ) : (
        categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-4 rounded-lg shadow-sm"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, category.category)}
          >
            <div className="flex justify-between items-center text-[#606060]">
              <h1 className="font-normal text-base flex items-center">
                {category.category}
                <span className="ml-2">
                  <Image
                    src="/stairs.svg"
                    width={24}
                    height={24}
                    alt="Stairs"
                  />
                </span>
              </h1>
            </div>
            <div className="py-3 space-y-2">
              {category.tasks.length > 0 ? (
                category.tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDragStart={handleDragStart} 
                  />
                ))
              ) : (
                <p className="text-gray-500">No tasks available</p>
              )}
              <AddTaskButton />
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default TaskSections;
