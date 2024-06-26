import { IoChevronDown } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="mx-10 mt-5 flex justify-between items-center font-medium">
      <div className="px-4 py-3 bg-[#E7E7E7] text-[#DC4A2D] font-medium ">
        Logo
      </div>

      <div className="flex items-center gap-20 p-2 border rounded-full">
        <div className="flex gap-2 px-4 py-3 rounded-full bg-[#DC4A2D] text-white border-2 border-[#FCB4A5] cursor-pointer">
          <img src="/icons/briefcase.png" />
          Jobs
        </div>
        <div className="flex gap-2 items-center cursor-pointer text-[#B0B0B0]">
          <img src="/icons/message-square-01.png" alt="" />
          <div className="absolute h-2 w-2 mb-4 ml-4 rounded-full bg-[#DC4A2D]"></div>
          Messages
        </div>
        <div className="flex items-center gap-2 cursor-pointer text-[#B0B0B0]">
          <img src="/icons/coins-hand.png" alt="" />
          Payments
        </div>
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
