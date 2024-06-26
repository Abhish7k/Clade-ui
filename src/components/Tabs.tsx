import { useState } from "react";

export default function Tabs() {
  const [tabs, setTabs] = useState([
    {
      title: "Job preview",
      active: true,
    },
    {
      title: "Applicants",
      active: false,
    },
    {
      title: "Match",
      active: false,
    },
    {
      title: "Messages",
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
    <div className="flex flex-col items-start gap-10 mt-5 pt-5 px-20 font-medium border-[1px] border-[#E7E7E7] shadow-sm">
      <div className="grid grid-cols-4 items-start gap-10">
        {tabs.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <button
              className={`${
                item.active ? "text-[#DC4A2D]" : "text-[#888888]"
              } cursor-pointer`}
              onClick={() => handleTabClick(idx)}
            >
              {item.title}
            </button>
            <div
              className={`${item.active ? "block" : "hidden"}
              h-0.5 mt-5 mx-4 bg-[#DC4A2D]
            `}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
