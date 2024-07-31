"use client";

import React from "react";
import Sidebar from "./Sidebar";
import RightSide from "./RightSide";
import PostModal from "./PostModal";

const Dashboard = ({ isModalOpen, onOpenModal, onCloseModal }) => {
  return (
    <div className="flex">
      <Sidebar onOpenModal={onOpenModal} />
      <div className="flex-grow bg-white min-h-screen relative">
        <RightSide />
        <main className="p-10"></main>
        <PostModal isOpen={isModalOpen} onClose={onCloseModal} />
      </div>
    </div>
  );
};

export default Dashboard;
