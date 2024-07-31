import Image from "next/image";

const TaskAction = () => {
  return (
    <div className="flex items-center justify-between mt-[80px] pl-2">
      <div className="flex relative items-center">
        <input
          className="bg-white border border-[#E9E9E9] rounded-lg p-2 shadow-md"
          type="text"
          placeholder="Search"
        />
        <Image
          className="absolute right-2"
          src="./search.svg"
          width={15}
          height={15}
          alt="search"
        />
      </div>
      <div className="flex items-center gap-4 text-[#797979]">
        <button className="font-normal flex items-center gap-4 p-2 rounded-md bg-[#F4F4F4] text-[#797979]">
          Calendar view
          <Image src="/calender.svg" alt="" width={24} height={24} />
        </button>
        <button className="font-normal flex items-center gap-4 p-2 rounded-md bg-[#F4F4F4] text-[#797979]">
          Automation
          <Image src="/automation.svg" alt="" width={24} height={24} />
        </button>
        <button className="font-normal flex items-center gap-4 p-2 rounded-md bg-[#F4F4F4] text-[#797979]">
          Filter
          <Image src="/filter.svg" alt="" width={24} height={24} />
        </button>
        <button className="font-normal flex items-center gap-4 p-2 rounded-md bg-[#F4F4F4] text-[#797979]">
          Share
          <Image src="/share.svg" alt="" width={24} height={24} />
        </button>
        <button className="font-normal flex items-center gap-4 bg-[#3D2CA4] text-white p-2 rounded-lg">
          Create new
          <Image src="/task.svg" alt="" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default TaskAction;
