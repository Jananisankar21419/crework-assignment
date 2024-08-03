"use client";

import React, { useState } from "react";
import Image from "next/image";
import { addTask } from "../services/taskservice"; 

const PostModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("To do");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        title,
        status,
        priority,
        deadline,
        description,
        content,
      };
      await onSubmit(newTask); // Call onSubmit prop with the new task
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center h-full bg-black bg-opacity-40 z-50">
      <div className="bg-white w-[90%] max-w-3xl p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-800"
            >
              <Image src="/close.svg" alt="Close" width={24} height={24} />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-800">
              <Image src="/resize.svg" alt="Resize" width={24} height={24} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-200">
              Share
              <Image src="/share1.svg" alt="Share" width={24} height={24} />
            </button>
            <button className="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-200">
              Favorite
              <Image
                src="/favourite.svg"
                alt="Favorite"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <form className="space-y-9" onSubmit={handleSubmit}>
          <input
            className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="space-y-6">
            {[
              {
                label: "Status",
                value: status,
                setter: setStatus,
                src: "/status.svg",
              },
              {
                label: "Priority",
                value: priority,
                setter: setPriority,
                src: "/priority.svg",
              },
              {
                label: "Deadline",
                value: deadline,
                setter: setDeadline,
                src: "/deadline.svg",
              },
              {
                label: "Description",
                value: description,
                setter: setDescription,
                src: "/description.svg",
              },
            ].map(({ label, value, setter, src }) => (
              <div key={label} className="flex items-center gap-4">
                <label className="flex items-center gap-2 w-40">
                  <Image src={src} alt={label} width={24} height={24} />
                  {label}
                </label>
                <input
                  type="text"
                  className="w-full px-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="not selected"
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                />
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 w-40">
                <Image
                  src="/content.svg"
                  alt="Content"
                  width={24}
                  height={24}
                />
                Content
              </label>
              <textarea
                className="w-full h-32 px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#3D2CA4]  text-white rounded-md"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
