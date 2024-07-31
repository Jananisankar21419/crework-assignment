import React from "react";

import { PlusCircle } from "lucide-react";

const AddTaskButton = () => {
  return (
    <button className="flex w-full text-base rounded-lg p-2 text-[#E3E1E1] bg-[#313131] justify-between items-center">
      Add new
      <PlusCircle className="w-6 h-6 text-white" />
    </button>
  );
};

export default AddTaskButton;
