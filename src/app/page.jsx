"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SignupForm from "./components/SignupForm";

import Dashboard from "./components/Dashboard";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleAuthentication = () => setIsAuthenticated(true);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard
          isModalOpen={isModalOpen}
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
        />
      ) : (
        <>
          <SignupForm onSignUp={handleAuthentication} />
        </>
      )}
    </>
  );
};

export default Home;
