import AboutTheJobs from "./AboutTheJobs";
import CompanyDetails from "./CompanyDetails";

export default function JobDetails() {
  return (
    <div className="pt-10 rounded-lg shadow-sm">
      <div className="flex pl-20 items-center gap-5 mb-2">
        <h1 className="text-[35px] font-semibold text-[#3D3D3D] ">
          {jobDetails.title}
        </h1>
        <div className="h-2 w-2 rounded-full bg-[#D1D1D1]"></div>
        <span className="flex items-center">
          <span className="mr-2 text-[14px] font-medium text-[#888888]">{`posted ${jobDetails.postedDate} ago`}</span>
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              jobDetails.status === "Open"
                ? "bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]"
                : "bg-red-100 text-red-800"
            }`}
          >
            <span
              className={`w-2 h-2 mr-1 rounded-full ${
                jobDetails.status === "Open" ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            {jobDetails.status}
          </span>
        </span>
      </div>
      <div className="mt-6 pl-20 flex items-center gap-4 text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <img
            src="/icons/marker-pin-01.png"
            alt=""
            className="w-5 h-5 mb-0.5"
          />
          <span className="text-xl text-[#5D5D5D] font-medium">
            {jobDetails.location}
          </span>
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-[#D1D1D1]"></div>
        <div className="flex items-center gap-2">
          <img src="/icons/coins-stacked-03.png" alt="" className="w-5" />
          <span className="text-xl text-[#5D5D5D] font-medium">
            {jobDetails.salaryRange}
          </span>
        </div>
      </div>

      <div className="flex pl-20 pt-10 pb-10 gap-20 space-x-8 mb-4 border-t">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-[#6E6D6D]">
            Skills Required
          </h3>
          <div className="">
            {jobDetails.skills.map((skill, idx) => (
              <div
                key={idx}
                className="font-medium text-xs text-[#344054] flex items-center gap-2 px-2 py-1 my-2 w-fit border rounded-lg border-[#D0D5DD]"
              >
                <img src={skill.icon} alt="" className="w-5 h-5" />
                {skill.title}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#6E6D6D] mb-2">
            Preferred Language
          </h3>
          <p className="font-semibold text-[#3D3D3D]">{jobDetails.language}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#6E6D6D] mb-2">Type</h3>
          <p className="font-semibold text-[#3D3D3D]">{jobDetails.type}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#6E6D6D] mb-2">
            Years of Experience
          </h3>
          <p className="font-semibold text-[#3D3D3D]">
            {jobDetails.experience}
          </p>
        </div>
      </div>

      <AboutTheJobs />

      <CompanyDetails />
    </div>
  );
}

const jobDetails = {
  title: "Senior Product Designer",
  location: "Delaware, USA",
  salaryRange: "$300k-$400k",
  postedDate: "2 days",
  status: "Open",
  skills: [
    {
      title: "Figma",
      icon: "/icons/figma-icon.png",
    },
    {
      title: "Adobe Illustrator",
      icon: "/icons/illustrator-icon.png",
    },
    {
      title: "Adobe XD",
      icon: "/icons/xd-icon.png",
    },
  ],
  language: "English",
  type: "Full time",
  experience: "3+ Years of Experience",
};
