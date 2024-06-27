import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Tabs />
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <JobDetails />
        </div>
        <div className="col-span-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
