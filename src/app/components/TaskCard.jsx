import React from "react";

const TaskCard = ({ task, onDragStart }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "Medium":
        return "bg-[#FFA235] text-white";
      case "Low":
        return "bg-[#0ECC5A] text-white";
      case "Urgent":
        return "bg-[#FF6B6B] text-white";
      default:
        return "";
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      className="border p-4 rounded-lg shadow-sm bg-white"
    >
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <div className="flex justify-between mt-2">
        <button
          className={`py-1 px-2 rounded ${getPriorityClass(task.priority)}`}
        >
          {task.priority}
        </button>
        <span>{new Date(task.timestamp).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default TaskCard;
