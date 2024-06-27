import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { LuBriefcase } from "react-icons/lu";
import { PiHandCoins } from "react-icons/pi";

export default function Navbar() {
  const [tabs, setTabs] = useState([
    {
      title: "Jobs",
      icon: LuBriefcase,
      active: true,
    },
    {
      title: "Messages",
      icon: FiMessageSquare,
      active: false,
    },
    {
      title: "Payments",
      icon: PiHandCoins,
      active: false,
    },
  ]);

  const handleTabClick = (index: number) => {
    const newTabs = tabs.map((tab, i) => ({
      ...tab,
      active: i === index,
    }));
    setTabs(newTabs);
  };

  return (
    <div className="mx-[40px] my-[24px] flex justify-between items-center font-medium transition-all">
      <a
        href="/"
        className="px-6 py-3 text-center bg-[#E7E7E7] text-[#DC4A2D] text-[20px] font-[700] "
      >
        Logo
      </a>

      <div className="hidden md:flex items-center gap-16 p-2 border rounded-full transition-all">
        {tabs.map((item, idx) => (
          <button key={idx} className="" onClick={() => handleTabClick(idx)}>
            <div
              className={`flex gap-2 items-center cursor-pointer 
                ${
                  item.active
                    ? "px-4 py-3 text-white bg-[#DC4A2D] border-[#FCB4A5] rounded-full"
                    : "text-[#B0B0B0]"
                }
              `}
            >
              <item.icon className="w-5 h-5 mb-1" />
              {item.title}
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <img src="/icons/bell-02.png" alt="" className="cursor-pointer" />
        <div className="absolute h-2 w-2 mb-6 ml-5 rounded-full bg-[#DC4A2D]"></div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/icons/Rectangle 5.png" alt="" />
          <IoChevronDown width={5} />
        </div>
      </div>
    </div>
  );
}
