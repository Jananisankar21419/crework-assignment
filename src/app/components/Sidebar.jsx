"use client";

import Image from "next/image";
import Link from "next/link";
import {
  House,
  SquareKanban,
  Settings,
  Users,
  ChartLine,
  BellDot,
  ChevronsRight,
  MoveDown,
  Plus,
} from "lucide-react";

const Sidebar = ({ onOpenModal }) => {
  const links = [
    {
      href: "/home",
      label: "Home",
      icon: <House className="text-[#797979]" />,
    },
    {
      href: "/boards",
      label: "Boards",
      icon: <SquareKanban className="text-[#797979]" />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <Settings className="text-[#797979]" />,
    },
    {
      href: "/teams",
      label: "Teams",
      icon: <Users className="text-[#797979]" />,
    },
    {
      href: "/analytics",
      label: "Analytics",
      icon: <ChartLine className="text-[#797979]" />,
    },
  ];

  return (
    <nav className="bg-white p-4 space-y-4 w-70 h-screen flex flex-col flex-shrink-0 border-gray-500">
      <div className="flex-grow">
        <div className="flex items-center gap-4 py-3">
          <Image
            src="/pfp.svg"
            alt="Profile"
            className="rounded-md"
            width={48}
            height={48}
          />
          <p className="text-[#000000] font-medium text-2xl">Joe Gardner</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <BellDot className="text-[#797979] w-6 h-6" />
          <Image
            src="/sun.svg"
            alt="Sun"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <ChevronsRight className="text-[#797979] w-6 h-6" />
          <button className="ml-auto px-4 py-2 text-[#797979] bg-[#F3F3F3] rounded-md font-medium">
            Logout
          </button>
        </div>

        <ul className="space-y-2 text-[#797979] text-lg">
          {links.map(({ href, label, icon }) => (
            <li
              key={href}
              className="flex items-center gap-3 p-2 rounded-md border-gray-300 bg-white"
            >
              <div className="flex-shrink-0">{icon}</div>
              <Link href={href} className="text-[#797979] font-semibold">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={onOpenModal}
          className="flex items-center gap-2 px-7 py-2 mt-4 text-white bg-[#3D2CA4] rounded-md font-medium"
        >
          Create New Task
          <Plus className="w-5 h-5 bg-white text-[#3D2CA4] rounded-md" />
        </button>
      </div>

      {/* The div pushed to the bottom */}
      <div className="box-border w-59 h-20 border-2 mt-auto mb-2 pb-1 bg-[#F3F3F3] rounded-md text-white flex justify-evenly items-center">
        <div className="p-0.5 text-[#494F64] rounded-sm">
          <MoveDown />
        </div>
        <div className="flex flex-col justify-center h-2">
          <p className="text-l font-medium text-[#666666] items-center">
            Download the app
          </p>
          <p className="text-xs font-light text-[#666666] items-center">
            Get the full experience
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
