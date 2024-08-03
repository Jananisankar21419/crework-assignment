"use client";

import React, { useState } from "react";
import { createTask } from "../services/taskservice.mjs"; 

const PostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(title);
      onClose(); // Close the modal after successful task creation
    } catch (error) {
      console.error("Error creating task:", error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-4 p-2 border rounded-md"
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md"
          >
            Create
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default PostModal;
