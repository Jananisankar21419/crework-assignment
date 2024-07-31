"use client";

import React, { useState } from "react";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Dashboard
      isModalOpen={isModalOpen}
      onOpenModal={handleOpenModal}
      onCloseModal={handleCloseModal}
    />
  );
};

export default DashboardPage;
