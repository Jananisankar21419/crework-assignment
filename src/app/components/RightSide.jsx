import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleHelp } from "lucide-react";
import TaskCard from "./TaskCard";
import TaskAction from "./TaskAction";
import PostModal from "./PostModal";
import { fetchTasks, addTask, updateTaskStatus } from "../services/taskservice";

// Info data
const infoData = [
  {
    id: Date.now() + Math.random() * 1000,
    img: "/ill-1.svg",
    title: "Introducing tags",
    description:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
  },
  {
    id: Date.now() + Math.random() * 1000,
    img: "/ill-2.svg",
    title: "Share Notes Instantly",
    description:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
  },
  {
    id: Date.now() + Math.random() * 1000,
    img: "/ill-3.svg",
    title: "Access Anywhere",
    description:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
  },
];

const RightSide = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggedTask, setDraggedTask] = useState(null);

  // Fetch tasks from Supabase
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Failed to fetch tasks:", error.message);
      }
    };
    loadTasks();
  }, []);

  // Handle task creation
  const handleCreateTask = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle adding a task and updating the state
  const handleAddTask = async (task) => {
    try {
      const newTask = await addTask(task);
      setTasks((prevTasks) => [...prevTasks, newTask[0]]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
    handleCloseModal();
  };

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

  return (
    <div className="space-y-4">
      {/* Greeting and help */}
      <div className="flex items-center justify-between">
        <div className="flex-grow flex pl-10">
          <h1 className="font-semibold text-3xl text-black items-start pl-[0.1px] pt-[30px] pb-0">
            Good morning, Joe!
          </h1>
        </div>
        <Link href="/help" className="flex items-center gap-2 text-black">
          <p className="text-black mt-7">Help & feedback</p>
          <CircleHelp alt="help" width={24} height={24} className="mr-3 mt-7" />
        </Link>
      </div>

      {/* Info data */}
      <div className="grid grid-cols-3 gap-6">
        {infoData.map((info) => (
          <div
            key={info.id}
            className="p-4 bg-[#F9FAFB] rounded-lg shadow-md flex items-center"
          >
            <Image src={info.img} alt={info.title} width={50} height={50} />
            <div className="ml-4">
              <h2 className="font-semibold text-l text-[#757575]">
                {info.title}
              </h2>
              <p className="text-sm text-[#868686]">{info.description}</p>
            </div>
          </div>
        ))}
      </div>

      <TaskAction onCreateTask={handleCreateTask} />

      {/* Task sections */}
      <section className="grid grid-cols-4 gap-3 rounded-lg p-3 shadow-md text-[#606060]">
        {["To do", "In progress", "Under review", "Finished"].map((status) => (
          <div
            key={status}
            className="space-y-2"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, status)}
          >
            <h1 className="font-normal text-base text-[#606060]">{status}</h1>
            <div className="space-y-2">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDragStart={handleDragStart}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Modal for adding tasks */}
      {isModalOpen && (
        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleAddTask}
        />
      )}
    </div>
  );
};

export default RightSide;
