import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="px-10 py-10 h-full bg-[#FCFCFC] font-[500] border border-[#E7E7E7] shadow ">
      <div className="grid grid-cols-2 gap-4 text-[16px]">
        <div className="">
          <button className="flex w-full justify-center py-3 items-center gap-2 bg-[#FEF4F2] text-[#DC4A2D] border-[0.8px] border-[#DC4A2D] rounded-lg hover:bg-red-100 transition-all">
            <img src="/icons/trash-03.png" alt="" />
            Delete job
          </button>
        </div>
        <div className="">
          <button className="flex w-full justify-center px-6 py-3 items-center gap-2 bg-[#DC4A2D] text-white rounded-lg border-2 border-[#FED3CA] hover:bg-red-600 transition-all">
            <img src="/icons/edit-02.png" alt="" />
            Edit job
          </button>
        </div>
      </div>

      <div className="mt-10 items-center">
        <div className="flex flex-col gap-5 ">
          {stats.map((item, idx) => (
            <div key={idx} className="flex justify-between border-b pb-5">
              <div className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <h1 className="text-[#4F4F4F]">{item.label}</h1>
              </div>
              <h1 className="font-semibold text-[#3D3D3D]">{item.stat}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    icon: LuUsers,
    label: "Applicants",
    stat: 400,
  },
  {
    icon: TbUserCheck,
    label: "Matches",
    stat: 100,
  },
  {
    icon: FiMessageSquare,
    label: "Messages",
    stat: 147,
  },
  {
    icon: IoEyeOutline,
    label: "Views",
    stat: 800,
  },
];
