export default function AboutTheJobs() {
  return (
    <div className="pl-20 py-10 border-t">
      <h3 className="text-sm font-semibold text-[#6E6D6D] mb-2">
        About the job
      </h3>
      <ol className="list-decimal list-inside text-gray-800 mb-2">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>
          Work on creating graphics content and other graphic related works
        </li>
      </ol>
      <div className="text-[#3D3D3D] mb-2">
        <h1>Benefits:</h1>
        <ul className="list-disc list-inside ml-4">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
      </div>
      <div className="text-gray-800 mb-2">
        <h1>Schedule:</h1>
        <ul className="list-disc list-inside ml-4">
          <li>Day shift</li>
        </ul>
      </div>
      <div className="text-gray-800 mb-2">
        <h1>Supplemental pay types:</h1>
        <ul className="list-disc list-inside ml-4">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
      </div>
      <div className="text-gray-800 flex gap-2">
        <h1>Work Location:</h1> In person
      </div>
    </div>
  );
}
