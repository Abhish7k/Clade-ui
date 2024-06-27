export default function CompanyDetails() {
  return (
    <div className="px-20 py-20 border-t flex flex-col gap-3 font-[500]">
      <div className="flex items-center mb-4">
        <img
          src={CompDetails.logo}
          alt={`${CompDetails.name} logo`}
          className="w-8 h-8 mr-2 mb-1"
        />
        <h1 className="text-[20px] font-[500] text-[#4F4F4F]">
          {CompDetails.name}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 text-gray-800">
        {CompDetails.details.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h3 className="text-[14px] text-[#6E6D6D]">{item.label}</h3>
            <p className="text-[16px] text-[#3D3D3D]">{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const CompDetails = {
  logo: "/icons/atlassion-logo.png",
  name: "Atlassion",
  details: [
    {
      label: "Company Size",
      data: "1k - 2k Employees",
    },
    {
      label: "Type",
      data: "Private",
    },
    {
      label: "Sector",
      data: "Information Technology, Infrastructure",
    },
    {
      label: "Funding",
      data: "Bootstrapped",
    },
    {
      label: "Founded In",
      data: "2019",
    },
    {
      label: "Founded By",
      data: "Scott Farquhar,U+00a0 Mike Cannon-Brookes",
    },
  ],
};